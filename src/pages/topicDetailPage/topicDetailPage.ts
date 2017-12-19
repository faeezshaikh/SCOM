import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { MyDataService } from '../../providers/my-data-service';
import { MyLocalStorage } from '../../providers/my-local-storage';
import { ModalController, Content } from 'ionic-angular';
import { ExplanationModal } from '../../modals/explanationModal';
import { SimpleTimer } from 'ng2-simple-timer';


@Component({
  selector: 'page-page3',
  templateUrl: 'topicDetailPage.html'
})
export class TopicDetailPage {
  selectedMember: any;
  indexOfMember:any;
  member: any = null;

  data: any = {};
  scrollContent: any;


  @ViewChild(Content) content: Content;


  scrollToTop() {
    if (this.content)
      this.content.scrollToTop();
  }



  ////////// [Start of Constructor] ///////////
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataService: MyDataService,
    public modalCtrl: ModalController,
    public storage: MyLocalStorage,
    private st: SimpleTimer,
    public alertCtrl: AlertController) {

    if (navParams.get('member') != null) {

      this.selectedMember = navParams.get('member');  // TODO: Sliding ion-item can provide users to select if they want to randomize a question set. Use Local Storage and if selecetd cll shuffle
     
      this.indexOfMember = navParams.get('index');
      console.log("Index is ====> ", this.indexOfMember);
      

      this.member = dataService.getMemberDetails(this.indexOfMember);
    

    } else {
      // this.selectedTopic = { note: "blah" };
    }

    


  }


  ////////// [End of Constructor] ///////////



  closeResults() {
    this.navCtrl.pop();
  }


  openContractModal(member) {
    let modal = this.modalCtrl.create(ExplanationModal, member);
    modal.present();
  }

 
  // openModal(modalName) {
  //   let modal = this.modalCtrl.create(ExamStartingModal,null,{'enableBackdropDismiss':false});
  //    modal.onDidDismiss(data => {
  //     console.log(data);
  //     if (data && data.cancel) {
  //        this.navCtrl.pop();
  //     }
  //  });
  //   modal.present();
  // }


  //// [Lifecycle Hooks ]///////
  ionViewWillLeave() {
  }
  ionViewDidLeave() {
    console.log('Page leaving..stopping the timers');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicDetailPage');
  }
 
}
