import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAttempt } from './Action/Index';
import Button, {buttonSizes , buttonSkins}  from './atoms/Button/Button.js';
import InputText from './atoms/InputText/InputText';
import WrapperLogin from './molecules/WrapperLogin/WrapperLogin';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      inputField:'',
    }
  }

  render() {
    return (
      <div>
        <div className="App-header App">
          <h2>Welcome to React</h2>
          <h3>Best Practise for writing react components (Atomicity)</h3>
        </div>
        <WrapperLogin />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return { Reducers: store.Reducers};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginAttempt
  }, dispatch);
}


const AppConatiner = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppConatiner;
