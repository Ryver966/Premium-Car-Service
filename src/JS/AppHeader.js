import React, { Component } from 'react';
import '../styles/CSS/App.css';

export default class AppHeader extends Component {
  render() {
    return (
      <div className='navi-btn-container'>
        <input type='button' className='sign-in-btn' value='Sign In / Join' />
        <ul className='btn-list'>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
          <li>Test 4</li>
          <li>Test 5</li>
        </ul>
      </div>
    )
  }
}
