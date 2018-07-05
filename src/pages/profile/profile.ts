import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import arrayEmployee from '../../app/arrayEmployee';


import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UpdatePage } from '../update/update';
import arrInd from '../../app';



/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController ){
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }



  list=arrayEmployee;

  delete(a)
  {
    const confirm = this.alertCtrl.create({
      title: 'Cancel Profile',
      message: 'Do you want to Delete User Profile? ',
      buttons: [
        {
          text: 'No',
          handler: () => {
            this.navCtrl.setRoot(ProfilePage);
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.list.splice(a,1,);
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }


  goToUpdatePage(a)
  {
    arrInd[0] = a;
    this.navCtrl.setRoot(UpdatePage);
  }

  
 
  }


 


         