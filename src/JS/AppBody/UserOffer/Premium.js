import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class Premium extends Component {
  render() {
    return(
      <div className='user-packages'>
        <h1>Premium</h1>
        <img src={ require('../../../styles/img/premium.jpg') } width='390px' height='150px' />
      </div>
    )
  }
}