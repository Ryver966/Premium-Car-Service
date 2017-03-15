import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import './styles/CSS/index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import UserOffer from './JS/AppBody/UserOffer/UserOffer';
import MyAccount from './JS/AppBody/MyAccount/MyAccount';
import EditMyProfile from './JS/AppBody/MyAccount/EditMyProfile';
import MyPackage from './JS/AppBody/MyAccount/MyPackage';



ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
        <Route path='/UserOffer' component={ UserOffer } />
        <Route path='/MyAccount' component={ MyAccount }>
          <Route path='/MyAccount/EditMyProfile' component={ EditMyProfile } />
          <Route path='/MyAccount/MyPackage' component={ MyPackage } />
        </Route>
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
