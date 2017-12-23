import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

/*import 'rxjs/add/operator/map';*/
import { AngularFireDatabase } from 'angularfire2/database';
/*
  Generated class for the DatabaseserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseserviceProvider {

  constructor(public db: AngularFireDatabase) {
    console.log('Hello DatabaseserviceProvider Provider');
  }


  public getUsers(): any  { 
    
  }

}
