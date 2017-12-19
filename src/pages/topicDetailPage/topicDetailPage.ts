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
  selectedTopic: any;

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

    if (navParams.get('topic') != null) {

      this.selectedTopic = navParams.get('topic');  // TODO: Sliding ion-item can provide users to select if they want to randomize a question set. Use Local Storage and if selecetd cll shuffle
      if(this.selectedTopic && this.selectedTopic.no > 8) {
      }
      dataService.getData(this.selectedTopic.no).then(theResult => {
        this.data = theResult;
        this.questions = theResult.questions;
        this.questions = this.shuffle(this.questions);   /// TODO: Make shuffling of question order user configurable
        this.question = this.questions[0];
      });

    } else {
      this.selectedTopic = { note: "blah" };
    }

    


  }


  ////////// [End of Constructor] ///////////



  closeResults() {
    this.navCtrl.pop();
  }


  openExplanationModal(question) {
    let modal = this.modalCtrl.create(ExplanationModal, question);
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
