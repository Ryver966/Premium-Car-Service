import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';
import { Link } from 'react-router';

export default class MyPackage extends Component {
  render() {
    this.props.displayPackage();
    return(
      <div className='my-package'>
        <h1 className='my-account-h1'>MyPackage</h1>
        <div className='my-package-txt-container'>
        </div>
        <Link to='/UserOffer' id='get-package-btn'></Link>
      </div>
    )
  }
}