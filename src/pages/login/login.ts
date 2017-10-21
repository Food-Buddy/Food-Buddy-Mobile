import { UserService } from '../../providers/user.service';
import { ToastService } from '../../providers/util/toast.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  backgrounds = [
    'assets/img/background/background-1.jpeg',
    'assets/img/background/background-2.jpeg',
    'assets/img/background/background-3.jpeg',
    'assets/img/background/background-4.jpeg'
  ];
  public loginForm: any;
  submitAttempted: boolean;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams, private toastSer: ToastService, private userSer: UserService) {
    this.submitAttempted = false;
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  login() {
    this.submitAttempted = true;
    if (!this.loginForm.valid) {
      return;
    }
    const user = this.loginForm.value;
    this.userSer.login(user)
      .then((result: any) => {
        if (result && result.uid) {
          this.toastSer.create('Logged in Successfully!!!', false, 5000);
          this.navCtrl.push('HomePage');
        } else {
          this.toastSer.create('Login failed! Please check your credentials!!!', false, 5000);
        }
      })
  }

  signUp() {
    this.navCtrl.push('SignUpPage');
  }
}
