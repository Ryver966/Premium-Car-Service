import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class PackagesBody extends Component {
  render() {
    return(
      <div className='packages-body'>
        { this.props.children }
        <input type='button' onClick={ this.props.getPackage } value='Get your package' />
      </div>
    )
  }
}