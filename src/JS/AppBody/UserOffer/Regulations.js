import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class Regulations extends Component {
  render() {
    return(
      <div className={ `modal ${ this.props.isModalDisplay ? 'show' : 'hide' }` }>
        <div>
          <h1>It's only demo page. you can't buy anything here</h1>
          <input 
            type='button' 
            className='modal-btn' 
            value='Get this package'
            onClick={ this.props.buyPackage }
          />
          <input
            type='button'
            className='modal-btn'
            value='Cancel'
            onClick={ this.props.closeModal }
          />
        </div>
      </div>
    )
  }
}