import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

class HelloWorldApp extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* two red sqaures */}
          <View style={styles.square} />
          <View style={styles.square} />

          {/* blue rectangle */}
          <View style={styles.rectangle} />

          {/* two yellow sqaures */}
          <View style={styles.square} />
          <View style={styles.square} />

          {/* orange rectangle */}
          <View style={styles.rectangle} />

          {/* two green sqaures */}
          <View style={styles.square} />
          <View style={styles.square} />

          {/* blue rectangle */}
          <View style={styles.rectangle} />

          {/* two yellow sqaures */}
          <View style={styles.square} />
          <View style={styles.square} />

          {/* orange rectangle */}
          <View style={styles.rectangle} />

          {/* two yellow sqaures */}
          <View style={styles.square} />
          <View style={styles.square} />

          {/* orange rectangle */}
          <View style={styles.rectangle} />

          {/* two yellow sqaures */}
          <View style={styles.square} />
          <View style={styles.square} />

          {/* orange rectangle */}
          <View style={styles.rectangle} />

          {/* two yellow sqaures */}
          <View style={styles.square} />
          <View style={styles.square} />

          {/* orange rectangle */}
          <View style={styles.rectangle} />
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },

  square: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    marginTop: 50

  },

  rectangle: {
    width: 100,
    height: 50,
    backgroundColor: 'orange',
    marginTop: 50

  }

})

export default HelloWorldApp
