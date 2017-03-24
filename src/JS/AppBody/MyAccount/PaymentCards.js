import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import AddCardPopup from './AddCardPopup';

export default class PaymentCards extends Component {
  render() {
    this.props.displayCards()
    return(
      <div className='payment-cards'>
        <h1 className='my-account-h1'>Payment Cards</h1>
        <div className='user-cards'>
          <h2>Your Cards:</h2>
          
        </div>
        <button onClick={ this.props.openAddCardPoup }>Add Card</button>
        <AddCardPopup
          isOpenedAddCardPopup={ this.props.isOpenedAddCardPopup }
          setUserData={ this.props.setUserData }
        />
      </div>
    )
  }
}