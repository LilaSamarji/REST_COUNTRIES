import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  constructor(private r: Router, public auth: AuthService) {

  }
  Login() {

    this.auth.IsLoggedIn = true;
    this.r.navigate(['/home']);
  }
  cancel() {

    this.username = '';
    this.password = '';
  }



}
