import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

// Verifica si ya existe una instancia de la aplicación
const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp({
      apiKey: "AIzaSyDAHKGxA7X7wN0TiP_hFzrIL_qAIbpEzqU",
      authDomain: "serenitech-7a4b6.firebaseapp.com",
      databaseURL: "https://serenitech-7a4b6-default-rtdb.firebaseio.com/",
      projectId: "serenitech-7a4b6",
      storageBucket: "serenitech-7a4b6.appspot.com",
      messagingSenderId: "971151167264",
      appId: "1:971151167264:web:f95914be5124b48b811145"
    });

export const auth = app.auth();
export const database = app.database();
export default app;
