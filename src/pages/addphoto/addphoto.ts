import { Component } from '@angular/core';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-addphoto',
  templateUrl: 'addphoto.html',
})
export class AddphotoPage {
  myphoto:any;
  base64Image:string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private camera:Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddphotoPage');
  }
  takePhoto(){
  
const options: CameraOptions = {
  quality: 70,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 this.myphoto = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
  }
  openGallery(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
    
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (error) =>{ console.log(console.log(error)
  );
  }
     // Handle error
    );
  }
}

