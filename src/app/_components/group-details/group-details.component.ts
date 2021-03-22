import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/_models/group';
import { Task } from 'src/app/_models/task';
import { User } from 'src/app/_models/user';
import { GroupService } from 'src/app/_services/group.service';
import { TaskService } from 'src/app/_services/task.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  group: Group;
  id: number;
  users: User[];
  tasks: Task[];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private userService: UserService,
    private taskService: TaskService
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string, 10);
    this.group = this.getGroup(this.id);
    this.users = this.getUsers(this.id);
    this.tasks = this.getTasks(this.id);
  }

  ngOnInit(): void {
  }

  getGroup(id: number): Group {
    return this.groupService.getGroup(id);
  }

  getUsers(groupId: number): User[] {
    return this.userService.getUsersOfGroup(groupId);
  }

  getTasks(groupId: number): Task[] {
    return this.taskService.getTasksOfGroup(groupId);
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.getTasks(this.id);
  }
}
