import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MyLocalStorage} from './my-local-storage';


@Injectable()
export class MyDataService {

  topicMap: Map<number, string>;

  data: any = null;
  fileName: string;
  topics = [];
  communityMembers = [];
  loggedInUserEmail: string;

  constructor(public http: Http,public storage: MyLocalStorage) {

    this.initCommunityMembers();
    // console.log('Hello DataService Provider');
    this.topicMap = new Map<number, string>();
    this.topicMap.set(1, 'assets/data/ha&bc.js');
    this.topicMap.set(2, 'assets/data/costing.js');
    this.topicMap.set(3, 'assets/data/deploymentMgmt.js');
    this.topicMap.set(4, 'assets/data/networkDesign.js');
    this.topicMap.set(5, 'assets/data/dataStorage.js');
    this.topicMap.set(6, 'assets/data/security.js');
    this.topicMap.set(7, 'assets/data/scalability.js');
    this.topicMap.set(8, 'assets/data/cloudMigration.js');

    this.topicMap.set(9, 'assets/data/exam1.js');
    this.topicMap.set(10, 'assets/data/exam2.js');
    // this.topicMap.set(11, 'assets/data/exam3.js');

    
  }


  load(topic: number) {

    this.fileName = this.topicMap.get(topic);
    // console.log("FILENAME =>", this.fileName);
    
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
    // if (!this.data) {
      return new Promise(resolve => {
        this.http.get(this.fileName)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
  // }
  }


//   getData(topic: number) {
//   return this.load(topic).then(res => {
//     this.data = res;
//     return this.data;
//   });
// }


getMemberDetails(index: number) {
  return this.communityMembers[index];
}

  initCommunityMembers() {
  
    this.communityMembers.push({'pic':'http://sanitaryconstruction.com/wp-content/uploads/2016/01/testi-3.jpg','name':'John Doe','publicKey':'12345','reputation':'45'});
    this.communityMembers.push({'pic':'http://www.hoeinger-sv.de/wp-content/uploads/2017/05/staff6.jpg?x32921','name':'Tom Rice','publicKey':'12345','reputation':'45'});
    this.communityMembers.push({'pic':'https://silkui.outsystems.com/img/Avatar.jpg?1627','name':'Joe Dough','publicKey':'12345','reputation':'45'});


    this.communityMembers.push({'pic':'http://i1.wp.com/www.alicekeeler.com/wp-content/uploads/2017/03/Alice-Headshot.jpg?w=1080','name':'Joe Dough','publicKey':'12345','reputation':'45'});
    this.communityMembers.push({'pic':'https://2oq5cg28288838bmfu32g94v-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/Alice-Bricogne-320x289.jpg','name':'Joe Dough','publicKey':'12345','reputation':'45'});
    this.communityMembers.push({'pic':'https://www.ogier.com/images/people/alice-bricogne/alice-bricogne.jpg','name':'Joe Dough','publicKey':'12345','reputation':'45'});

    
  }
  getCommunityMembers() {
    return this.communityMembers;
  }

  getTopicsArray() {
    console.log(" ==== Getting Topics Array ====");
    

    class Contract {
      stratDate: Date;
      endDate: Date;
      status: string;  // active, aborted, completed, disputed, pending
      requester: string; // memberId
      notes: string;
      otherParty: string // memberId;
      requesterAmt: number;
      otherPartyAmt: number;
    };
    class Member {
      pic: string;
      memberId: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      joinDate: Date;
      score: number;
      noOfContracts: number;
      contracts: Array<Contract>;
    };
    
    class Topic {
      no: number;
      title: string;
      note: string;
      icon: string;
      hiScore: any;
      time: string;
    }
    this.topicMap.forEach((value: string, key: number) => {
    
    });
  console.log('Formed Topics Array:', this.topics);
  return this.topics;

  
    

}



setLoggedInUserEmail(email) {
  console.log('Email set to :' , email);
  this.loggedInUserEmail = email;
  this.storage.saveToStorage('email',email);
}

getLoggedInUserEmail() {
  console.log('Returning email:' , this.storage.getFromStorage('email'));
  // return this.loggedInUserEmail;
  return this.storage.getFromStorage('email');
}
}
