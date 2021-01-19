import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCA0MoA10r9VM3I1fvHlveRuqeSiVhg7HA",
  authDomain: "vue-firebase-cfd0f.firebaseapp.com",
  projectId: "vue-firebase-cfd0f",
  storageBucket: "vue-firebase-cfd0f.appspot.com",
  messagingSenderId: "468462116083",
  appId: "1:468462116083:web:c8dc33b04596da0dd66b86"
};

//init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }