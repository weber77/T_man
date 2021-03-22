import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  userRole = '';

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    //this.userRole = this.userService.getUserRole();
  }
}
