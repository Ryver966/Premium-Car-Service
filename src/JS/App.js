import React, { Component } from 'react';
import * as firebase from 'firebase'
import '../styles/CSS/App.css';

import AppHeader from'./AppHeader/AppHeader';

  var config = {
    apiKey: "AIzaSyAuadIPLnAcxuzC0C_qMskmht3-PE7sEGA",
    authDomain: "premium-car-service.firebaseapp.com",
    databaseURL: "https://premium-car-service.firebaseio.com",
    storageBucket: "premium-car-service.appspot.com",
    messagingSenderId: "87651018457"
  };
  firebase.initializeApp(config);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this),
    this.signIn = this.signIn.bind(this)
  };

  signIn() {
    const email = document.getElementById('sign-in-email');
    const pass = document.getElementById('sign-in-pass');

    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
      .then((success) => {
        console.log('logged in');
        email.value = '';
        pass.value = '';
      })
      .catch((error) => {
        if(error.code === 'auth/wrong-password') {
          alert(error.message);
        }
      });
  }

  signUp() {
    const email = document.getElementById('sign-up-email');
    const pass = document.getElementById('sign-up-pass');
    const passConf = document.getElementById('sign-up-conf-pass');

    if(email.value.length === 0 && pass.value.length === 0 && passConf.value.length === 0) {
      alert('Something gone wrong, please check all fields.');
    } else {
      if(pass.value !== passConf.value) {
        alert('Passwords must be the same.');
      } else {
        firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
          .then(() => {
            alert('Account created.');
          })
          .catch((error) => {
            console.log(error);
            if(error.code === 'auth/email-already-in-use'|| error.code === 'auth/weak-password') {
              alert(error.message);
              email.value = '';
              pass.value = '';
              passConf.value = '';
            }
          });
      };
    };
  };
  
  render() {
    return (
      <div className="App">
        <AppHeader 
          signUp={ this.signUp }
          signIn={ this.signIn }
        />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

