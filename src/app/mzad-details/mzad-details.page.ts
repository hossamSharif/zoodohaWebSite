import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-mzad-details',
  templateUrl: './mzad-details.page.html',
  styleUrls: ['./mzad-details.page.scss'],
})
export class MzadDetailsPage implements OnInit {
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

   prepare(){ 
  
    console.log(this.second)
    let d = new Date 
    this.startDate = this.datePipe.transform(d, 'yyyy/MM/dd')
    this.startAfter = "01" + " : "+ "14" + " : "+ "20" + " : " + "10"
    //this.startAfter = this.da + ": "+ this.hr + " : "+ this.mn + " : " + this.sc
  
 
  }
  ngOnInit() {
  }

}
