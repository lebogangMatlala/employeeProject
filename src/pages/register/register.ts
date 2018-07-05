import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { SigninPage } from '../signin/signin';


import  employeeArray  from '../../app/arrayEmployee';
import  {Employee} from '../../app/Employee';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
 
  url ='http://www.dealnetcapital.com/files/2014/10/blank-profile.png';

  insertImage(event: any){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
    }
  }
  
 
  register(name,surname,role,id,username,password)
  {

    //this is a method for saving an image
    console.log(this.url);

    let arrObj = new Employee(name,surname,role,id,username,password,this.url);

    employeeArray.push(arrObj);
    console.log(employeeArray)

    if(employeeArray!=null)
    {

     
        const confirm = this.alertCtrl.create({
          title: 'Registration Successful',
          message: 'Do you want to Login? ',
          buttons: [
            {
              text: 'No',
              handler: () => {
                this.navCtrl.setRoot(RegisterPage);
              }
            },
            {
              text: 'Yes',
              handler: () => {
                this.navCtrl.setRoot(SigninPage);
              }
            }
          ]
        });
        confirm.present();
      }
      
    }

  

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(RegisterPage, {
      item: item
    });
  }



}
