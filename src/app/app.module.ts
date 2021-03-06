import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { AddItemComponent } from './components/add-item/add-item.component';

import { FirebaseService } from './services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    ListItemComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }




// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null"
//   }
// }
