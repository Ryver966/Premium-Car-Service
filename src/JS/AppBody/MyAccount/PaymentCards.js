import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class PaymentCards extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props.openAddCardPoup);
    console.log(this.props.isOpenedAddCardPopup);
    return(
      <div className='payment-cards'>
        <h1>Payment Cards</h1>
        <div className='user-cards'>
          <h2>Your Cards:</h2>
          <p>None</p>
        </div>
        <button onClick={ this.props.openAddCardPoup }>Add Card</button>
        <div className={ `add-card-popup ${ this.props.isOpenedAddCardPopup ? 'show' : 'hide' }` }>
          <p>Card Number</p>
          <input type='number' className='card-info' />
          <p>CCV</p>
          <input type='number' className='card-ccv'/>
          <p>Card Owner</p>
          <input type='text' className='card-info'/>
          <p>Valid To</p>
          <input type='number' className='valid-date'/>
          <a> / </a>
          <input type='number' className='valid-date'/><br />
          <button>Add</button>
        </div>
      </div>
    )
  }
}