import { Injectable } from "@angular/core";
import '../config/firebase.config';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore";
import { Order } from "../components/orders/orders";

@Injectable({ providedIn: 'root' })
export class FirebaseService {

  private db = getFirestore();

  async saveOrder(data: any) {
    return addDoc(collection(this.db, 'orders'), {
      ...data,
      createdAt: serverTimestamp()
    });
  }

  async getOrders(): Promise<Order[]> {
    try {
      const snapshot = await getDocs(collection(this.db, 'orders'));
      console.log('Firestore Snapshot: ', snapshot.docs.length, snapshot.docs.map(doc => doc.data()));
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Order[];
    } catch (error) {
      console.error('Firestore: getOrders error', error);
      throw error;
    }
  }

  async deleteOrder(id: string) {
    return deleteDoc(doc(this.db, 'orders', id));
  }

  // Test
  async testConnection() {
    try {
      const res = await this.saveOrder({ test: true });
      console.log('Firestore: test write OK: ', res.id);
    } catch (err) {
      console.log('Firestore: test write FAILED: ', err);
    }
  }
}