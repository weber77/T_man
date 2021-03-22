import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from 'src/app/_models/group';
import { Task } from 'src/app/_models/task';
import { User } from 'src/app/_models/user';
import { GroupService } from 'src/app/_services/group.service';
import { UserService } from 'src/app/_services/user.service';
import {TaskService} from '../../_services/task.service';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  groupMembers: User[];
  task: Task;
  id: number;
  group: Group;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private taskService: TaskService,
    private groupService: GroupService
  ) {
    this.task = new Task(0, '', '', 'unassigned', 'none', undefined, undefined);
    this.id = parseInt(this.route.snapshot.paramMap.get('id') as string, 10);
    this.groupMembers = this.getGroupMembers(this.id);
    this.group = this.getGroup();
  }

  ngOnInit(): void {
  }

  getGroupMembers(groupId: number): User[] {
    return this.userService.getUsersOfGroup(groupId);
  }

  addTask(): void {
    console.log(this.task);
    this.taskService.taskCount += 1;
    this.task.id = this.taskService.taskCount;
    this.task.group = this.groupService.getGroup(this.id);

    if (this.task.user) {
      this.task.assignmentStatus = 'assigned';
      this.task.progressStatus = 'in progress';
    }

    const tasks = this.taskService.getTasks();
    tasks.push(this.task);
    this.taskService.setTasks(tasks);
    this.router.navigate(['/groups', this.id]);
    console.log(this.task);
  }

  getGroup(): Group {
    return this.groupService.getGroup(this.id);
  }
}
