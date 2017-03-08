import React, { Component } from 'react';
import '../styles/CSS/App.css';

export default class AppHeader extends Component {
  render() {
    return (
      <div className='navi-btn-container'>
        <ul className='btn-list'>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
          <li>Test 4</li>
        </ul>
      </div>
    )
  }
}
