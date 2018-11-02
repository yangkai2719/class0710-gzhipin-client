import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';


import Login from './components/login';
import Register from './containers/register';
import Main from './components/main';
import store from './redux/store';

import './assets/less/index.less';
ReactDOM.render(
  (
    <Provider>
      <HashRouter>
        <switch>
          
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route component={Main}/>
        </switch>
      
      </HashRouter>
      
      
      </Provider>
      
      
      )
      
      
      , document.getElementById('root'));