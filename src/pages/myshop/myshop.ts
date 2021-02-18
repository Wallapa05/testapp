import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AddproductsPage } from '../addproducts/addproducts';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProfilePage } from '../profile/profile';
import { EditproductsPage } from '../editproducts/editproducts';



@IonicPage()
@Component({
  selector: 'page-myshop',
  templateUrl: 'myshop.html',
})
export class MyshopPage {
  products = [];
  data: Observable<any>;
  dataitem:any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     private storage: Storage,
     public http: HttpClient,
     public alertCtrl : AlertController) 
     {
    this.getproducts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyshopPage');
  }
  contacts() {
    this.navCtrl.push(ProfilePage);
  }
  Add() {
    this.navCtrl.push(AddproductsPage);
  }
  getProfile() {
    this.storage.get('id').then((val) => {
      console.log(val);


    });
  }
  getproducts() {
    this.storage.get('id').then((val) => {
      console.log(val);
      let url = "http://172.20.10.4/serviceotop/load_products.php?id=" + val;

      this.http.get(url).subscribe(
        (data: any) => {
          this.products = data.products;
          console.log(this.products);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
  btupdate(product_id: number,
    type_id: number,
    type_name: string,
    product_name: string,
    product_detail: string,
    product_num: number,
    price: number) {
    this.navCtrl.push(EditproductsPage, {
      product_id: product_id,
      type_id: type_id,
      type_name: type_name,
      product_name: product_name,
      product_detail: product_detail,
      product_num: product_num,
        price: price,
    }
    );
  }
  btdelete(product_id: number){
    
      let alert1 = this.alertCtrl.create({
        title: 'ยืนยันการลบ',
        message: 'ต้องการลบสินค้าชิ้นนี้ หรือไม่ ?',
        buttons: [
          {
            text: 'ยกเลิก',
            role: 'cancel',
            handler: () => {
             
            }
          },
          {
            text: 'ตกลง',
            handler: () => {
              this.deletdata(product_id)
            }
          }
        ]
      });
      alert1.present();
    }
    deletdata(product_id: number) {
      let url = "http://172.20.10.4/serviceotop/delete_products.php";
      let postdata = new FormData();
      postdata.append('product_id',product_id.toString());

      this.http.post(url,postdata)
      .subscribe(data =>{
        if(data !=null){
          this.getproducts();
         //
        }
      },error=>{
        //
      });
       
      
    }
    
  }

