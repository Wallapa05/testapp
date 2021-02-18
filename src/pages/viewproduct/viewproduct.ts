import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@IonicPage()
@Component({
  selector: 'page-viewproduct',
  templateUrl: 'viewproduct.html',
})
export class ViewproductPage {
  data: Observable<any>;
  rowproducts = [];
  item = { overview: "" };

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewproductPage');
    this.item = this.navParams.data;
    console.log(this.item);
  }

}
