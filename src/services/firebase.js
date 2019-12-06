import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyCXeSOx0yQU51-jQux6E8ubVTATfKNU3ug",
    authDomain: "coffee-house-diplome.firebaseapp.com",
    databaseURL: "https://coffee-house-diplome.firebaseio.com",
    projectId: "coffee-house-diplome",
    storageBucket: "coffee-house-diplome.appspot.com",
    messagingSenderId: "506340443395",
    appId: "1:506340443395:web:de7ab33e9b57f18286d536"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
