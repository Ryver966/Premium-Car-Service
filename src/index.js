import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import './styles/CSS/index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import UserOffer from './JS/AppBody/UserOffer/UserOffer';
import MyAccount from './JS/AppBody/MyAccount/MyAccount';
import EditMyProfile from './JS/AppBody/MyAccount/EditMyProfile';
import MyPackage from './JS/AppBody/MyAccount/MyPackage';
import PaymentCards from './JS/AppBody/MyAccount/PaymentCards';
import NeedHelp from './JS/AppBody/MyAccount/NeedHelp';
import MainPage from './JS/AppBody/MainPage/Main';
import AboutUs from './JS/AppBody/AboutUs/AboutUs';
import Packages from './JS/AppBody/Packages/Packages';
import StandardPackage from './JS/AppBody/Packages/Standard';
import PremiumPackage from './JS/AppBody/Packages/Premium';
import ExclusivePackage from './JS/AppBody/Packages/Exclusive';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ MainPage } />
      <Route path='/AboutUs' component={ AboutUs } />
      <Route path='/Packages' component={ Packages }>
        <Route path='/Packages/Standard' component={ StandardPackage } />
        <Route path='/Packages/Premium' component={ PremiumPackage } />
        <Route path='/Packages/Exclusive' component={ ExclusivePackage } />
      </Route>
      <Route path='/UserOffer' component={ UserOffer } />
      <Route path='/MyAccount' component={ MyAccount }>
        <Route path='/MyAccount/MyPackage' component={ MyPackage } />
        <Route path='/MyAccount/EditMyProfile' component={ EditMyProfile } />
        <Route path='/MyAccount/PAymentCards' component={ PaymentCards } />
        <Route path='/MyAccount/NeedHelp' component={ NeedHelp } />
      </Route>
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
