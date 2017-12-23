import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FCM } from '@ionic-native/fcm';
/**
 * Generated class for the UserprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userprofile',
  templateUrl: 'userprofile.html',
})
export class UserprofilePage {

  constructor(public fcm: FCM, public navCtrl: NavController, public navParams: NavParams) {
  	/*fcm.subscribeToTopic('users');

	fcm.getToken().then(token=>{
		console.log(token)
	  	//backend.registerToken(token);
	})

	fcm.onNotification().subscribe(data=>{
	  if(data.wasTapped){
	    console.log("Received in background");
	    console.log(data)
	  } else {
	    console.log("Received in foreground");
	  };
	})

	fcm.onTokenRefresh().subscribe(token=>{
		console.log(token)
	  	//backend.registerToken(token);
	})

	fcm.unsubscribeFromTopic('users');*/
  }

  ngOnInit() {
    
  }

}
