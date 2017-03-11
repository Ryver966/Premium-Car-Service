import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import Standard from './Standard';
import Premium from './Premium';
import Exclusive from './Exclusive';

export default class UserOffer extends Component {
  render() {
    return(
      <div className={ `user-offer` }>
        <div className='offer-container'>
          <Exclusive />
          <Premium />
          <Standard />
        </div>
      </div>
    )
  }
}