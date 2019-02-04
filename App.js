import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tipFactor: '',
    }
  }

  updateCustomTip(customTip) {
    if (customTip) {
      this.setState({
        tipFactor: parseFloat(customTip) / 100,
      })
    } else {
      this.setState({tipFactor: 0})
    }
  }

  render() {
    let tip = 0.00;
    if (this.state.inputValue) {
      tip = parseFloat(this.state.inputValue) * this.state.tipFactor;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
    }

    return (
      <View style={styles.container}>
        <Text>
          Tip = ${tip}
        </Text>
        <TextInput
          value={this.state.inputValue}
          style={styles.input}
          keyboardType='numeric'
          placeholder='0.00'
          onChangeText={(text)=> this.setState({ inputValue: text })}
        />
      <View style={styles.buttonGroup}>
          <Button
            title='10%'
            onPress={() => this.setState({ tipFactor: 0.1 })}
          />
          <Button
            title='15%'
            onPress={() => this.setState({ tipFactor: 0.15 })}
          />
          <Button
            title='20%'
            onPress={() => this.setState({ tipFactor: 0.2 })}
          />
          <TextInput
            value={(this.state.tipFactor * 100).toString()}
            style={styles.customTip}
            keyboardType='numeric'
            placeholder='25%'
            onChangeText={customTip => this.updateCustomTip(customTip)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  customTip: {
    height: 40,
    width: 60,
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
  }

});
