import 'react-native-gesture-handler'

import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './components/HomeScreen'
import About from './components/About'
import Contact from './components/Contact'

const Stack = createStackNavigator()

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='About' component={About} options={{ title: 'Our story' }} />
          <Stack.Screen name='Contact' component={Contact} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
