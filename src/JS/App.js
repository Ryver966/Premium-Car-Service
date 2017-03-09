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
  console.log(firebase);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className="App">
        <AppHeader />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

