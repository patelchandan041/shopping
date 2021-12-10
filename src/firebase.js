import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCU3kAb_9uky8Cc1iJnzfeJyK4epUE33Ug",
    authDomain: "e-commerce-5e1c2.firebaseapp.com",
    projectId: "e-commerce-5e1c2",
    storageBucket: "e-commerce-5e1c2.appspot.com",
    messagingSenderId: "857884988268",
    appId: "1:857884988268:web:9581f7ee3ee4886abad949"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();
 
  export {db,auth,storage};