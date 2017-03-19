import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class Avatar extends Component {
  render(){
    return(
      <div className='single-avatar-container'>
        <img src={ require(`../../../styles/img/${this.props.avatar.img}`) } className='avatar-img' />
        <h2>{ this.props.avatar.name }</h2>
        <a>{ this.props.avatar.description }</a>
      </div>
    )
  }
}