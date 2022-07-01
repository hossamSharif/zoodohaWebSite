import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }


  newPassword(){
    this.rout.navigate(['new-password']); 

  }
}
