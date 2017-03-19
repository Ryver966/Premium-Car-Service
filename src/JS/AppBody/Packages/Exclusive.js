import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

export default class ExclusivePackage extends Component {
  render() {
    return(
      <div className='package-main-container'>
        <h1>Exclusive</h1>
        <img src={ require('../../../styles/img/exclusive.jpg') } />
        <p className='lower-paragraph'>Etiam in sodales neque. Integer dapibus, libero dictum pharetra mattis, nisl sem pulvinar justo, ac sodales ligula metus vel erat. Proin varius, libero ut iaculis blandit, elit nunc malesuada tortor, ac molestie orci erat vel leo. Vivamus fringilla dui eu dui mattis gravida vel ac dolor. Nullam imperdiet purus augue, quis porttitor diam pharetra ac.
        </p>

        <p className='lower-paragraph'>Donec libero metus, pretium non lacinia non, mollis a libero. Duis eu nisl tortor. Donec porttitor auctor ligula in elementum. Cras laoreet quam a lacus vulputate eleifend. Duis hendrerit id magna at faucibus. Mauris sem nisl, commodo sed finibus vitae, interdum sagittis nisl. Ut laoreet tellus erat, a dapibus enim fringilla ac.
        </p>
        
        <p className='lower-paragraph'>Suspendisse eget imperdiet augue. Etiam porta sapien a magna porta mattis. Sed euismod arcu at tincidunt molestie. Etiam quis tellus non purus porttitor tristique. Nam nunc massa, maximus eget congue eu, laoreet sed tellus. Donec sit amet odio ullamcorper, semper magna sed, posuere metus. Nulla sit amet congue lacus.
        </p>


      </div>
    )
  }
}