import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './Style';
import { ProgressBar } from '../../components';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>

        < ProgressBar />

      </View>
    );
  }
}
