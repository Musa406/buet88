import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersDetailsComponent } from '../members/members-details/members-details.component';
import { MembersListComponent } from '../members/members-list/members-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/member', pathMatch:'full'},
  { path: 'member', component: MembersListComponent},
  { path: 'member-details', component: MembersDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }