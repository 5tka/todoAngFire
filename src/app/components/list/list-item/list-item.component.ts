import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() listItem: any;

  constructor(private _firebaseService: FirebaseService ) { }

  ngOnInit() {
  }
  
  sendConfirmation () {
    this.listItem.done = this.listItem.done ? false : true;
    
    this._firebaseService.updateItem({key: this.listItem.$key, status: this.listItem.done})
  }

}
