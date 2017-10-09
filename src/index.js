import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppConatiner from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import {Link, browserHistory, Router, Route  } from "react-router";

// React redux store
import configureStore from './Store/AppStore';
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={ AppConatiner }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('reactEntry'));