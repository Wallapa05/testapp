import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";
import { Storage } from '@ionic/storage';
import { MyshopPage } from '../myshop/myshop';

@IonicPage()
@Component({
  selector: 'page-addproducts',
  templateUrl: 'addproducts.html',
})
export class AddproductsPage {
  photos:any=[];
  uploadStatus:string="";
  product_name:any;
  product_detail:any;
  product_num:any;
  price:any;
  type_id:any;
  id:any;
  img_name:any;
  cameraData: string;
  base64Image: string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private storage: Storage ,
     public actionSheetCtrl: ActionSheetController,
     public http: HttpClient,
    
   
   ) {
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductsPage');
  }
  Addproducts(product_name,product_detail,product_num,price,type_id,img_name){
    this.storage.get('id').then((val) => {
      

        // ไว้สำหรับเพิ่มข้อมูลเข้า Database
        let jsonData = {
          product_name: product_name,
          product_detail: product_detail,
          product_num:product_num,
          price:price,
          type_id:type_id,
          id:val
          
        }; //สร้าง obj
        console.log(jsonData);
        let url = "http://172.20.10.4/serviceotop/add_products.php?product_name=" +
        product_name +
        "&product_detail=" +
        product_detail +
        "&product_num=" +
        product_num +
        "&price=" +
        price +
        "&type_id=" +
        type_id +
        "&id="+val;
        this.http.post(url, jsonData).subscribe((data: any) => {
          alert("บันทึกเรียบร้อย");
          this.navCtrl.push(MyshopPage);
          // console.log(data);
        });
    
        //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj
        //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้


    })


   
  }
  
}
