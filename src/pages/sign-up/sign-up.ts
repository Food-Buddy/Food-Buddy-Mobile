import { AppConstants } from '../../app/app.constants';
import { AppConfig } from '../../app/app.config';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
signUpForm: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder, private config: AppConfig, private constants: AppConstants) {
    this.createSignUpForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createSignUpForm(){
    this.signUpForm = this.fb.group({ // <-- the parent FormGroup
      name: ['', Validators.required, Validators.minLength(5) ],
      email: ['', Validators.required, Validators.pattern(this.config.emailRegex) ],
      password: ['', Validators.required, Validators.minLength(5) ],
      passwordRepeat: ['', Validators.required, Validators.minLength(5) ],
      address: this.fb.group({
        no: '',
        street: '',
        area: '',
        landmark: ''
      }),
    });
  }

}
