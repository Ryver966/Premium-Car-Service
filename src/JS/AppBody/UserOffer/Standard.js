import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class Standard extends Component {
  render() {
    return(
      <div className='user-packages'>
        <h1>Standard</h1>
        <img src={ require('../../../styles/img/standard.jpg') } width='390px' height='150px' />
      </div>
    )
  }
}