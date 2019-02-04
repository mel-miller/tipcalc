import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.hello}>Hello iOS!</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  hello: {
    backgroundColor: "#666",
    color: "white",
    padding: 10,
  }
})
