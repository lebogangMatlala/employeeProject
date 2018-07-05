import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import arrayEmployee from '../../app/arrayEmployee';
import { ProfilePage } from '../profile/profile';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  /*user=arrayEmployee[4];
  pass=arrayEmployee[5];*/

  user;
  pass;


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(SigninPage, {
      item: item
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

     ionViewDidLoad() {
      console.log('ionViewDidLoad SigninPage');
  }

   signIn(username,password)
  {

   
  for(let i = 0;i< arrayEmployee.length; i++)
    {
        this.user = arrayEmployee[i].username;
        this.pass = arrayEmployee[i].password; 
  
  
  
  if(password==this.pass && username==this.user)
  {
  
      const confirm = this.alertCtrl.create({
        title: 'Login Successful',
        message: 'You have successfully logged in',
        buttons: [
          {
            text: 'ok',
            handler: () => {
              this.navCtrl.setRoot(ProfilePage);
            }
          }
        ]
      });
      confirm.present();

  }
  else if(password!=this.pass && username!=this.user)
  {
    const confirm = this.alertCtrl.create({
      title: 'Login Unsuccessful',
      message: 'incorrect details',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtrl.setRoot(SigninPage);
          }
        }
      ]
    });
    confirm.present();
  }
  else if( password==this.pass && username!=this.user)
  {
    const confirm = this.alertCtrl.create({
      title: 'Login Unsuccessful',
      message: 'incorrect details',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtrl.setRoot(SigninPage);
          }
        }
      ]
    });
    confirm.present();
  }
  else if(password!=this.pass && username==this.user)
  {
    const confirm = this.alertCtrl.create({
      title: 'Login Unsuccessful',
      message: 'incorrect details',
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtrl.setRoot(SigninPage);
          }
        }
      ]
    });
    confirm.present();
  }
}

if (arrayEmployee.length ==0 ){
    const confirm = this.alertCtrl.create({
      title: 'Login Unsuccessful',
      message: 'Please Register Before So that you can be able to login',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            this.navCtrl.setRoot(RegisterPage);
          }
        },
        {
          text: 'Disagree',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }

      ]
    });
    confirm.present();
  }


  }

}
