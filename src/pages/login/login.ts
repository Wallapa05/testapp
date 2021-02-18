import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProfilePage } from '../profile/profile';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password: string;
  data: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(username,password){
    var url = 
    "http://172.20.10.4/serviceotop/login.php?username="+
    username +
    "&password=" +
    password;

  this.data = this.http.get(url, username);
  this.data = this.http.get(url, password);
  
  this.data.subscribe(data => {

    this.storage.set('id', data.id);
    this.storage.get('id').then((val) => {
      

      if (data.id != null) {
        this.navCtrl.setRoot(ProfilePage);
      } else {
        alert("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
      }

    })

   
     

  });


  }
  register(){
    this.navCtrl.setRoot(RegisterPage);
  }
}
