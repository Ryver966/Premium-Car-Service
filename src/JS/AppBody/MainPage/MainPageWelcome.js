import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class MainPageWelcome extends Component {
  constructor(props) {
    super(props);

    this.scrollToBody = this.scrollToBody.bind(this);
  }

  scrollToBody() {
      const destination = document.getElementsByClassName('main-page-body')[0].offsetTop;
      window.scroll(0, destination);
  }
  render() {
    return(
      <div className='main-page-welcome'>
        <div className='text-box'>
          <h1>Welcome to</h1>
          <h2>Premium World</h2>
        </div>
        <input type='button' onClick={ this.scrollToBody } value='\/'/>
      </div>
    )
  }
}