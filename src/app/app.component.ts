import { Component } from '@angular/core';
import { 
  Firestore,
  collection,
  addDoc  
 } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-login';

  constructor(private firestore: Firestore) { }

  addData(f: any) {
    //Save firestore wquery
    const collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, f.value)
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((err) => {
      console.log(err);
    })

  }
}
