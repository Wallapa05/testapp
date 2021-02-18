import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddproductsPage } from './addproducts';

@NgModule({
  declarations: [
    AddproductsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddproductsPage),
  ],
})
export class AddproductsPageModule {}
