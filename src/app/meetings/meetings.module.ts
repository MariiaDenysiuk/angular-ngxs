import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';
import { MeetingsListComponent } from './components/meetings-list/meetings-list.component';
import { AddMeetingComponent } from './components/add-meeting/add-meeting.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [MeetingsListComponent, AddMeetingComponent],
  imports: [
    CommonModule,
    MeetingsRoutingModule,
    MatCardModule
  ]
})
export class MeetingsModule { }
