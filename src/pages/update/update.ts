import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import arrayEmployee from '../../app/arrayEmployee';

import arrInd from '../../app/index';
import{ Employee } from '../../app/Employee';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  list=arrayEmployee;

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

  index = arrInd[0]

 empName = arrayEmployee[this.index].name;
 empSurname= arrayEmployee[this.index].surname;
 empRole= arrayEmployee[this.index].role;
 empId= arrayEmployee[this.index].id;
 empUser= arrayEmployee[this.index].username;
 empPass= arrayEmployee[this.index].password;


  update(name,surname,role,id,username,password){  

  if(name != '' && name!= null && surname != ''  && surname != null && role != ''  && role != null && id!= ''  && id != null && username != '' && username != null && password != '' && password !=null)
    {
        let objct= new Employee(name,surname,role,id,username,password,this.url);
        this.list.splice(this.index,1,objct);
        console.log(objct);
        
    }

    this.navCtrl.setRoot(ProfilePage);
 
  }


}
