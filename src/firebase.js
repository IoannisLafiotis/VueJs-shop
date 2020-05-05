import firebase from "firebase";
import "firebase/storage";

require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyA4UZ0syxRAmAKp2BNxjZ6cCJxWXTxSMHw",
  authDomain: "vue-shop-8c65e.firebaseapp.com",
  databaseURL: "https://vue-shop-8c65e.firebaseio.com",
  projectId: "vue-shop-8c65e",
  storageBucket: "vue-shop-8c65e.appspot.com",
  messagingSenderId: "659798559043",
  appId: "1:659798559043:web:fb970487a29992095807f6",
  measurementId: "G-CE6CZEPRL1",
};

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { fb, db };
