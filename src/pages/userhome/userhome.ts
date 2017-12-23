import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseserviceProvider } from '../../providers/databaseservice/databaseservice';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {FirebaseListObservable} from 'angularfire2/database';

/**
 * Generated class for the UserhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userhome',
  templateUrl: 'userhome.html',
})
export class UserhomePage {	 
  	users: FirebaseListObservable<any[]>;

  	constructor(public db: AngularFireDatabase, public navCtrl: NavController,private _DatabaseserviceProvider: DatabaseserviceProvider) {
  		
  	}

  	ngOnInit() {      
      this.users = this.db.list('users');
      /*this.db.list('users', { preserveSnapshot: true }).subscribe(snapshot => {
        if(snapshot.val()){
          this.users  = snapshot.val()
        }
      });*/ 


       /* this.db.list('users').subscribe(items => { 
          FirebaseListObservable<Customer[]>; items.map(item => ({ key: item.$key, ...item.val }));
        });*/

      /*this.users = this.db.list('users').snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      });*/

	    /*this.users = this.usersRef.snapshotChanges().map(changes => {
	      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
	    });*/
  	}

  	ionViewDidLoad() {
   	 	console.log('ionViewDidLoad UserhomePage');
  	}

}
