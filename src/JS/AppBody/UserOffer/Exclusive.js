import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class Exclusive extends Component {
  render() {
    return(
      <div className='user-packages'>
        <h1>Exclusive</h1>
        <img src={ require('../../../styles/img/exclusive.jpg') } width='390px' height='150px' />
        <h2>You Recive</h2>
        <ul>
          <li>- Lorem Ipsum</li>
          <li>- Is simply dummy text of the printing</li>
          <li>- And typesetting industry</li>
          <li>- It has survived not only five centuries</li>
          <li>- It was popularised in the 1960s</li>
          <li className='more-btn'>- See More..</li>
        </ul>
        <input type='button' class='' value='Get for 150$ / Month' />
      </div>
    )
  }
}