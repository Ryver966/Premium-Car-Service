import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import './styles/CSS/index.css';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={ browserHistory } >
    <Route path='/' component={ App } />
  </Router>,
  document.getElementById('root')
);
