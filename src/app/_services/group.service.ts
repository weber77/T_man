import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {Group} from '../_models/group';
import {UserService} from "../_services/user.service";




const API_URL = "http://localhost:8080/api/groups/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class GroupService {
  groupCount = 4;

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) {
  }

  getGroups(): Group[] {
    return JSON.parse(localStorage.getItem('groups') as string);
  }

  createGroupRequest(): Observable<any> {
    return this.http.post(API_URL + '/createGroup/', httpOptions);
  }

  getGroupsRequest(): Observable<any> {
    return this.http.get(API_URL + '/getAllGroups', httpOptions);
  }

  getGroupById(id): Observable<any> {
    return this.http.get(API_URL + `/getGroupById/${id}`, httpOptions);
  }



  getMyGroups(): Group[] {
    const username = this.userService.getLoggedInUser().userName;
    const userGroups = this.userService.getUserGroups().filter(userGroup => userGroup.user.userName === username);
    if (userGroups) {
      console.log(userGroups.map(userGroup => userGroup.user));
      return userGroups.map(userGroup => userGroup.group);
    }
    return [];
  }

  getGroup(id: number): Group {
    return this.getGroups().find(group => group.id === id) as Group;
  }
}
