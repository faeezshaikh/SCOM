import { Component,ViewChild } from '@angular/core';

import { ModalController,NavController, NavParams ,AlertController,Content} from 'ionic-angular';
import { TopicDetailPage } from '../topicDetailPage/topicDetailPage';
import { reorderArray} from 'ionic-angular';
import { MyLocalStorage } from '../../providers/my-local-storage';
import { ExamStartingModal} from '../../modals/examStartingModal';
import { MyDataService } from '../../providers/my-data-service';
import { MySocialShareService } from '../../providers/my-social-share-service';



@Component({
  selector: 'page-page2',
  templateUrl: 'communityListPage.html'
})
export class CommunityListPage {
  selectedItem: any;
  icons: string[];
  // members : Array<{ no: number, title: string, note: string, icon: string, hiScore: string }>;
  members: Array<{ pic: string, name: string, publicKey: string, reputation: string }>;
  reorder: boolean = false;
  reorderIcon: string = "options";
  searchInput:string="";
  @ViewChild(Content) content: Content;

  exams: Array<{ no: number, title: string, note: string, icon: string, hiScore: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: MyLocalStorage, public dataService: MyDataService,
              private alertCtrl: AlertController,public modalCtrl: ModalController,
              public mySocialShareService: MySocialShareService) {


    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.members  = dataService.getCommunityMembers();
    console.log('Members==>',this.members);


  }

  scrollToTop() {
    if(this.content)
        this.content.scrollToTop();
  }

  ionViewWillEnter() {
    console.log("View Will Enter");

  }

  itemTapped(event, member, index) {
    this.navCtrl.push(TopicDetailPage, {
      member: member, index: index
    });
  }

  

    openModal(topic) {
    let modal = this.modalCtrl.create(ExamStartingModal,topic,{'enableBackdropDismiss':true});
     modal.onDidDismiss(data => {
      console.log(data);
      if (data && data.cancel) {
        console.log('Cancel hit');
        // Modal crashing issue. Hence catch all : https://github.com/driftyco/ionic/issues/10046
         modal.dismiss().catch(() => {
        console.log("Loading dismissed");
      });;
      } else if (data && !data.cancel) {
        // this.startExam(topic);
      }
   });
    modal.present();
  }

  reorderNow() {
    this.reorder = !this.reorder;
    this.reorderIcon = this.reorder ? "close-circle" : "options";
  }





  shareViaFacebook() {
    this.mySocialShareService.shareViaFacebook();
  }
   shareViaTwitter()
   {
        this.mySocialShareService.shareViaTwitter(); 
   }


  shareViaWhatsapp() {
       this.mySocialShareService.shareViaWhatsapp();
  }


   shareViaInstagram()
   {
          this.mySocialShareService.shareViaInstagram();
   }


  shareViaSMS() {
      this.mySocialShareService.shareViaSMS();
  }

   regularShare()
   {
         this.mySocialShareService.regularShare();
   }




   shareViaMail() {
       this.mySocialShareService.shareViaMail(); 
  }


  presentAlert(msg) {
  let alert = this.alertCtrl.create({
    title: 'Yikes!',
    message: msg,
    buttons: [
      {
        text: 'OK',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  alert.present();
}


}
