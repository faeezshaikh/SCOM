import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContactUsPage } from '../pages/contactUsPage/contactUsPage';
import { CommunityListPage } from '../pages/communityListPage/communityListPage';
import { TopicDetailPage } from '../pages/topicDetailPage/topicDetailPage';
import { MyDataService } from '../providers/my-data-service';
import { MyLocalStorage } from '../providers/my-local-storage';
import { ExplanationModal } from '../modals/explanationModal';
import { ExamStartingModal} from '../modals/examStartingModal';
import { IonicStorageModule } from '@ionic/storage';
import { SimpleTimer } from 'ng2-simple-timer';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MySocialShareService } from '../providers/my-social-share-service';
import { MyBalancePage } from '../pages/mybalance/mybalance';
import { MyContractsPage } from '../pages/mycontracts/mycontracts';

import {
  CognitoUtil,
  UserLoginService,
  UserParametersService,
  UserRegistrationService
} from "../providers/cognito.service";
import {AwsUtil} from "../providers/aws.service";
import {
  LoginPage,
  LogoutPage,
  RegisterPage,
  ConfirmRegistrationPage,
  ResendCodePage,
  ForgotPasswordStep1Page,
  ForgotPasswordStep2Page
} from "../pages/auth/auth";
import {EventsService} from "../providers/events.service";


@NgModule({
  declarations: [
    MyApp,
    ContactUsPage,
    CommunityListPage,
    TopicDetailPage,
    ExplanationModal,
    ExamStartingModal,
    LoginPage,
    LogoutPage,
    RegisterPage,
    ConfirmRegistrationPage,
    ResendCodePage,
    ForgotPasswordStep1Page,
    ForgotPasswordStep2Page,
    MyBalancePage,
    MyContractsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactUsPage,
    CommunityListPage,
    TopicDetailPage,
    ExplanationModal,
    ExamStartingModal,
    LoginPage,
    LogoutPage,
    RegisterPage,
    ConfirmRegistrationPage,
    ResendCodePage,
    ForgotPasswordStep1Page,
    ForgotPasswordStep2Page,
    MyBalancePage,
    MyContractsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyDataService,
    CognitoUtil,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    MyLocalStorage,
    EventsService,
    SimpleTimer,
    SocialSharing,
    MySocialShareService
    // NativeStorage
  ]
})
export class AppModule {}
