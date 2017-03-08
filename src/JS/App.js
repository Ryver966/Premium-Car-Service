import React, { Component } from 'react';
import '../styles/CSS/App.css';

import AppHeader from'./AppHeader/AppHeader';

class App extends Component {
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

export default App;
