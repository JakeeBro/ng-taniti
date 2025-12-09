import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// FIREBASE
import { initializeApp } from "firebase/app";
import { environment } from "./environments/environment";

const FirebaseApp = initializeApp(environment.firebaseConfig);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
