import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private rout : Router) { }

  ngOnInit() {
  }

  login(){
    this.rout.navigate(['tabs']); 
  }
  signUp(){
    this.rout.navigate(['sign-up']); 
  }

}
