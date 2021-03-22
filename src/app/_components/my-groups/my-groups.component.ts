import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/_models/group';
import { GroupService } from 'src/app/_services/group.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {
  groups: Group[];

  constructor(
    private groupService: GroupService
  ) {
    this.groups = this.groupService.getMyGroups();
  }

  ngOnInit(): void {
  }

}
