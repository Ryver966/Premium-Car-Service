import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class Standard extends Component {
  render() {
    return(
      <div className='user-packages'>
        <h1>Standard</h1>
        <img src={ require('../../../styles/img/standard.jpg') } width='90%' height='150px' />
        <h2>You Recive:</h2>
        <ul>
          <li>- All the Lorem Ipsum generators</li>
          <li>- It has survived not only five centuries</li>
          <li>- And typesetting industry</li>
          <li>- The standard chunk of Lorem Ipsum</li>
          <li>- It was popularised in the 1960s</li>
          <li className='more-btn'>- See More..</li>
        </ul>
        <input type='button' className='user-offer-btn' value='Get for 75$ / Month' />
      </div>
    )
  }
}