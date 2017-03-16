import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class NeedHelp extends Component {
  render() {
    return(
      <div className='need-help'>
        <h1 className='my-account-h1'>Need Help?</h1>
        <h2>Call to </h2>
        <p>+11 111 11 11</p>
        <p>222 222 222</p>
        <h2>Or send email</h2>
        <a>Topic: </a>
        <select>
          <option></option>
          <option>What is Lorem Ipsum?</option>
          <option>Why do we use it?</option>
          <option>Where does it come from?</option>
          <option>Where can I get some?</option>
        </select> <br />
        <textarea placeholder='Write your message here.'></textarea><br />
        <button>Send</button>
      </div>
    )
  }
}