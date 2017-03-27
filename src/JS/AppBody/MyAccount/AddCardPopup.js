import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class AddCardPopup extends Component {
  render() {
    return(
      <div className={ `add-card-popup ${ this.props.isOpenedAddCardPopup ? '' : 'no-visible' }` }>
          <p>Card Number</p>
          <input type='number' id='card-num' />
          <p>CCV</p>
          <input type='number' id='card-ccv'/>
          <p>Card Owner</p>
          <input type='text' id='card-own'/>
          <p>Valid To</p>
          <input type='number' id='valid-date-mm' className='add-card-validate'/>
          <a> / </a>
          <input type='number' id='valid-date-yy' className='add-card-validate'/><br />
          <button onClick={ this.props.setUserData }>Add</button>
        </div>
    )
  }
}