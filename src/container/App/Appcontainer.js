import { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginAttempt } from '../../Action/Index';
import PropTypes from 'prop-types';

class App extends Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  componentWillMount(){
    this.props.loginAttempt();
  }

  render() {
    const {
      Reducers
    } = this.props;

    return (
      cloneElement(
        this.props.children,
        {
          Reducers
        }
      )
    );
  }
}

function mapStateToProps(store) {
  return { Reducers: store.Reducers };
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
