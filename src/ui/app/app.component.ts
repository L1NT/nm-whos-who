import {Component} from '@angular/core';

import {MeetupService} from './meetup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private type:'oauth'|'express' = 'oauth';

  public constructor(private meetupService:MeetupService) { }
}
