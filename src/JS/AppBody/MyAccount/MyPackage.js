import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';
import { Link } from 'react-router';

export default class MyPackage extends Component {
  render() {
    return(
      <div className='my-package'>
        <h1>MyPackage</h1>
        <p>Now you don't have any package</p>
        <Link to='/UserOffer'><input type='button' value='Get Package!' /></Link>
      </div>
    )
  }
}