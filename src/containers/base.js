import Rebase from 're-base'
import firebase from 'firebase'

//Use this file to put your Firebase configurations here and then rename it to base.js

const app = firebase.initializeApp({
    apiKey: "AIzaSyBhIAg9-ZmVbHy-Vb3W1SXShzJPzw2EK50",
  authDomain: "ash-anime-f94a6.firebaseapp.com",
  projectId: "ash-anime-f94a6",
  storageBucket: "ash-anime-f94a6.appspot.com",
  messagingSenderId: "631186013675"
})

const base = Rebase.createClass(app.database())
export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'google': new firebase.auth.GoogleAuthProvider()
}
export const auth = firebase.auth()
export default base
