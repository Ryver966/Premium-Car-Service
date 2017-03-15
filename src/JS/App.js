import React, { Component } from 'react';
import * as firebase from 'firebase'
import '../styles/CSS/App.css';

import AppHeader from './AppHeader/AppHeader';

  const config = {
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
    this.signIn = this.signIn.bind(this),
    this.signOut = this.signOut.bind(this),
    this.resetPass = this.resetPass.bind(this),
    this.openPopup = this.openPopup.bind(this),
    this.openUserPopup = this.openUserPopup.bind(this),
    this.openUserOffer = this.openUserOffer.bind(this),
    this.openMyAccount = this.openMyAccount.bind(this)

    this.state = {
      isUserLogged: false,
      isOpenedSignInPopup: false,
      isOpenedUserPopup: false,
    }
  };

  openMyAccount() {
    console.log('test')
    this.setState({
      isSelectedMyAccount: true
    });
  };

  openUserOffer() {
    this.setState({
      isSelectedUserOffer: true,
      isOpenedUserPopup: false
    });
  };

  openUserPopup() {
    this.setState({
      isOpenedUserPopup: !this.state.isOpenedUserPopup
    });
  };

  openPopup() {
    this.setState({
      isOpenedSignInPopup: !this.state.isOpenedSignInPopup,
      isOpenedUserPopup: false
    });
  };

  signIn() {
    const email = document.getElementById('sign-in-email');
    const pass = document.getElementById('sign-in-pass');

    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
      .then((success) => {
            this.setState({
              isUserLogged: true,
              isOpenedSignInPopup: false
            })
        console.log(firebase.auth().currentUser());
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
            firebase.auth().currentUser.updateProfile({
              userPackage: 'none'
            })
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

  signOut() {
    firebase.auth().signOut();
    this.setState({
      isUserLogged: false
    })
    window.location.href = '/';
  }

  resetPass() {
    const email = document.getElementById('forgot-pass-email');
    if(email.value.length !== 0) {
      firebase.auth().sendPasswordResetEmail(email.value)
        .then(() => alert('New Password sent'))
        .catch((error) => {
          if(error.code === 'auth/invalid-email') {
            alert("This email doesn't exist.")
          }
        })
    } else {
      alert("E-Mail field can't be empty.")
    }
  }

  render() {
    return (
      <div className="App">
        <AppHeader 
          signUp={ this.signUp }
          signIn={ this.signIn }
          signOut={ this.signOut }
          resetPass={ this.resetPass }
          isUserLogged={ this.state.isUserLogged }
          isOpenedSignInPopup={ this.state.isOpenedSignInPopup }
          isOpenedUserPopup={ this.state.isOpenedUserPopup }
          openPopup={ this.openPopup }
          openUserPopup={ this.openUserPopup }
          openUserOffer={ this.openUserOffer }
          openMyAccount={ this.openMyAccount }
        />
        { this.props.children }
      </div>
    );
  }
}

