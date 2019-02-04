import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform
} from 'react-native';

import {
  Header,
  Left,
  Body,
  Right,
  Title
} from 'native-base';


export default class Head extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Header>
          <Left/>
          <Body>
            <Title>TipCalc</Title>
          </Body>
          <Right />
        </Header>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
