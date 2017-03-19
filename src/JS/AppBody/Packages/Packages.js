import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import PackagesHeader from './PackagesHeader';
import PackagesBody from './PakagesBody';

export default class Packages extends Component {
  render() {
    return(
      <div className='packages-main'>
        <PackagesHeader />
        <PackagesBody 
          getPackage={ this.props.getPackage }
          children={ this.props.children } 
        />
      </div>
    )
  }
}