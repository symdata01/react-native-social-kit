/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
} from 'react-native';

import Demo from './js/Demo';

class demo extends Component {
  render() {
    return (
      <Demo/>
    );
  }
}


AppRegistry.registerComponent('demo', () => demo);