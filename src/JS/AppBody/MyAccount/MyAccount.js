import React, { Component } from 'react';
import '../../../styles/CSS/AppBody.css';

import MyAccountMenu from './MyAccountMenu';
import EditMyProfile from './EditMyProfile';

export default class MyAccount extends Component {
  render() {

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, {
        isOpenedAddCardPopup: this.props.isOpenedAddCardPopup,
        openAddCardPoup: this.props.openAddCardPoup,
        setName: this.props.setName,
        setUserData: this.props.setUserData
      })
      )

    return(
      <div className='my-account-page'>
        <MyAccountMenu signOut={ this.props.signOut }/>
        <div className='right-container'>
          { childrenWithProps }
        </div>
      </div>
    )
  }
}