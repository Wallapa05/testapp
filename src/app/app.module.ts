import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from "@angular/common/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IndexPage } from '../pages/index';
import { CartPage } from '../pages/cart/cart';
import { ChatsPage } from '../pages/chats/chats';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { IonicStorageModule } from "@ionic/storage";
import { MyshopPage } from '../pages/myshop/myshop';
import { AddproductsPage } from '../pages/addproducts/addproducts';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { EditproductsPage } from '../pages/editproducts/editproducts';
import { ViewproductPage } from '../pages/viewproduct/viewproduct';
import { RegisterPage } from '../pages/register/register';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { AddphotoPage } from '../pages/addphoto/addphoto';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    IndexPage,
    CartPage,
    ChatsPage,
    LoginPage,
    ProfilePage,
    MyshopPage,
    AddproductsPage,
    EditprofilePage,
    EditproductsPage,
    ViewproductPage,
    RegisterPage,
    AddphotoPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    IndexPage,
    CartPage,
    ChatsPage,
    LoginPage,
    ProfilePage,
    MyshopPage,
    AddproductsPage,
    EditprofilePage,
    EditproductsPage,
    ViewproductPage,
    RegisterPage,
    AddphotoPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,FilePath,File,FileTransfer,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
