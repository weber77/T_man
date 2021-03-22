import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import {Login} from '../../_models/login';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // form: any = {};
  // isLoggedIn = false;
  // isLoginFailed = false;
  // errorMessage = '';
  // roles: string[] = [];

  // constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  
  // ngOnInit(): void {
  //   if (this.tokenStorage.getToken()) {
  //     this.isLoggedIn = true;
  //     this.roles = this.tokenStorage.getUser().roles;
  //   }
  // }

  // onSubmit(): void {
  //   this.authService.signin(this.form).subscribe(
  //     data => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       this.reloadPage();
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }

  // reloadPage(): void {
  //   window.location.reload();
  // }

  loginModel: Login;

  constructor(private authService: AuthService, private router: Router) {
    this.loginModel = new Login('', '');
  }

  ngOnInit(): void {}

  onSignIn(): void {
    const isLogin = this.authService.loginUser(this.loginModel);
    console.log(isLogin);
    if (isLogin) {
      console.log('User exists');
      this.router.navigate(['/dashboard']);
    } else {
      console.log('User does not exist!');
    }
  }

}
