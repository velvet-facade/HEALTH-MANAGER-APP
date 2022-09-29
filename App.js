import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';

// You can import from local files

import StackNavigator from './Navigation/StackNavigator';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
