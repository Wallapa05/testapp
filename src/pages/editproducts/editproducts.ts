import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyshopPage } from '../myshop/myshop';


@IonicPage()
@Component({
  selector: 'page-editproducts',
  templateUrl: 'editproducts.html',
})
export class EditproductsPage {
  any = {};
  product_id: number;

  product_name:string;
  product_detail: string;
  product_num: string;
  price:string;
  type_id:string;
  type_name:string;
  


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient)
   
    {
    this.type_id = this.navParams.get("type_id");
    console.log("type_id",this.type_id);
    this.type_name = this.navParams.get("type_name");
    this.product_id = this.navParams.get("product_id");
    this.product_name = this.navParams.get("product_name");
    this.product_detail = this.navParams.get("product_detail");
    this.product_num = this.navParams.get("product_num");
    this.price = this.navParams.get("price");
 

  
    if (this.type_id != null) {
      this.type_id = this.type_id;
    }
    if (this.type_name != null) {
      this.type_name = this.type_name;
    }
    if (this.product_name != null) {
      this.product_name = this.product_name;
    }
    
    if (this.product_detail != null) {
      this.product_detail = this.product_detail;
    }
    
    if (this.product_num != null) {
      this.product_num = this.product_num;
    }
    if (this.price != null) {
      this.price = this.price;
    }

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditproductsPage');
  }
  Update() {
    let postdataset = new FormData();
    postdataset.append("product_name", this.product_name);
    postdataset.append("product_detail", this.product_detail);
    postdataset.append("type_name", this.type_name);
    postdataset.append("type_id", this.type_id);
    postdataset.append("price", this.price);
    postdataset.append("product_num", this.product_num);

    let url = "http://172.20.10.4/serviceotop/update_products.php?product_id=" + this.product_id;

    this.http.post(url, postdataset).subscribe((data: any) => {
      console.log(postdataset);

      alert("แก้ไขเรียบร้อย");

      this.navCtrl.push(MyshopPage);
      // console.log(data); */
    });
  } 
}
