import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import logo from '../assets/images/logo.png'

const NetworkError: React.FC = () => {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image source={logo} style={styles.image} resizeMode={'contain'} />
        <Text style={styles.text}>Can't reach the server. Verify your network connection.</Text>
        <View style={styles.spacer} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container: {
    marginLeft: 32,
    marginRight: 32,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  spacer: {
    height: 64,
  },
  image: {
    width: 'auto',
  },
})

export default NetworkError
