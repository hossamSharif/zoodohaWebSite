import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Observable, timer } from 'rxjs';
import { MzadSubescribePage } from '../mzad-subescribe/mzad-subescribe.page';
@Component({
  selector: 'app-live-mzad',
  templateUrl: './live-mzad.page.html',
  styleUrls: ['./live-mzad.page.scss'],
})
export class LiveMzadPage implements OnInit {
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
      constructor(private loadingController:LoadingController,private toast:ToastController,private actionSheetCtl:ActionSheetController ,private datePipe:DatePipe ,private rout : Router,private modalController:ModalController) {
        this.second=timer(60000, -1000)
        this.minut=timer(60000, 60000)
        this.prepare()
       }

  ngOnInit() {
  }
  prepare(){  
    console.log(this.second)
    let d = new Date 
    this.startDate = this.datePipe.transform(d, 'yyyy/MM/dd')
    this.startAfter = "01" + " : "+ "14" + " : "+ "20" + " : " + "10"
    //this.startAfter = this.da + ": "+ this.hr + " : "+ this.mn + " : " + this.sc
  
 
  }
}
