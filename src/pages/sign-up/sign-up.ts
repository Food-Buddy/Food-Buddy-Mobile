import { AlertService } from '../../providers/util/alert.service';
import { UserService } from '../../providers/user.service';
import { AppConfig } from '../../app/app.config';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  signUpForm: any;
  submitAttempted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private config: AppConfig, private userSer: UserService, private alertSer: AlertService) {
    this.submitAttempted = false;
    this.createSignUpForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createSignUpForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.pattern(this.config.emailRegex), Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirmPassword: ['', Validators.required],
      address: this.fb.group({
        no: '',
        street: '',
        area: '',
        landmark: ''
      }),
    },
      { validator: this.passwordMatch }
    );
  }

  signUp() {
    this.submitAttempted = true;
    if (this.signUpForm.valid) {
      const user = this.signUpForm.value;
      this.userSer.signUp(user)
        .then((result: any) => {
          this.alertSer.presentAlert('Success', 'Signed in Successfully!!!');
          this.navCtrl.push('HomePage');
        })
    }
  }

  passwordMatch(controls: AbstractControl) {
    let isMatched = false;
    const password = controls.get('password').value;
    const confirmPassword = controls.get('confirmPassword').value;
    isMatched = password === confirmPassword ? true : false;
    if (!isMatched) {
      controls.get('confirmPassword').setErrors({ passwordMatch: true });
    } else {
      return null;
    }
  }

}
