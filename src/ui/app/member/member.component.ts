import {Component, Input} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Member} from '../meetup.service';

@Component({
  selector: 'nm-ww-member',
  template: `
    <div class="media">
      <img class="media-left hidden-sm-down" [src]="getPhotoUrl(member)" />
      <div class="media-body text-left ml-2 pr-2">
        <div class="row">
          <h4 class="col col-sm-12">
            <a href="{{member.link}}" target="_blank">
              {{member.name}}
            </a>
          </h4>
          <div class="col col-auto col-sm-12">{{member.city}}{{member.city && member.state ? ", " : ""}}{{member.state}}</div>
        </div>

        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4">Joined: {{member.joined | date}}</div>
          <div class="col-12 col-sm-6 col-lg-8">Bio: {{member.bio}}</div>
        </div>

        <div class="row">
          <div class="col-12 col-md-4">Memberships: {{member.membership_count}}</div>
          <div class="hidden-sm-down col-md-8">Topics:
            <div *ngFor="let topic of member.topics"
                class="badge badge-pill badge-secondary m-1">
              {{topic.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    ':host {flex: 1;}',
    '.badge-pill {background-color: grey;}',
    'img {max-height: 180px; max-width: 180px;}'
  ]
})
export class MemberComponent {
  @Input() public member:Member;

  public constructor(private sanitizer:DomSanitizer) { }

  private getPhotoUrl(member:Member):SafeResourceUrl {
    let photoURL:string = member.photo && member.photo.photo_link;
    return this.sanitizer.bypassSecurityTrustResourceUrl(photoURL || '');
  }
}
