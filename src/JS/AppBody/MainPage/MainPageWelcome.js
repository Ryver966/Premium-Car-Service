import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class MainPageWelcome extends Component {
  render() {
    return(
      <div className='main-page-welcome'>
        <div className='text-box'>
          <h1>Welcome in</h1>
          <h2>Premium World</h2>
        </div>
      </div>
    )
  }
}