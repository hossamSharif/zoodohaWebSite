import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }

  newPassword(){
    this.rout.navigate(['login']);  
  }
}
