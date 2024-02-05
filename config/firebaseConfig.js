import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDAHKGxA7X7wN0TiP_hFzrIL_qAIbpEzqU",
    authDomain: "serenitech-7a4b6.firebaseapp.com",
    databaseURL: "https://serenitech-7a4b6-default-rtdb.firebaseio.com",
    projectId: "serenitech-7a4b6",
    storageBucket: "serenitech-7a4b6.appspot.com",
    messagingSenderId: "971151167264",
    appId: "1:971151167264:web:f95914be5124b48b811145"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;