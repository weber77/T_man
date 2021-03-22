import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/_models/admin';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  admins: Admin[];

  constructor(
    private userService: UserService
  ) {
    this.admins = this.getAdmins();
  }

  ngOnInit(): void {
  }

  getAdmins(): Admin[] {
    return this.userService.getAdmins();
  }
}
