import { Injectable } from "@angular/core";
// import '../config/firebase.config';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  Firestore
} from "firebase/firestore";
import {
  getAuth,
  signInAnonymously,
  Auth
} from "@firebase/auth";
import { Order } from "../components/orders/orders";

@Injectable({ providedIn: 'root' })
export class FirebaseService {

  private db: Firestore = getFirestore();
  private auth: Auth = getAuth();
  private authReadyPromise: Promise<void>;

  constructor() {
    // Initialize Promise to handle anonymouse sign-in
    this.authReadyPromise = this.signInAnon();
  }

  // Ensure Anonymous User is signed in
  private async signInAnon(): Promise<void> {
    if (this.auth.currentUser) {
      return; // Already signed in
    }
    try {
      const userCredential = await signInAnonymously(this.auth);
      console.log('Firebase: Anonymous Sign-In Successful. UID: ' + userCredential.user.uid);
    } catch (err) {
      console.error('Firebase: Anonymous Sign-In Failed: ' + err);
      throw new Error('Could not authenticate Demo user.');
    }
  }

  private async withAuth<T>(action: () => Promise<T>): Promise<T> {
    await this.authReadyPromise;
    return action();
  }

  async saveOrder(data: any) {
    return addDoc(collection(this.db, 'orders'), {
      ...data,
      createdAt: serverTimestamp()
    });
  }

  async saveOrder2(data: any) {
    return this.withAuth(() =>
      addDoc(collection(this.db, 'orders'), {
        ...data,
        createdAt: serverTimestamp()
      })
    );
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

  async getOrders2(): Promise<Order[]> {
    return this.withAuth(async () => {
      const snapshot = await getDocs(collection(this.db, 'orders'));
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Order[];
    })
  }

  async deleteOrder(id: string) {
    return deleteDoc(doc(this.db, 'orders', id));
  }

  async deleteOrder2(id: string) {
    return this.withAuth(() =>
      deleteDoc(doc(this.db, 'orders', id))
    );
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