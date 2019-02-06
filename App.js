import * as Expo from 'expo';
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import {
  Container,
  Content
} from 'native-base';

import Head from './src/components/Head';
import Values from './src/components/Values';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      tip: '',
      isReady: false,
    }
  }

  //fonts for Android
  componentWillMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  }

  updateCustomTip(customTip) {
    if (customTip) {
      this.setState({
        tip: parseFloat(customTip) / 100,
      })
    } else {
      this.setState({tip: 0})
    }
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    return (
      <Container>
        <Head />
        <View style={styles.container}>
          <Content style={{width: '100%'}}>
            <Values
              tipPercent={this.state.tip}
              bill={this.state.inputValue}
            />
            <View style={styles.inputs}>
              <Text>Bill Amount</Text>
              <TextInput
                value={this.state.inputValue}
                style={styles.input}
                keyboardType='numeric'
                placeholder='0.00'
                placeholderTextColor='#222'
                clearButtonMode='while-editing'
                onChangeText={(text)=> this.setState({ inputValue: text })}
              />
              <View style={styles.buttonGroup}>
                <Button
                  title='10%'
                  onPress={() => this.setState({ tip: 0.1 })}
                />
                <Button
                  title='15%'
                  onPress={() => this.setState({ tip: 0.15 })}
                />
                <Button
                  title='20%'
                  onPress={() => this.setState({ tip: 0.2 })}
                />
                <TextInput
                  value={(this.state.tip * 100).toString()}
                  style={styles.customTip}
                  keyboardType='numeric'
                  onChangeText={customTip => this.updateCustomTip(customTip)}
                />
              </View>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  inputs: {
    backgroundColor: 'white',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    padding: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  customTip: {
    height: 40,
    width: 40,
    padding: 5,
    color: 'rgb(0, 122, 255)',
  },
});
