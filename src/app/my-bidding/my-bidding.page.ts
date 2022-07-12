import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-my-bidding',
  templateUrl: './my-bidding.page.html',
  styleUrls: ['./my-bidding.page.scss'],
})
export class MyBiddingPage implements OnInit {
  startDate
  startAfter
 day:Observable<number> 
   hour:Observable<number>
    minut:Observable<number>
     second:Observable<number>
      da :any  = 10
      hr :any  = 10
      mn:any  = 30
      sc :any =30
  constructor(private datePipe:DatePipe ,private rout : Router) { 
    this.second=timer(60000, -1000)
        this.minut=timer(60000, 60000)
        this.prepare()
  }

  ngOnInit() {
  }

  mazdDetails(){
    // let navigationExtras: NavigationExtras = {
    //   queryParams: {
    //     payInvo: JSON.stringify(payInvo),
    //     sub_name: JSON.stringify(sub_name),
    //     user_info:JSON.stringify(this.user_info),
    //     store_info:JSON.stringify(this.store_info),
    //     itemList:JSON.stringify(itemList)
    //   }
    // };
    this.rout.navigate(['live-mzad']); 
  }
  prepare(){ 
  
    console.log(this.second)
    let d = new Date 
    this.startDate = this.datePipe.transform(d, 'yyyy/MM/dd')
    this.startAfter = "01" + " : "+ "14" + " : "+ "20" + " : " + "10"
    //this.startAfter = this.da + ": "+ this.hr + " : "+ this.mn + " : " + this.sc
  
 
  }
}
