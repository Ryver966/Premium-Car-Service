import React, { Component } from 'react';
import '../styles/CSS/App.css';

import AppHeader from'./AppHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ require('../styles/img/Premium-Cars-Logo.png') } className='header-logo' alt='Logo' />
          <AppHeader />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
