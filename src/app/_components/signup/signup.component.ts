import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseUser } from 'src/app/_models/base-user';
import { StorageService } from 'src/app/_services/storage.service';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // form: any = {};
  // isSuccessful = false;
  // isSignUpFailed = false;
  // errorMessage = '';

  // constructor(private authService: AuthService) { }

  // ngOnInit(): void {
  // }

  // onSubmit(): void {
  //   this.authService.signup(this.form).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   );
  // }

  baseUser: BaseUser;
  role = "";

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private userService: UserService
  ) {
    this.baseUser = {email: "", firstName: "", id: 0, lastName: "", password: "", userName: ""};
  }

  ngOnInit() {
  }

  onSignUp() {
    console.log(this.baseUser);

    if (this.role === 'user') {
      this.userService.userCount += 1;
      this.baseUser.id = this.userService.userCount;
      this.authService.createUser(this.baseUser);
    } else if (this.role === 'admin') {
      this.baseUser.id = this.storageService.adminCount + 1;
      this.authService.createAdmin(this.baseUser);
    }

    this.router.navigate(['/']);
  }

}
