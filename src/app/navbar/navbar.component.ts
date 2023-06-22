import { Component, OnInit } from '@angular/core';
import { Subject} from 'rxjs';
import {distinct, debounceTime,map, distinctUntilChanged} from 'rxjs/operators';
import { AppService } from '../app-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  country:string='';
  title = 'app1';
  public keyUp=new Subject<KeyboardEvent>();
  constructor(private service:AppService,private r:Router,private auth:AuthService) {
  this.keyUp.
  pipe(
    map((event:any)=>event?.target?.value),
    debounceTime(1000),
    distinctUntilChanged()
  
    )
  .subscribe(()=>{
    console.log(this.country);
    // this.service.countryName=this.country;
    // console.log(this.service.countryName);
    this.service.DataEmitterEvent(this.country);
    this.service.countryName=this.country;
    // console.log(this.service.countryName);
    

  });
  }
  
  ngOnInit(): void {
    
  }
  Logout() {
    this.auth.IsLoggedIn=false;
    this.r.navigate(['/login']);
    }
 
  f1() {
    alert(this.country);
  }

  callAPI() {
console.log(this.country);
  }
}