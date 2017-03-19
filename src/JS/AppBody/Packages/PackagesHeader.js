import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';
import { Link } from 'react-router';

export default class PackagesHeader extends Component {
  render() {
    return(
      <div className='packages-header'>
        <ul>
          <li><Link to={ '/Packages/Standard' } className='package-li'>Standard</Link></li>
          <li><Link to={ '/Packages/Premium' } className='package-li'>Premium</Link></li>
          <li><Link to={ '/Packages/Exclusive' } className='package-li'>Exclusive</Link></li>
        </ul>
      </div>
    )
  }
}