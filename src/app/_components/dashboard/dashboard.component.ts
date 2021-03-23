import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: any;


  constructor( private token: TokenStorageService) {  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
