/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';

import * as firebase from 'firebase';
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCe6D8ao8Vidh3zgM3FIDUmk-B8Mvvellg",
  authDomain: "fir-31a65.firebaseapp.com",
  databaseURL: "https://fir-31a65.firebaseio.com",
  storageBucket: "",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const styles = require('./styles.js')

const listData = [{ title: 'Pizza' }];

export default class App extends Component<{}> {

  constructor(props) {
  super(props);

}



  _renderItem(item) {
    return (
      <ListItem item="{item}" onpress={() => {}} />
    );
  }



  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Department List"/>



        <FlatList
        data={listData}
        renderItem={
          (item) => {this._renderItem}
        }
        keyExtractor={(item, index) => index}
      />

        <ActionButton title="Add" onpress={() => {}}  />

      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
