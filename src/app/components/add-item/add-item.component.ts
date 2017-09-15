import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  itemText: string = '';

  constructor(private _firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  addNewItem(itemText: string) {
    this._firebaseService.addNewItem(itemText);
    this.itemText = '';
  }

}
