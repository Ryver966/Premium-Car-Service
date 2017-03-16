import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import MainPageWelcome from './MainPageWelcome';

export default class MainPage extends Component {
  render() {
    return(
      <div className='main-page'>
        <MainPageWelcome />
        <div>
          <textarea></textarea>
        </div>
      </div>
    )
  }
}