import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Item } from '../components/item';

@Injectable()
export class FirebaseService {

  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }


  getItems() {
    this.items = this.db.list('/listings');
    return this.items;
  }

  // login() {
  //   console.log('login');
  //   this.afAuth.auth.signInAnonymously();
  // }

  // logout() {
  //   console.log('logout');
  //   this.afAuth.auth.signOut();
  // }

  addNewItem(itemText: string) {
    this.items.push(new Item(itemText));
  }

  deleteItem(key: string) {
    this.items.remove(key);
  }

  editItem(key: string, itemText: string) {
    this.items.update(key, { title: itemText });
  }
}
