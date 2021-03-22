import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/_models/admin';
import { Group } from 'src/app/_models/group';
import { JoinRequest } from 'src/app/_models/join-request';
import { User } from 'src/app/_models/user';
import { UserGroup } from 'src/app/_models/user-group';
import { GroupService } from 'src/app/_services/group.service';
import { RequestsService } from 'src/app/_services/requests.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: JoinRequest[];
  loggedInUser: User;
  userRole: string;
  group = new Group(0, '', '', new Admin(0, '', '', '', '', ''));
  showGroupForm = false;
  groups: Group[];
  message = '';

  constructor(
    private requestsService: RequestsService,
    private userService: UserService,
    private groupService: GroupService
  ) {
    this.loggedInUser = this.userService.getLoggedInUser();
    this.userRole = this.userService.getUserRole(this.loggedInUser);
    this.requests = [];
    this.loadRequests();
    this.groups = this.groupService.getGroups();
  }

  ngOnInit(): void {
  }

  loadRequests(): void {
    if (this.userRole === 'user') {
      this.requests = this.requestsService.getJoinRequestsOfUser(this.loggedInUser.userName);
    } else if (this.userRole === 'admin') {
      this.requests = this.requestsService.getJoinRequests();
    }
  }

  showGroups(): void {
    this.showGroupForm = true;
  }

  sendJoinRequest(): void {
    console.log(this.loggedInUser.firstName);
    console.log(this.group.name);
    const joinRequestId = this.requestsService.joinRequestCount += 1;
    this.requestsService.createJoinRequest(new JoinRequest(joinRequestId, 'pending', this.loggedInUser, this.group));
    this.message = `Request for user "${this.loggedInUser.firstName} ${this.loggedInUser.lastName}" to join group "${this.group.name}" has been sent`;
    this.showGroupForm = false;
    this.loadRequests();
  }

  acceptRequest(request: JoinRequest): void {
    // update request with corresponding requestId, changing request.status to accepted;
    console.log(request);
    this.requestsService.updateJoinRequest(request, 'accepted');
    // add user to class/array userGroup
    const userGroupId = this.userService.userGroupCount += 1;
    this.userService.addUserToGroup(new UserGroup(userGroupId, request.user, request.group));
    this.loadRequests();
  }

  rejectRequest(request: JoinRequest): void {
    console.log(request);
    // update request with corresponding requestId, changing request.status to rejected;
    this.requestsService.updateJoinRequest(request, 'rejected');
    this.loadRequests();
  }
}
