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

  
  id: number;
  tasks: any [] = [];
  response: any;
  admin: any;
  members: any [] = [];
  groupId: String;

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private userService: UserService,
    private taskService: TaskService
  ) {
    this.groupId = this.route.snapshot.paramMap.get('_id') ;
    
  }

  ngOnInit(): void {
    this.getGroups(this.groupId);
  }


  getGroups(id): any {
    this.groupService.getGroupById(id).subscribe(
      (data: any) => 
      
      { 

        this.response = data;        
        this.userService.getUserById(this.response.admin).subscribe(
          (admin: any) =>{
            this.admin = admin;         
          }
        );

        this.response.members.forEach(element => {
          this.userService.getUserById(element).subscribe(
            (user: any) => {              
              this.members.push(user);
            }
          )
        });
        
        this.response.tasks.forEach(element => {
          this.taskService.getTask(element).subscribe(
            (task: any) =>{
              this.tasks.push(task);
            }
          )
        });
      
      },
      err => {

      }
    );



  }
  


  getTasks(groupId: number): Task[] {
    return this.taskService.getTasksOfGroup(groupId);
  }

  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.getTasks(this.id);
  }
}
