import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-whitepapers',
  templateUrl: 'mycontracts.html'
})
export class MyContractsPage {

  current: Array<{ pic: string, name: string, status: string,points:string}> = [];
  past: Array<{ pic: string, name: string, status: string,points:string}>=[];
  pending: Array<{ pic: string, name: string, status: string,points:string}>=[];
  myContracts = "current";
  constructor(public navCtrl: NavController, public navParams: NavParams) {

      this.current.push({pic:'http://sanitaryconstruction.com/wp-content/uploads/2016/01/testi-3.jpg',name:'John Doe',status:'Active',points:'56'});
      this.current.push({pic:'http://www.hoeinger-sv.de/wp-content/uploads/2017/05/staff6.jpg?x32921',name:'Tom Rice',status:'Active',points:'34'});

      this.past.push({pic:'https://silkui.outsystems.com/img/Avatar.jpg?1627',name:'Jsn Eli',status:'Completed',points:'12'});
      this.past.push({pic:'https://2oq5cg28288838bmfu32g94v-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/Alice-Bricogne-320x289.jpg',name:'Joe Moe',status:'Aborted',points:'33'});
      this.past.push({pic:'https://www.ogier.com/images/people/alice-bricogne/alice-bricogne.jpg',name:'Alice Tim',status:'Aborted',points:'67'});

      this.pending.push({pic:'http://i1.wp.com/www.alicekeeler.com/wp-content/uploads/2017/03/Alice-Headshot.jpg?w=1080',name:'Tim Ferris',status:'Invitation Sent',points:'22'});
      this.pending.push({pic:'https://www.ogier.com/images/people/alice-bricogne/alice-bricogne.jpg',name:'Jane Doe',status:'Confirmation Pending',points:'11'});



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WhitepapersPage');
  }



}
