import { Component } from '@angular/core';

import { Platform, NavParams, ViewController } from 'ionic-angular';



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

   constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {

    this.pic = params.get('pic');
    this.name = params.get('name');
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
}