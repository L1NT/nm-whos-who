import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

import {Member, MeetupService} from '../meetup.service';

@Component({
  selector: 'nm-ww-member-list',
  template: `
    <div class="input-group mb-2" *ngFor="let member of pinned">
      <button class="btn glyphicons glyphicons-pin" (click)="pinClick(member,pinned,results)"></button>
      <nm-ww-member [member]="member"></nm-ww-member>
    </div>
    <hr />
    <div class="input-group mb-2" *ngFor="let member of results">
      <button class="btn glyphicons glyphicons-pushpin" (click)="pinClick(member,results,pinned)"></button>
      <nm-ww-member [member]="member"></nm-ww-member>
    </div>
  `,
  styles: [
    'div {border: solid 2px black;}'
  ]
})
export class MemberListComponent {
  @Input() public set query(value:string) {
    if (typeof value === 'string') {
      this.meetupService.getMembers(value)
        .debounceTime(200)
        .subscribe((members:Member[]) => {
          // TODO: filter members in this.pinned
          this.results = members;
        });
    }
  }

  private pinned:Member[] = [];
  private results:Member[] = [];

  public constructor(private meetupService:MeetupService) { }

  private pinClick(member:Member, from:Member[], to:Member[]):void {
    let index = from.findIndex((availMember:Member) => {
      return availMember.id === member.id;
    });
    from.splice(index, 1);
    to.push(member);
  }

  private unpin(member:Member):void {

  }

}
