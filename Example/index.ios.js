/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Tabs from 'react-native-tabs';

// type State = {
//   page: string
// };

export default class Example extends React.Component {
  state: {
    page: string 
  };

  constructor(props: any) {
    super(props);
    this.state = { 
      page: 'second' 
    };
  }

  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
          selectedStyle={{ color: 'red' }} onSelect={el => this.setState({ page: el.props.name }) }
          pressOpacity={1}>
          <View name="first">
            <Image style={{width:30, height:30}} source={require("./images/Home@2x.png")}/>
            <Text>First</Text>
          </View>
          <Text name="second" selectedIconStyle={{ borderTopWidth: 2, borderTopColor: 'red' }}>Second</Text>
          <Text name="third">Third</Text>
          <Text name="fourth" selectedStyle={{ color: 'green' }}>Fourth</Text>
          <View name="fifth">
            <Image style={{width:30, height:30}} source={require("./images/Account@2x.png")}/>
            <Text>First</Text>
          </View>
        </Tabs>
        <Text style={styles.welcome}>
          Welcome to React Native
        </Text>
        <Text style={styles.instructions}>
          Selected page: {this.state.page}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);

