import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private collectionName = 'results';
  private collection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection(this.collectionName);
  }

  saveData(data: any): Promise<DocumentReference<any>> {
    return this.collection.add(data);
  }

  getResults(): Observable<any[]> {
    return this.collection.valueChanges();
  }
}
