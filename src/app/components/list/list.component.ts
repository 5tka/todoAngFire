import { Component, OnInit } from '@angular/core';

// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [FirebaseService]
})
export class ListComponent implements OnInit {

  items: any;

  constructor(private _firebaseService: FirebaseService ) {  }

  ngOnInit() {
    this._firebaseService.getItems().subscribe(items =>{
      this.items = items;
    })
  }

}
