import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class MyProfilePage extends Component{
  render() {
    return(
      <div className={ `my-profile` }>
        <h2>First Name:</h2>
        <p id='name'>none</p>
        <h2>Last Name:</h2>
        <p id='surname'>none</p>
        <h2>Date Of Birth:</h2>
        <p id='birth-date'>xx/xx/xxxx</p>
        <h2>Package:</h2>
        <p id='package'>none</p>
      </div>
    )
  }
}