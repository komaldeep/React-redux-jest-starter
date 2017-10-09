// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
//
// ReactDOM.render(<App />, document.getElementById('reactEntry'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { hashHistory } from 'react-router';
import {Link, browserHistory, Router, Route  } from "react-router";

render(
  <Provider>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={ App }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('reactEntry'));