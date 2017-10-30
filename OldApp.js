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
  View
} from 'react-native';

import * as firebase from 'firebase';
const StatusBar = require('./components/StatusBar');
const ActionButton = require('./components/ActionButton');
const ListItem = require('./components/ListItem');
const styles = require('./styles.js')

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
  storageBucket: "",,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class App extends Component<{}> {

  constructor(props) {
  super(props);
  this.state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  };
}

componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([{ title: 'Pizza' }])
    })
  }


  _renderItem(item) {
    return (
      <ListItem item="{item}" onpress="{()" ==""> {}} />
    );
  }

  render() {
    return (
      <View style="{styles.container}">

        <StatusBar title="Grocery List">

        <ListView datasource="{this.state.dataSource}" renderrow="{this._renderItem.bind(this)}" style="{styles.listview}/">

        <ActionButton title="Add" onpress="{()" ==""> {}} />

      </View>
    );
    );
  }
}
