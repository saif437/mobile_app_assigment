import 'react-native-gesture-handler'

import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomNavigator } from '@react-navigation/Bottom-tabs'

import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './components/HomeScreen'
import About from './components/About'
import Contact from './components/Contact'

const Tab = createTabNavigator()

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='About' component={About} options={{ title: 'Our story' }} />
          <Tab.Screen name='Contact' component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
