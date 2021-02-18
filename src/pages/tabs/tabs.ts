import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddphotoPage } from '../addphoto/addphoto';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1;
  tab2;
  tab3;
  tab4;
  tab5;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = HomePage;
    this.tab2 = CartPage;
    this.tab3 = CartPage;
    this.tab4 = LoginPage;
    this.tab5 = AddphotoPage;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
