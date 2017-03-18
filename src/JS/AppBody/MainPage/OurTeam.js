import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import Avatar from './Avatar';

const avatars = [
  {
    img: 'portraitFemale1.jpeg',
    name: 'Nichole	Williams',
    description: 'Phasellus dolor est, tincidunt nec lorem id, commodo scelerisque purus.'
  },
  {
    img: 'portraitMale1.jpg',
    name: 'Robert	Green',
    description: 'Lorem ipsum dolor sit amet.'
  },
  {
    img: 'portraitMale2.jpg',
    name: 'Spencer	Herrera',
    description: 'Cras congue non leo in feugiat. '
  },
  {
    img: 'portraitMale3.jpg',
    name: 'Lonnie	Norman',
    description: 'Cras congue non leo in feugiat.'
  },
]

export default class OurTeam extends Component {
  render() {
    return(
      <div className='our-team-container'>
        <h1>Our Team</h1>
        <div className='avatars-container'>
          <Avatar avatar={ avatars[0] } />
          <Avatar avatar={ avatars[1] } />
          <Avatar avatar={ avatars[2] } />
          <Avatar avatar={ avatars[3] } />
        </div>
      </div>
    )
  }
}