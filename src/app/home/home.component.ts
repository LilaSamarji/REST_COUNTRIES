import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public router: Router, public auth: AuthService) {

  }
  ngOnInit(): void {
    if (this.auth.IsLoggedIn == false) {
      this.router.navigate(['/login']);
    }
  }

}
