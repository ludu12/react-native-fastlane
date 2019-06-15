import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, NativeModules } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Fastlane Junto!</Text>
        <TouchableHighlight style={styles.button} onPress={() => { NativeModules.ToastManager.toastMessage('Toast message!'); }}>
          <Text style={{color: 'white'}}> Toast Message </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#841584',
    padding: 10
  }
});
