import { initializeApp,} from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDkgyWuklNj-e6zIgQEO-qHDZIa7updot0",
    authDomain: "florist-project-78b45.firebaseapp.com",
    projectId: "florist-project-78b45",
    storageBucket: "florist-project-78b45.appspot.com",
    messagingSenderId: "125666094034",
    appId: "1:125666094034:web:3c4a48bf3c18f28c14b60b",
    databaseURL:'https://florist-project-78b45-default-rtdb.europe-west1.firebasedatabase.app'
  };

export const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);


