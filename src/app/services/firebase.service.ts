import { Injectable } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {

  items: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  getItems(){
    this.items = this.db.list('/listings');
    return this.items;
  }

}
