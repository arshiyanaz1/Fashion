import { initializeApp } from "firebase/app";
import { getFireStore } from '@firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDRoVhsSJLJx5OUmQFRwU6kh-DNz1gVk1A",
    authDomain: "splashscreenproject-2c797.firebaseapp.com",
    projectId: "splashscreenproject-2c797",
    storageBucket: "splashscreenproject-2c797.appspot.com",
    messagingSenderId: "424023256708",
    appId: "1:424023256708:web:aab85d8961703df1121cd1",
    measurementId: "G-N4WXGLS5PC"
};

const splashexample=firebase.initializeApp(firebaseConfig,'splashexample');

const rootRef= firebase.database().ref();
const splashRef=rootRef.child('Clothes')
