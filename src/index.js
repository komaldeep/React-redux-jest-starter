import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router, Route  } from "react-router";

//All the pages
import App from './components/organism/App';

// All the css files
import './index.css';

// React redux store
import configureStore from './store/AppStore';
const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={ App }/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('reactEntry'));