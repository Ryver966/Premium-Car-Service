import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class Contact extends Component {
  render() {
    return(
      <div className='contact-main'>
        <h1>Contact with us</h1>
        <div className='contact-methods-container'>
          <div className='call-container'>
            <h2>Call with any question</h2>
            <p>+11 111 11 11</p>
            <p>222 222 222</p>
          </div>
          <form className='send-email-container'>
            <h2>Send e-mail to our helpdesk</h2>
            <input type='email' placeholder='Get your email here' /><br />
            <select>
              <option></option>
              <option>What is Lorem Ipsum?</option>
              <option>Why do we use it?</option>
              <option>Where does it come from?</option>
              <option>Where can I get some?</option>
            </select><br />
            <textarea placeholder='Write your message here.'></textarea><br />
            <button>Send</button>
          </form>
        </div>
      </div>
    )
  }
}