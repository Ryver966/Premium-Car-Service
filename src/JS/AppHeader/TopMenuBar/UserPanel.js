import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

export default class UserPanel extends Component {
  render() {
    return(
      <div className={ this.props.isUserLogged ? 'show' : 'hide' } >
        <img 
          className='user-avatar' 
          src={ require('../../../styles/img/default-avatar.png') } />
      </div>
    )
  }
}