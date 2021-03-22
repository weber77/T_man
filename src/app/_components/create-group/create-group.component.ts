import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/_models/admin';
import { Group } from 'src/app/_models/group';
import { User } from 'src/app/_models/user';
import { GroupService } from 'src/app/_services/group.service';
import { UserService } from 'src/app/_services/user.service';
import {StorageService} from '../../_services/storage.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  group: Group;
  users: User[];
  admins: Admin[];
  selectedUsers: User[];

  constructor(
    private router: Router,
    private storageService: StorageService,
    private userService: UserService,
    private groupService: GroupService
  ) {
    this.selectedUsers = [];
    this.users = this.userService.getUsers();
    this.admins = this.userService.getAdmins();
    this.group = new Group(0, '', '', new Admin(0, '', '', '', '', ''));
  }

  ngOnInit(): void {
  }

  addGroup(): void {
    console.log(this.group.admin);
    this.groupService.groupCount += 1;
    this.group.id = this.groupService.groupCount;
    const groups = this.groupService.getGroups();
    groups.push(this.group);
    this.storageService.setGroups(groups);
    this.router.navigate(['/allgroups']);
  }

}
