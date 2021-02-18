import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyshopPage } from '../myshop/myshop';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { EditprofilePage } from '../editprofile/editprofile';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  users=[];
  data: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public http: HttpClient,private storage: Storage)  {this.getProfile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  
 
  btupdate(id: number, name: string, last: string, phone: string, email: string, address: string) {
    this.navCtrl.push(EditprofilePage, {
      id: id,
      name: name,
      last: last,
      phone: phone,
      email:email,
      address:address,
  
    });
  }
  logout() {
    this.storage.clear();

    this.navCtrl.setRoot(LoginPage);
  }
  Home(){
    this.storage.clear();
    this.navCtrl.setRoot(HomePage);
  }
  getProfile(){
    this.storage.get('id').then((val) => {
      console.log(val);

      let url = "http://172.20.10.4/serviceotop/load_profile.php?id="+val;
      

      this.http.get(url).subscribe((data: any) => {
        this.users = data.users;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })


  }
  myshop() {
    this.navCtrl.push(MyshopPage);
  }
  
}
