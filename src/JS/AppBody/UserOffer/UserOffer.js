import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import OfferCard from './OfferCard';

const offer = [
  {
    title: 'Standard',
    img: 'standard.jpg',
    li1: '- All the Lorem Ipsum generators',
    li2: '- It has survived not only five centuries',
    li3: '- And typesetting industry',
    li4: '- The standard chunk of Lorem Ipsum',
    li5: '- It was popularised in the 1960s',
    packageValue: '75$'
  },
  {
    title: 'Premium',
    img: 'premium.jpg',
    li1: '- All the Lorem Ipsum generators',
    li2: '- It has survived not only five centuries',
    li3: '- And typesetting industry',
    li4: '- Lorem Ipsum',
    li5: '- It was popularised in the 1960s',
    packageValue: '100$'
  },
  {
    title: 'Exclusive',
    img: 'exclusive.jpg',
    li1: '- Lorem Ipsum',
    li2: '- Is simply dummy text of the printing',
    li3: '- And typesetting industry',
    li4: '- Lorem Ipsum',
    li5: '- It has survived not only five centuries',
    packageValue: '150$'
  },
];

export default class UserOffer extends Component {
  render() {
    return(
      <div className={ `user-offer ${ this.props.isSelectedUserOffer ? 'show' : 'show' } ${ this.props.isUserLogged ? '' : '' }` }>
        <div className='offer-container'>
          <OfferCard offer={ offer[2] } />
          <OfferCard offer={ offer[1] } />
          <OfferCard offer={ offer[0] }/>
        </div>
      </div>
    )
  }
}