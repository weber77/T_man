import {Injectable} from '@angular/core';
import {Task} from '../_models/task';
import {Group} from "../_models/group";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const API_URL = "http://localhost:8080/api/tasks/";

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  taskCount = 4;
  allTasks: Task[];

  constructor(
    private http: HttpClient
  ) {
    this.allTasks = this.getTasks();
  }

  getTask(id): Observable<any> {
    return this.http.get(API_URL + `/getTaskById/${id}`, httpOptions);
  }

  createTask(task:any): Observable<any> {
    return this.http.post(API_URL + '/createTask', task, httpOptions);
  }












  getTasks(): Task[] {
    return JSON.parse(localStorage.getItem('tasks') as string);
  }

 

  getTasksOfGroup(groupId: number): Task[] {
    if (this.getTasks()) {
      return this.getTasks().filter(task => task.group?.id === groupId);
    }
    return [];
  }

  setTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  updateTask(taskId: number, task: Task): void {
    this.deleteTask(taskId);
    this.allTasks.push(task);
    this.setTasks(this.allTasks);
  }

  deleteTask(taskId: number): void {
    const index = this.allTasks.findIndex(task => task.id === taskId);
    if (index !== 1) { this.allTasks.splice(index, 1); }
    this.setTasks(this.allTasks);
  }
}
