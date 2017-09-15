import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() listItem: any;

  constructor(private _firebaseService: FirebaseService) { }

  oldText: string = '';
  state = 'default';

  ngOnInit() {
  }

  sendConfirmation() {
    this.listItem.done = this.listItem.done ? false : true;
    this._firebaseService.updateItem({ key: this.listItem.$key, status: this.listItem.done })
  }

  editItem(itemText: string) {
    this.state = 'edit';
    this.oldText = this.listItem.title;
  }
  deleteItem() {
    this.state = 'delete';
  }
  cancelEdit() {
    this.state = 'default';
    this.listItem.title = this.oldText;
  }
  cancelDelete() {
    this.state = 'default';
  }
  confirmEdit(key: string, itemText: string) {
    this._firebaseService.editItem(key, itemText);
    this.state = 'default';
  }
  confirmDelete(key: string) {
    this._firebaseService.deleteItem(key);
    this.state = 'default';
  }


}
