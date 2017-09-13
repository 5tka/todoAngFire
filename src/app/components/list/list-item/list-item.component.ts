import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() listItem: object;

  constructor(private _firebaseService: FirebaseService) { }
  state = 'default';

  ngOnInit() {
  }

  sendConfirmation() {

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
