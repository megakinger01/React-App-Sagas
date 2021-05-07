import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyD28fPzNL613WJadgsAFI7VkfpL3AuKgWM",
  authDomain: "react-app-cursos-9c29b.firebaseapp.com",
  databaseURL: "https://react-app-cursos-9c29b.firebaseio.com",
  projectId: "react-app-cursos-9c29b",
  storageBucket: "react-app-cursos-9c29b.appspot.com",
  messagingSenderId: "949408227388",
  appId: "1:949408227388:web:1a9ebad37e6dc64d432339"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

 
//   REFERENCIA A FIRESOTRE
const db = firebase.firestore()


//      PARA PODER AUTENTICACION CON GOOGLE
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


//      PARA PODER AUTENTICACION CON FACEBOOK
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()


//   console.log('firebase configurado');
console.log('firebase');

export  { db , firebase , googleAuthProvider, facebookAuthProvider }

