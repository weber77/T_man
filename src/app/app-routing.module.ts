import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminsComponent } from './_components/admins/admins.component';
import { BoardAdminComponent } from './_components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_components/board-user/board-user.component';
import { CreateGroupComponent } from './_components/create-group/create-group.component';
import { CreateTaskComponent } from './_components/create-task/create-task.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { EditTaskComponent } from './_components/edit-task/edit-task.component';
import { GroupDetailsComponent } from './_components/group-details/group-details.component';
import { GroupsComponent } from './_components/groups/groups.component';
import { HomeComponent } from './_components/home/home.component';
import { InvitationsComponent } from './_components/invitations/invitations.component';
import { MyGroupsComponent } from './_components/my-groups/my-groups.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { RequestsComponent } from './_components/requests/requests.component';
import { SigninComponent } from './_components/signin/signin.component';
import { SignupComponent } from './_components/signup/signup.component';
import { UsersComponent } from './_components/users/users.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'admins', component: AdminsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'invitations', component: InvitationsComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'allgroups', component: GroupsComponent },
  { path: 'mygroups', component: MyGroupsComponent },
  { path: 'groups/creategroup', component: CreateGroupComponent },
  { path: 'groups/:id', component: GroupDetailsComponent },
  { path: 'groups/:id/createtask', component: CreateTaskComponent },
  { path: 'groups/:groupId/tasks/:taskId', component: EditTaskComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
