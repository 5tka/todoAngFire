import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  state = 'default';
  items: any;

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
    this._firebaseService.getItems().subscribe(items => {
      this.items = items;
      console.log(this.items)
    });
  }

  editItem() {
    this.state = 'edit';
  }

  deleteItem() {
    this.state = 'delete';
  }

  cancelAction() {
    this.state = 'default';
  }

  confirmDelete(key: string) {
    this._firebaseService.deleteItem(key);
    this.state = 'default';
  }

  confirmEdit(key: string, itemText: string) {
    this._firebaseService.editItem(key, itemText);
    this.state = 'default';
  }






}
