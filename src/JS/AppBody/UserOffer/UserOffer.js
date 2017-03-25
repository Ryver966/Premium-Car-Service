import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import OfferCard from './OfferCard';
import Regulations from './Regulations';

const offer = [
  {
    title: 'Standard',
    img: 'standard.jpg',
    li1: '- All the Lorem Ipsum generators',
    li2: '- It has survived not only five centuries',
    li3: '- And typesetting industry',
    li4: '- The standard chunk of Lorem Ipsum',
    li5: '- It was popularised in the 1960s',
    packageValue: '150$'
  },
  {
    title: 'Premium',
    img: 'premium.jpg',
    li1: '- All the Lorem Ipsum generators',
    li2: '- It has survived not only five centuries',
    li3: '- And typesetting industry',
    li4: '- Lorem Ipsum',
    li5: '- It was popularised in the 1960s',
    packageValue: '250$'
  },
  {
    title: 'Exclusive',
    img: 'exclusive.jpg',
    li1: '- Lorem Ipsum',
    li2: '- Is simply dummy text of the printing',
    li3: '- And typesetting industry',
    li4: '- Lorem Ipsum',
    li5: '- It has survived not only five centuries',
    packageValue: '500$'
  },
];

export default class UserOffer extends Component {
  render() {
    return(
      <div className='user-offer'>
        <div className='offer-container'>
          <OfferCard 
            selectedPackage={ this.props.selectedPackage }
            openModal={ this.props.openModal }
            offer={ offer[0] } 
          />
          <OfferCard
            offer={ offer[1] } 
            openModal={ this.props.openModal }
            selectedPackage={ this.props.selectedPackage }
          />
          <OfferCard 
            offer={ offer[2] }
            openModal={ this.props.openModal }
            selectedPackage={ this.props.selectedPackage }
          />
        </div>
        <Regulations 
          isModalDisplay={ this.props.isModalDisplay }
          buyPackage={ this.props.buyPackage }
          closeModal={ this.props.closeModal }
        />
      </div>
    )
  }
}