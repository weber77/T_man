import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUsername = '';

  constructor(
    private userService: UserService
    ) {
    this.currentUsername = this.getCurrentUser().userName;
    console.log(this.currentUsername);
  }

  ngOnInit(): void {

  }

  getCurrentUser(): User {
    return this.userService.getLoggedInUser();
  }
}
