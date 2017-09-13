import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor
    (
    private _firebaseService: FirebaseService,
    // private afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  // login() {
  //   this._firebaseService.login();
  // }

  // logout() {
  //   this._firebaseService.logout();
  // }

}
