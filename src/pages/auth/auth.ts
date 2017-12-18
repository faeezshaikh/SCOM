import {Component} from "@angular/core";
import {NavController, NavParams, AlertController} from "ionic-angular";
import { MyDataService } from "../../providers/my-data-service";
import {
  UserRegistrationService,
  CognitoCallback,
  UserLoginService,
  LoggedInCallback,
  RegistrationUser
} from "../../providers/cognito.service";
// import {ControlPanelPage} from "../controlpanel/controlpanel";
import { CommunityListPage } from "../communityListPage/communityListPage";
import {EventsService} from "../../providers/events.service";





////////////// [ Login Page ] ////////////////


@Component({
  templateUrl: 'login.html'
})
export class LoginPage implements CognitoCallback, LoggedInCallback {
  email:string;
  password:string;
  processingSignin = false;

  constructor(public nav:NavController,
              public navParam:NavParams,
              public alertCtrl:AlertController,
              public userService:UserLoginService,
              public eventService:EventsService,
              public dataService: MyDataService) {
    console.log("LoginComponent constructor");
    if (navParam != null && navParam.get("email") != null)
      this.email = navParam.get("email");

      // If the user is signed in, dont prompt for creds, send them to home page
    if (this.userService.isAuthenticated(this)) {
      this.eventService.sendLoggedInEvent();
      this.nav.setRoot(CommunityListPage);
    }

  }

  ionViewLoaded() {
    console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
    this.userService.isAuthenticated(this);
  }

  signMeIn() {
    console.log("in onLogin");
    this.processingSignin = true;
    console.log("processingSignin is:" , this.processingSignin);
    if (this.email == null || this.password == null) {
      this.doAlert("Error", "All fields are required");
      this.processingSignin = false;
      return;
    }
    this.userService.authenticate(this.email, this.password, this);
    
  }

  cognitoCallback(message:string, result:any) {
    if (message != null) { //error
      this.doAlert("Error", message);
      console.log("result: " + message);
    } else { //success
      console.log("Redirect to communityListPage");
      this.nav.setRoot(CommunityListPage);
    }
    this.processingSignin = false;
      console.log("processingSignin is:" , this.processingSignin);
  }

  isLoggedInCallback(message:string, isLoggedIn:boolean) {
    console.log("The user is logged in: " + isLoggedIn);
    if (isLoggedIn) {
       //  console.log('Already Authenticated..Setting email:',this.email);
      //this.dataService.setLoggedInUserEmail(this.email);
      this.eventService.sendLoggedInEvent();
      this.nav.setRoot(CommunityListPage);
    }
  }

  navToRegister() {
    this.nav.push(RegisterPage);
  }

  navToForgotPassword() {
    this.nav.push(ForgotPasswordStep1Page);
  }

  doAlert(title:string, message:string) {

    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}


////////////// [ Logout Page ] ////////////////

@Component({
  template: ''
})
export class LogoutPage implements LoggedInCallback {

  constructor(public navCtrl:NavController, public userService:UserLoginService) {
    this.userService.isAuthenticated(this)
  }

  isLoggedInCallback(message:string, isLoggedIn:boolean) {
    if (isLoggedIn) {
      this.userService.logout();
    }
    this.navCtrl.setRoot(LoginPage)
  }
}



////////////// [ Register Page ] ////////////////
/**
 * This component is responsible for displaying and controlling
 * the registration of the user.
 */
@Component({

  templateUrl: 'registration.html',
  providers: [UserRegistrationService]
})
export class RegisterPage implements CognitoCallback {
  registrationUser:RegistrationUser;

  constructor(public nav:NavController,
              public userRegistration:UserRegistrationService,
              public alertCtrl:AlertController) {
    this.registrationUser = new RegistrationUser();
  }

  ionViewLoaded() {

  }

  onRegister() {
    this.userRegistration.register(this.registrationUser, this);
  }

  /**
   * CAllback on the user clicking 'register'
   *
   * The user is taken to a confirmation page where he can enter the confirmation code to finish
   * registration
   *
   */
  cognitoCallback(message:string, result:any) {
    if (message != null) { //error
      this.doAlert("Registration", message);
    } else { //success
      console.log("in callback...result: " + result);
      this.nav.push(ConfirmRegistrationPage, {
        'username': result.user.username,
        'email': this.registrationUser.email
      });
    }
  }

  navToResendCode() {
    this.nav.push(ResendCodePage);
  }

  navToLogin() {
    this.nav.push(LoginPage);
  }

  doAlert(title:string, message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}


////////////// [ Confirm Register Page ] ////////////////

@Component({
  templateUrl: 'confirmRegistration.html',
  providers: [UserRegistrationService]
})
export class ConfirmRegistrationPage {
  confirmationCode:string;

  constructor(public nav:NavController, public userRegistration:UserRegistrationService, public navParam:NavParams, public alertCtrl:AlertController) {
    console.log("Entered ConfirmRegistrationComponent");
    console.log("nav param email: " + this.navParam.get("email"))
  }

  ionViewLoaded() {
    console.log("Entered ionViewDidEnter");
    console.log("email: " + this.navParam.get("email"));
  }

  onConfirmRegistration() {
    console.log("Confirming registration");
    this.userRegistration.confirmRegistration(this.navParam.get("email"), this.confirmationCode, this);
  }

  /**
   * callback
   * @param message
   * @param result
   */
  cognitoCallback(message:string, result:any) {
    if (message != null) { //error
      this.doAlert("Confirmation", message);
    } else { //success
      console.log("Entered ConfirmRegistrationComponent");
      let email = this.navParam.get("email");

      if (email != null)
        this.nav.push(LoginPage, {
          'email': email
        });
      else
        this.nav.push(LoginPage);
    }
  }

  navToResendCode() {
    this.nav.push(ResendCodePage);
  }

  navToRegister() {
    this.nav.push(RegisterPage);
  }

  navToLogin() {
    this.nav.push(LoginPage);
  }

  doAlert(title:string, message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}


////////////// [ Resend Code Page ] ////////////////

@Component({
  templateUrl: 'resendCode.html',
  providers: [UserRegistrationService]
})
export class ResendCodePage implements CognitoCallback {
  email:string;

  constructor(public nav:NavController,
              public registrationService:UserRegistrationService,
              public alertCtrl:AlertController) {
  }

  resendCode() {
     if (this.email == null) {
      this.doAlert("Error", "All fields are required");
      return;
    }
    this.registrationService.resendCode(this.email, this);
  }

  cognitoCallback(error:any, result:any) {
    if (error != null) {
      this.doAlert("Resend", "Something went wrong...please try again");
    } else {
      this.nav.push(ConfirmRegistrationPage, {
        'email': this.email
      });
    }
  }

  navToRegister() {
    this.nav.push(RegisterPage);
  }

  navToLogin() {
    this.nav.push(LoginPage);
  }

  doAlert(title:string, message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}


////////////// [ Forgot Password Step1 Page ] ////////////////

@Component({
  templateUrl: 'forgotPassword.html'
})
export class ForgotPasswordStep1Page implements CognitoCallback {
  email:string;

  constructor(public nav:NavController, public alertCtrl:AlertController, public userService:UserLoginService) {
  }

  onNext() {
     if (this.email == null) {
      this.doAlert("Error", "All fields are required");
      return;
    }
    this.userService.forgotPassword(this.email, this);
  }

  cognitoCallback(message:string, result:any) {
    if (message == null && result == null) { //error
      this.nav.push(ForgotPasswordStep2Page, {'email': this.email})
    }
  }

  navToRegister() {
    this.nav.push(RegisterPage);
  }

  navToLogin() {
    this.nav.push(LoginPage);
  }

  doAlert(title:string, message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}


////////////// [ Forgot Password Step2 Page ] ////////////////
@Component({
  templateUrl: 'forgotPasswordStep2.html'
})
export class ForgotPasswordStep2Page implements CognitoCallback {

  verificationCode:string;
  email:string;
  password:string;

  constructor(public nav:NavController, public navParam:NavParams, public alertCtrl:AlertController, public userService:UserLoginService) {
    this.email = navParam.get("email");
  }

  onNext() {
     if (this.email == null || this.password == null || this.verificationCode==null) {
      this.doAlert("Error", "All fields are required");
      return;
    }
    this.userService.confirmNewPassword(this.email, this.verificationCode, this.password, this);
  }

  cognitoCallback(message:string) {
    if (message != null) { //error
      this.doAlert("Verification Code", message);
    } else { //success
      this.nav.push(LoginPage);
    }
  }

  navToRegister() {
    this.nav.push(RegisterPage);
  }

  navToLogin() {
    this.nav.push(LoginPage);
  }

  doAlert(title:string, message:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
