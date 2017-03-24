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
    this.checkUser = this.checkUser.bind(this),
    this.openAddCardPoup = this.openAddCardPoup.bind(this),
    this.getPackage = this.getPackage.bind(this),
    this.setName = this.setName.bind(this),
    this.setUserData = this.setUserData.bind(this),
    this.setUserCards = this.setUserCards.bind(this),
    this.displayCards = this.displayCards.bind(this),
    this.displayPackage = this.displayPackage.bind(this)

    this.state = {
      isUserLogged: this.checkUser(),
      isOpenedSignInPopup: false,
      isOpenedUserPopup: false,
      isOpenedAddCardPopup: false,
    }
  };

  displayPackage() {
    firebase.auth().onAuthStateChanged((user) => {
      const packageContainer = document.getElementsByClassName('my-package-txt-container')[0];
      const link = document.getElementById('get-package-btn');
      const btn = document.createElement('input')
      const txt = document.createElement('p');

      packageContainer.innerHTML = '';
      btn.type = 'button';
      if(user) {
        firebase.database().ref(`Users/${ user.uid }/package`).off('value');
        firebase.database().ref(`Users/${ user.uid }/package`).on('value', (snap) => {
          if(snap.val() === 'none') {
            txt.innerHTML = "Now you don't have any package";
            btn.value = 'Get Package!';
          } else {
            txt.innerHTML = `Your're ${snap.val()} member`;
            btn.value = 'Chagne Package!';
          }
          link.appendChild(btn);
          packageContainer.appendChild(txt);
        })
      }
    })
  }

  displayCards() {
    firebase.auth().onAuthStateChanged((user) => {
      const cardsContainer = document.getElementsByClassName('user-cards')[0];
      cardsContainer.innerHTML = '';
      if(user) {
        firebase.database().ref(`Users/${ user.uid }/Cards`).off('child_added');
        firebase.database().ref(`Users/${ user.uid }/Cards`).on('child_added', (snap) => {
          const cardName = document.createElement('p');
          cardName.innerHTML = `${snap.key.substring(0, 4)} **** **** ****`;
          cardsContainer.appendChild(cardName);
        })
      }
    })
  }

  setUserCards(cardNum, ccv, cardOwner, validTo, userUid) {
        firebase.database().ref(`Users/${ userUid }/Cards/${cardNum}`).set({
          CardNum: cardNum,
          CCV: ccv,
          CardOwner: cardOwner,
          Validation: validTo
        })
      }

  setUserData() {
    const cardNum = document.getElementById('card-num');
    const cardCCV = document.getElementById('card-ccv');
    const cardOwn = document.getElementById('card-own');
    const validateMM = document.getElementById('valid-date-mm');
    const validateYY = document.getElementById('valid-date-yy');
    firebase.auth().onAuthStateChanged((user) => {
    if(user){
      if(cardNum.value && cardCCV.value && cardOwn.value && validateMM.value && validateYY.value) {
        this.setUserCards(cardNum.value, cardCCV.value, cardOwn.value, `${ validateMM.value }/${ validateYY.value }`, user.uid);
        alert('Card added');
        cardNum.value = '';
        cardCCV.value = '';
        cardOwn.value = '';
        validateMM.value = '';
        validateYY.value = '';
      }
    }
  })
  }

  setName() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');

    if(firstName.value.length !== 0 && lastName.value.length !== 0){
      firebase.auth().currentUser.updateProfile({
        displayName: `${ firstName.value } ${ lastName.value }`
      }).then(() => { alert('Your profile is updated.') });
      firstName.value = '';
      lastName.value = '';
    } else {
      alert('Something gone wrong. Please check all fields.')
    }
  }

  getPackage() {
    if(!this.state.isUserLogged) { this.setState({ isOpenedSignInPopup: true }) }
    else { window.location.href = '/UserOffer' }
  }

  openAddCardPoup() {
    this.setState({
      isOpenedAddCardPopup: !this.state.isOpenedAddCardPopup
    })
  }

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
              isOpenedSignInPopup: false
            })
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
            this.setState({ isOpenedSignInPopup: false })
          })
          .catch((error) => {
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

  checkUser() {
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({isUserLogged: true})
        } else {
          this.setState({isUserLogged: false})
        }
      })
  }

  render() {
      const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        isUserLogged: this.state.isUserLogged,
        isOpenedAddCardPopup: this.state.isOpenedAddCardPopup,
        openAddCardPoup: this.openAddCardPoup,
        signOut: this.signOut,
        getPackage: this.getPackage,
        setName: this.setName,
        setUserData: this.setUserData,
        displayCards: this.displayCards,
        displayPackage: this.displayPackage,
      })
      )
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
        { childrenWithProps }
      </div>
    );
  }
}