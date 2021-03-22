import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/_models/admin';
import { Group } from 'src/app/_models/group';
import { InviteRequest } from 'src/app/_models/invite-request';
import { User } from 'src/app/_models/user';
import { UserGroup } from 'src/app/_models/user-group';
import { GroupService } from 'src/app/_services/group.service';
import { UserService } from 'src/app/_services/user.service';
import {RequestsService} from '../../_services/requests.service';


@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  invitations: InviteRequest[];
  loggedInUser: any;
  userRole: string;
  group = new Group(0, '', '', new Admin(0, '', '', '', '', ''));
  showGroupForm = false;
  groups: Group[];
  message = '';
  users: User[];
  user = new User(0, '', '', '', '', '');

  constructor(
    private requestsService: RequestsService,
    private userService: UserService,
    private groupService: GroupService
  ) {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.userRole = this.userService.getUserRole(this.loggedInUser);
    this.invitations = [];
    this.loadRequests();
    this.groups = this.groupService.getGroups();
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

  loadRequests(): void {
    if (this.userRole === 'user') {
      this.invitations = this.requestsService.getInviteRequestsOfUser(this.loggedInUser.userName);
    } else if (this.userRole === 'admin') {
      this.invitations = this.requestsService.getInviteRequests();
    }
  }

  showGroups(): void {
    this.showGroupForm = true;
  }

  sendInviteRequest(): void {
    console.log(this.user.firstName);
    console.log(this.group.name);
    const inviteRequestId = this.requestsService.inviteRequestCount += 1;
    this.requestsService.createInviteRequest(new InviteRequest(inviteRequestId, 'pending', this.user, this.group));
    this.message = `Request for user "${this.user.firstName} ${this.user.lastName}" to join group "${this.group.name}" has been sent`;
    this.showGroupForm = false;
    this.loadRequests();
  }

  acceptRequest(request: InviteRequest): void {
    // update request with corresponding requestId, changing request.status to accepted;
    console.log(request);
    this.requestsService.updateInviteRequest(request, 'accepted');
    // add user to class/array userGroup
    const userGroupId = this.userService.userGroupCount += 1;
    this.userService.addUserToGroup(new UserGroup(userGroupId, request.user, request.group));
    this.loadRequests();
  }

  rejectRequest(request: InviteRequest): void {
    console.log(request);
    // update request with corresponding requestId, changing request.status to rejected;
    this.requestsService.updateInviteRequest(request, 'rejected');
    this.loadRequests();
  }
}
