import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';
import { Link } from 'react-router';

export default class PackagesHeader extends Component {
  render() {
    return(
      <div className='packages-header'>
        <ul>
          <Link to={ '/Packages/Standard' } className='package-li'><li>Standard</li></Link>
          <Link to={ '/Packages/Premium' } className='package-li'><li>Premium</li></Link>
          <Link to={ '/Packages/Exclusive' } className='package-li'><li>Exclusive</li></Link>
        </ul>
      </div>
    )
  }
}