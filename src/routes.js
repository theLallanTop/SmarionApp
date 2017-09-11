import React, { Component } from 'react';
import {
Login
} from './containers';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';


export default class AppRouter extends Component {


  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Login} title="Login" initial/>
        </ Stack>
      </Router>
    );
  }
}
