import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AdminsComponent } from './_components/admins/admins.component';
import { CreateGroupComponent } from './_components/create-group/create-group.component';
import { CreateTaskComponent } from './_components/create-task/create-task.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import { EditTaskComponent } from './_components/edit-task/edit-task.component';
import { GroupDetailsComponent } from './_components/group-details/group-details.component';
import { GroupsComponent } from './_components/groups/groups.component';
import { InvitationsComponent } from './_components/invitations/invitations.component';
import { MenuComponent } from './_components/menu/menu.component';
import { MyGroupsComponent } from './_components/my-groups/my-groups.component';
import { RequestsComponent } from './_components/requests/requests.component';
import { SignupComponent } from './_components/signup/signup.component';
import { SigninComponent } from './_components/signin/signin.component';
import { UsersComponent } from './_components/users/users.component';
import { HomeComponent } from './_components/home/home.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { BoardAdminComponent } from './_components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './_components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './_components/board-user/board-user.component';
import { HeaderComponent } from './_components/header/header.component';
import { FooterComponent } from './_components/footer/footer.component';
import { SiderComponent } from './_components/sider/sider.component'


@NgModule({
  declarations: [
    AppComponent,
    AdminsComponent,
    CreateGroupComponent,
    CreateTaskComponent,
    DashboardComponent,
    EditTaskComponent,
    GroupDetailsComponent,
    GroupsComponent,
    InvitationsComponent,
    MenuComponent,
    MyGroupsComponent,
    RequestsComponent,
    SignupComponent,
    SigninComponent,
    UsersComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HeaderComponent,
    FooterComponent,
    SiderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
