import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import './styles/CSS/index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import AppBody from './JS/AppBody/AppBody';
import UserOffer from './JS/AppBody/UserOffer/UserOffer';
import MyAccount from './JS/AppBody/MyAccount/MyAccount';



ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }>
        <Route path='/UserOffer' component={ UserOffer } />
        <Route path='/MyAccount' component={ MyAccount } />
    </Route>
  </Router>
  ,
  document.getElementById('root')
);
