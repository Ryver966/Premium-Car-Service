import React, { Component } from 'react';
import '../../../styles/CSS/AppHeader.css';

import UserPopup from './UserPopup';

export default class UserPanel extends Component {
  render() {
    return(
      <div className={ this.props.isUserLogged ? 'show' : 'hide' } >
        <img 
          className='user-avatar' 
          src={ require('../../../styles/img/default-avatar.png') }
          onClick={ this.props.openUserPopup } 
        />
        <UserPopup 
          isOpenedUserPopup={ this.props.isOpenedUserPopup } 
          signOut={this.props.signOut}
          openUserOffer={ this.props.openUserOffer }
        />
      </div>
    )
  }
}