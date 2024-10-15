import { Injectable, NgZone } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import '@nativescript/firebase-firestore';

@Injectable({
    providedIn: 'root',
  })
  export class FirebaseService {

    constructor() {}

    initFirebase() {
        firebase().initializeApp();  
      }
    
      getFirestore() {
        return firebase().firestore();
      }

  }
