import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Admin } from '../_models/admin';
import { UserService } from './user.service';
import { StorageService } from './storage.service';
import { Login } from '../_models/login';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpClient) { }

  // signin(credentials): Observable<any> {
  //   return this.http.post(AUTH_API + 'signin', {
  //     username: credentials.username,
  //     password: credentials.password
  //   }, httpOptions);
  // }

  // signup(user): Observable<any> {
  //   return this.http.post(AUTH_API + 'signup', {
  //     username: user.username,
  //     email: user.email,
  //     password: user.password
  //   }, httpOptions);
  // }

  users: User[];
  admins: Admin[];

  constructor(
    private userService: UserService,
    private storageService: StorageService
  ) {
    this.users = this.userService.getUsers();
    this.admins = this.userService.getAdmins();
  }

  public createUser(user: User): any {
    this.users.push(user);
    this.storageService.setUsers(this.users);
  }

  public createAdmin(user: Admin): any {
    this.admins.push(user);
    this.storageService.setAdmins(this.admins);
  }

  private checkIfUserExists(loginModel: Login): boolean {
    const foundUser = this.users.some(user => (user.userName === loginModel.userName) && (user.password === loginModel.password));
    const foundAdmin = this.admins.some(admin => (admin.userName === loginModel.userName) && (admin.password === loginModel.password));
    console.log('Found user?: ' + foundUser);
    console.log('Found admin?: ' + foundAdmin);
    return (foundUser || foundAdmin);
  }

  public loginUser(loginModel: Login): boolean {
    // loop through all users in array
    // if user.userName = value, and user.password = value, save user to local storage and return true

    const userExists = this.checkIfUserExists(loginModel);

    if (userExists) {
      localStorage.setItem('user', JSON.stringify(loginModel));
    }
    return userExists;
  }
}
