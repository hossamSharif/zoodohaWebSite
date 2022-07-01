import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }

  login(){
    this.rout.navigate(['login']); 
  }
  froget(){
    this.rout.navigate(['forget-password']); 

  }
  verify(){
    this.rout.navigate(['verify']); 

  }
}
