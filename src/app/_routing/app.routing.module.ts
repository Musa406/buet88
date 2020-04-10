import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MembersListComponent } from '../members/members-list/members-list.component';
import { MembersDetailsComponent } from '../members/members-details/members-details.component';
import { AuthGuardService } from '../_service/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/member', pathMatch:'full'},
  { path: 'member', component: MembersListComponent},
  { path: 'member/member-details/:id', component: MembersDetailsComponent,
  canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }