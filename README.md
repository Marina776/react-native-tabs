# react-native-tabs
React Native platform-independent tabs. Originally forked form https://github.com/aksonov/react-native-tabs.

## Why I need to use it?
I'm developing an app which needs to run on both iOS and Android with bottom tabs. Obviously React Native does not provide Android one, and the forked one can not work as I need.

So I develop one based on the forked one.

## How it works?
I'm trying to make this tab works just like the React Native TabBarIOS. Similar API will cost you less time to integrate it.

## Example
Example makes selected icon color red and change the state of example view. To switch to other views you may use react-native-router-flux component or own navigation controller
![demo-2](https://cloud.githubusercontent.com/assets/1321329/10188030/adf5532c-675c-11e5-8447-227ec38fa24f.gif)

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Tabs from 'react-native-tabs';

class Example extends Component {
  constructor(props){
    super(props);
    this.state = {page:'second'};
  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="first">First</Text>
            <Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Second</Text>
            <Text name="third">Third</Text>
            <Text name="fourth" selectedStyle={{color:'green'}}>Fourth</Text>
            <Text name="fifth">Fifth</Text>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Example', () => Example);
```
