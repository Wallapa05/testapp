import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HttpClient } from "@angular/common/http";


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  name:String;
   last:String;
   username:String;
   password:String;
   phone:String;
   address:String;
   email:String;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  SaveRegister (
    name,
  last,
  username,
  password,
  phone,
  address,
  email) {
     // ไว้สำหรับเพิ่มข้อมูลเข้า Database
     let jsonData = {
       name: name,
       last: last,
       username: username,
       password: password,
       phone: phone,
       address: address,
       email: email,
       
     }; //สร้าง obj
     console.log(jsonData);
     let url  :string =  "http://172.20.10.4/serviceotop/register.php"; //ให้ไป post ที่  url
     this.http.post(url, jsonData).subscribe((jsondata: any) => {
       alert("สมัครสมาชิกเรียบร้อย");
       this.navCtrl.push(LoginPage);
       
       //console.log(data);
     });
     
   }
}
