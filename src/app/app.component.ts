import { Component, ViewChild } from '@angular/core';
import { Events, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactUsPage } from '../pages/contactUsPage/contactUsPage';
import { CommunityListPage } from '../pages/communityListPage/communityListPage';
import { VideosPage } from '../pages/videos/videos';
import {MyContractsPage } from '../pages/mycontracts/mycontracts';

import {LoginPage, LogoutPage} from "../pages/auth/auth";
import {AwsUtil} from "../providers/aws.service";
import {MyDataService} from '../providers/my-data-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CommunityListPage;
  pages: Array<{title: string, component: any, icon: string}>;
  loggedInUserEmail: string;

  public loginPage = LoginPage;
  public logoutPage = LogoutPage;
  
  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public events:Events,
              public awsUtil:AwsUtil,
              public menu:MenuController,
              public dataService: MyDataService) {
    this.initializeApp();

    this.pages = [
      { title: 'Community', component: CommunityListPage, icon: 'people' },
      { title: 'My Contracts', component: MyContractsPage, icon: 'folder' },
      { title: 'My Balance', component: VideosPage, icon: 'cash' },
      { title: 'Contact Us', component: ContactUsPage, icon: 'help-circle' }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

       this.awsUtil.initAwsService();
       this.rootPage = this.loginPage;
       this.listenToLoginEvents();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    // this.nav.setRoot(page);
  }

    openPage2(page) {
        this.nav.setRoot(page);
        this.menu.close();
  }

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.dataService.getLoggedInUserEmail().then((data) => {
        this.loggedInUserEmail = data;
      });
      this.enableMenu(true);
    });


    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}
