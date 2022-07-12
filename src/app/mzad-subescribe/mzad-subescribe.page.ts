import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mzad-subescribe',
  templateUrl: './mzad-subescribe.page.html',
  styleUrls: ['./mzad-subescribe.page.scss'],
})
export class MzadSubescribePage implements OnInit {

  constructor(private rout : Router,private loadingController:LoadingController , private toast:ToastController,private actionSheetCtl:ActionSheetController ,private modalController:ModalController) { }

  ngOnInit() {

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
  
 async closeModal() { 
    await this.modalController.dismiss('data');
  }

subescribe(){
   this.presentLoadingWithOptions("جاري معالجة طلبك ..")
   setTimeout(() => {
   
    this.loadingController.dismiss()
    this.closeModal()
   }, 5000);
}


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtl.create({
      header: 'دفع رسوم الإشتراك ',
      subHeader: ' ر.س 30000',
      cssClass: 'my-custom-class',
      mode:'ios',
      buttons: [{
        text: 'المحفظة',
        // role: 'destructive',
        icon: 'wallet',
        // data: {
        //   type: 'delete'
        // },
        
        handler: () => {
          this.subescribe();
        }
      }, {
        text: 'قوقل باي',
        icon: 'logo-google',
        data: 10,
        handler: () => {
          this.subescribe();

        }
      }, {
        text: 'ابل باي',
        icon: 'logo-apple',
        data: 'Data value',
        handler: () => {
          this.subescribe();

        }
      }  , {
        text: 'إلغاء',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
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

}


