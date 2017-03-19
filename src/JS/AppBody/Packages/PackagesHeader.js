import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';
import { Link } from 'react-router';

export default class PackagesHeader extends Component {
  render() {
    return(
      <div className='packages-header'>
        <ul>
          <li><Link to={ '/Packages/Standard' } className='package-li' activeClassName='selected-package'>Standard</Link></li>
          <li><Link to={ '/Packages/Premium' } className='package-li' activeClassName='selected-package'>Premium</Link></li>
          <li><Link to={ '/Packages/Exclusive' } className='package-li' activeClassName='selected-package'>Exclusive</Link></li>
        </ul>
      </div>
    )
  }
}