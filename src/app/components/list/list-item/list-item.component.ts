import { Component, Input, OnInit } from '@angular/core';
import { FirebaseService } from '../../../services/firebase.service';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() listItem: object;

  constructor(private _firebaseService: FirebaseService ) { }

  ngOnInit() {
  }
  
  sendConfirmation () {

  }

}
