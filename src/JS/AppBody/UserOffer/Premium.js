import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class Premium extends Component {
  render() {
    return(
      <div className='user-packages'>
        <h1>Premium</h1>
        <img src={ require('../../../styles/img/premium.jpg') } width='90%' height='150px' />
        <h2>You Recive:</h2>
        <ul>
          <li>- Is simply dummy text of the printing</li>
          <li>- It has survived not only five centuries</li>
          <li>- And typesetting industry</li>
          <li>- Lorem Ipsum</li>
          <li>- It was popularised in the 1960s</li>
          <li className='more-btn'>- See More..</li>
        </ul>
        <input type='button' class='user-offer-btn' value='Get for 100$ / Month' />
      </div>
    )
  }
}