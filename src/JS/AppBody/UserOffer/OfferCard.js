import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';
import { Link } from 'react-router';

export default class OfferCard extends Component {
  render() {
    return(
      <div className='user-packages'>
        <h1 className='package-name'>{ this.props.offer.title }</h1>
        <img src={ require(`../../../styles/img/${ this.props.offer.img }`) } width='90%' height='150px' />
        <h2>You Recive:</h2>
        <ul>
          <li>{ this.props.offer.li1 }</li>
          <li>{ this.props.offer.li2 }</li>
          <li>{ this.props.offer.li3 }</li>
          <li>{ this.props.offer.li4 }</li>
          <li>{ this.props.offer.li5 }</li>
          <Link to={ `/Packages/${ this.props.offer.title }` }><li className='more-btn'>- See More..</li></Link>
        </ul>
        <input 
          type='button' 
          className='user-offer-btn' 
          value={ `Get For ${ this.props.offer.packageValue } / Month` } 
          onClick={ this.props.openModal.bind(this, this.props.offer.title) }
        />
      </div>
    )
  }
}