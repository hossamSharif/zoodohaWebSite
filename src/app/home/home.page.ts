import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

   slideOpts = {
    slidesPerView: 3,
    nitialSlide: 0
  }

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


      // (alias) timer(dueTime?: number | Date, periodOrScheduler?: number | SchedulerLike, scheduler?: SchedulerLike): Observable<number>
      // import timer
      // Creates an Observable that starts emitting after an dueTime and emits ever increasing numbers after each period of time thereafter.
      
      // Its like index /interval, but you can specify when should the emissions start.
      
      
      
      // timer returns an Observable that emits an infinite sequence of ascending integers, with a constant interval of time, period of your choosing between those emissions. The first emission happens after the specified dueTime. The initial delay may be a Date. By default, this operator uses the asyncScheduler SchedulerLike to provide a notion of time, but you may pass any SchedulerLike to it. If period is not specified, the output Observable emits only one value, 0. Otherwise, it emits an infinite sequence.
      
      // Examples
      // Emits ascending numbers, one every second (1000ms), starting after 3 seconds
      // import { timer } from 'rxjs';
      
      // const numbers = timer(3000, 1000);
      // numbers.subscribe(x => console.log(x));
      // Emits one number after five seconds
      // import { timer } from 'rxjs';
      
      // const numbers = timer(5000);
      // numbers.subscribe(x => console.log(x))

  constructor(private datePipe:DatePipe ,private rout : Router) {
    this.second=timer(60000, -1000)
    this.minut=timer(60000, 60000)
   // this.hour=timer(60000*60, - 60000*60) 
    // this.day=timer(60000*24 , - 60000*24) 
    // this.day.subscribe(x=>{this.da = x}) 
    // this.hour.subscribe(x=> {this.hr = x}) 
   // this.minut.subscribe(x=> { this.mn = x}) 
    // this.second.subscribe(x=>{ 
    //  this.sc = x  
    //  if (x <= 1 ){
    //   this.sc = 60 
    //  }
    // })

     

   this.prepare()
   
  }

  ngOnInit() {
           
  }
 
  options(){
    
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
  this.rout.navigate(['mazad-details']); 
}

  prepare(){ 
  
    console.log(this.second)
    let d = new Date 
    this.startDate = this.datePipe.transform(d, 'yyyy/MM/dd')
    this.startAfter = "01" + " : "+ "14" + " : "+ "20" + " : " + "10"
    //this.startAfter = this.da + ": "+ this.hr + " : "+ this.mn + " : " + this.sc
  
 
  }
}
