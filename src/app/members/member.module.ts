import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembersListComponent } from './members-list/members-list.component';
import { MembersDetailsComponent } from './members-details/members-details.component';

const memberComponents = [
  MembersListComponent,
  MembersDetailsComponent,
];

@NgModule({
  declarations: [memberComponents],
  imports: [
    CommonModule
  ],
  exports:[memberComponents]
})

export class MemberModule { }
