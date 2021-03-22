import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/_models/group';
import { GroupService } from 'src/app/_services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[];

  constructor(
    private groupService: GroupService
  ) {
    this.groups = this.groupService.getGroups();
  }

  ngOnInit(): void {
  }


}
