import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Observable, timer } from 'rxjs';
import { MzadSubescribePage } from '../mzad-subescribe/mzad-subescribe.page';

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
  constructor(private loadingController:LoadingController,private toast:ToastController,private actionSheetCtl:ActionSheetController ,private datePipe:DatePipe ,private rout : Router,private modalController:ModalController) {
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


  async presentModal(id?, status?) { 
    
    const modal = await this.modalController.create({
      component: MzadSubescribePage ,
      componentProps: {
        "item":"",
        "status": ""
      }
    });
    
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        console.log(dataReturned )
        this.doAfterDissmiss(dataReturned)
      }
    });
 
    return await modal.present(); 
  }

   doAfterDissmiss(dataReturned){
    this.presentToast("تم الإشتراك بنجاح , يمكنك المزايدة الأن" ,'success')
    this.rout.navigate(['live-mzad']);  
   }

   async presentLoadingWithOptions(msg?) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      mode:'ios',
      duration: 5000,
      message: msg,
      translucent: true,
     // cssClass: 'custom-class custom-loading',
      backdropDismiss: false
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }
  

   async presentToast(msg,color?) {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      color:color,
      cssClass:'cust_Toast',
      mode:'ios',
      position:'top' 
    });
    toast.present();
  }

   subiscribe(){
    this.presentModal()
   }
}
