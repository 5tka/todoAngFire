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
  state = 'default';

  ngOnInit() {
  }
<<<<<<< HEAD

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
=======
  
  sendConfirmation () {
    this.listItem.done = this.listItem.done ? false : true;
    
    this._firebaseService.updateItem({key: this.listItem.$key, status: this.listItem.done})
>>>>>>> 8cb38177961e0615c3f2b944ee0a0c1f499d3cf8
  }

}
