import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

export default class SignInBtn extends Component {
  render() {
    return(
      <div className={ this.props.isUserLogged ? 'hide' : 'show' }>
        <input type='button' 
          className='sign-in-btn' 
          onClick={ this.props.openPopup } 
          value='Sign In / Join' 
        />
      </div>
    )
  }
}