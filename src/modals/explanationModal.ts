import { Component } from '@angular/core';

import { Platform, NavParams, ViewController,AlertController ,ToastController} from 'ionic-angular';



@Component({
  templateUrl: 'explanationModal.html'
})
export class ExplanationModal {

   question: any;
   answer: any;
   explanation: any;
   ref: any = "NA";
   pic:string;
   name:string;
   confirmSubmitAlert: any;
   reputation:string;

   constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {

    this.pic = params.get('pic');
    this.name = params.get('name');
    this.reputation = params.get('reputation');
    console.log("Explanation: ", this.explanation);
    console.log("Ref: ", this.ref);
  }

  openLink() {
    	window.open(this.ref, '_system', 'location=yes');
			return false;
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  presentSubmitConfirm() {
    this.confirmSubmitAlert = this.alertCtrl.create({
      title: 'Confirm Submit',
      message: 'This will invite ' + this.name + ' to enter your contract. Do you want to proceed?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Submit clicked');
            // Submit the exam.

            this.dismiss();
            this.presentToast();
          }
        }
      ]
    });
    this.confirmSubmitAlert.present();
  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Invitation was successfully sent,',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
  


}