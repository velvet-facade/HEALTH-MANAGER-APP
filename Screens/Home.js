import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import Recom from '../components/recommendations';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <Header text="Dashboard"/>
        <ScrollView style={{ backgroundColor: '#fcd3d2' }}>
          <Recom />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    padding: 8,
  },
});
