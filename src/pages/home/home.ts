import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rowproducts = [];
  dataitem: any;
  imgURL;
  myphoto:any;
cameraData:string;
image:string;
  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public navparam: NavController,
              public actionSheetCtrl: ActionSheetController ) 
              {
                this.lodadata();}

    lodadata() {
      let url = "http://172.20.10.4/serviceotop/loaddata.php";
      this.http.get(url).subscribe(
        (data: any) => {
          this.rowproducts = data.rowproducts;
          console.log(this.rowproducts);
        },
        (error) => {
          console.log(error);
        }
      );
    }
   
    }
