import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/_models/group';
import { Task } from 'src/app/_models/task';
import { User } from 'src/app/_models/user';
import { GroupService } from 'src/app/_services/group.service';
import { TaskService } from 'src/app/_services/task.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  groupId: number;
  taskId: number;
  group: Group;
  task: Task;
  groupMembers: User[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private taskService: TaskService,
    private userService: UserService
  ) {
    this.groupId = parseInt(this.route.snapshot.paramMap.get('groupId') as string, 10);
    this.taskId = parseInt(this.route.snapshot.paramMap.get('taskId') as string, 10);
    this.group = this.groupService.getGroup(this.groupId);
    this.task = this.taskService.getTask(this.taskId);
    this.groupMembers = this.userService.getUsersOfGroup(this.groupId);
  }

  ngOnInit(): void {
  }

  updateTask(taskId: number, task: Task): void {
    this.taskService.updateTask(taskId, task);
    this.router.navigate(['/groups', this.groupId]);
  }
}
