import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import MyAccountMenu from './MyAccountMenu';
import EditMyProfile from './EditMyProfile';

export default class MyAccount extends Component {
  render() {
    return(
      <div className={ `my-account-page ${ this.props.isUserLogged ? '' : '' }` }>
        <MyAccountMenu />
        <div className='right-container'>
          { this.props.children }
        </div>
      </div>
    )
  }
}