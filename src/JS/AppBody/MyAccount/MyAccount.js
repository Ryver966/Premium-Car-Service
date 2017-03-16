import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import MyAccountMenu from './MyAccountMenu';
import EditMyProfile from './EditMyProfile';

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='my-account-page'>
        <MyAccountMenu signOut={ this.props.signOut }/>
        <div className='right-container'>
          { this.props.children }
        </div>
      </div>
    )
  }
}