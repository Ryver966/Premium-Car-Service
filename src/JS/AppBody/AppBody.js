import React, { Component } from 'react';
import '../../styles/CSS/AppBody.css';

import UserOffer from './UserOffer/UserOffer'

export default class AppBody extends Component {
  render() {
    return(
      <div className='App-body'>
        <UserOffer />
      </div>
    )
  }
}