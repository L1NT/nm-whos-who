import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MemberComponent } from './member/member.component';
import { MemberListComponent } from './member/member-list.component';

import { MeetupService } from './meetup.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    MeetupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
