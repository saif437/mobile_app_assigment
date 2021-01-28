import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

class Contact extends Component {
  render () {
  	const navigation = this.props.navigation
    return (
      <View>
        <Text>Contact</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Contact
