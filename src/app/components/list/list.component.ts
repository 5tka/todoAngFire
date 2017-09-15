import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: any;

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.getItems().subscribe(items => {
      this.items = items;
    });
  }



}
