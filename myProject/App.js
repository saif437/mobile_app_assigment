import React, { Component } from 'react'
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: 'email',
      password: 'password',
      isPasswordVisible: true
    }
  }

  handleLogin = () => {
    alert(this.state.email +  '\n'  + this.state.password)
  } 

  render () {
    return (
      <View>
        <TextInput style={styles.textInput} value={this.state.email} onChangeText={(email) => { this.setState({ email: email }) }} />
        <TextInput style={styles.textInput} secureTextEntry={this.state.isPasswordVisible} value={this.state.password} onChangeText={(password) => { this.setState({ password: password }) }} />
        <TouchableOpacity style={styles.buttonStyle} onPress={this.handleLogin} >
          <Text style={styles.textStyle}> Log In</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 6,
    backgroundColor: 'grey',
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20
  },

  buttonStyle: {
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 6,
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100
  },

  textStyle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default App
