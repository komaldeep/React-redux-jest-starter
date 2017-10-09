import React, { Component } from 'react';
import Button, {buttonSizes , buttonSkins}  from '../atoms/Button/Button.js';
import InputText from '../atoms/InputText/InputText';
import WrapperLogin from '../molecules/WrapperLogin/WrapperLogin';
import AppConatiner from '../container/App/Appcontainer';
import './App.css';

class Appcontainer extends Component {

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
          <h2>Welcome to React-Redux-Router-Jest Package</h2>
          <h3>To start the Project</h3>
        </div>
        <AppConatiner>
          <WrapperLogin />
        </AppConatiner>
      </div>
    );
  }
}

export default Appcontainer;
