import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component{
  render()
  {
    return(
      <View>
        <Text>SayHello name="Saif Ali"</Text>
        <Text>SayHello name="John"</Text>
        <Text>SayHello name="Mike"</Text>
      </View>
      );
  }
}

class SayHello extends Component{
  render()
  {
    return(
      <View>
        <Text>Hello {this.props.name}</Text>
      </View>
      );
  }
}

export default HelloWorldApp;
