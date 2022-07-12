import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private rout : Router) { }

  ngOnInit() {
  }
  mazdDetails(){
 
    this.rout.navigate(['order-details']); 
  }
}
