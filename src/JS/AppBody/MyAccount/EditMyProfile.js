import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class EditMyProfile extends Component {
  render() {
    return(
      <div className='edit-my-profile'>
        <h1 className='my-account-h1'>Edit My Profile</h1>
        <h2>First Name</h2>
        <input type='text' />
        <h2>Last Name</h2>
        <input type='text' />
        <h2>Gender</h2>
        <select>
          <option>Male</option>
          <option>Female</option>
        </select><br/>
        <button className='edit-profile-btn'>Send</button>
      </div>
    )
  }
}