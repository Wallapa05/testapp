import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  any = {};
  id: number;
  name: string;
  last: string;
  phone: string;
  email: string;
  address: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {this.id = this.navParams.get("id");
  this.name = this.navParams.get("name");
  this.last = this.navParams.get("last");
  this.phone = this.navParams.get("phone");
  this.email = this.navParams.get("email");
  this.address = this.navParams.get("address");

  console.log(this.id);

  if (this.name != null) {
    this.name = this.name;
  }
  if (this.last != null) {
    this.last = this.last;
  }

  

  if (this.email != null) {
    this.email = this.email;
  }
  if (this.address != null) {
    this.address = this.address;
  }
  if (this.phone != null) {
    this.phone = this.phone;
  }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }
  Update(name,last,phone,email) {
    let postdataset = new FormData();

    /* postdataset.append("id", this.id.toString()); */
    postdataset.append("name", this.name);
    postdataset.append("last", this.last);
   
    postdataset.append("email", this.email);
    postdataset.append("address", this.address);
    postdataset.append("phone", this.phone);


    let url = "http://172.20.10.4/serviceotop/update_profile.php?id=" + this.id;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(ProfilePage);
      // console.log(data); */
    });
  }

}// end

