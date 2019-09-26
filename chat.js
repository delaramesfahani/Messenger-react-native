import React from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

class Chat extends React.Component {
  render () {
    var backgroundBoxUrl = require('./assets/sky.jpg')
    return (
      <View style={styles.container}>

        <View style={styles.chatTitle}>
          <LinearGradient colors={['#e57373', '#ffcdd2']}>
            <Text style={styles.email}>delaramesfahani73@gmail.com</Text>
          </LinearGradient>
        </View>

        <View style={styles.chatBox}>
          <ImageBackground source={backgroundBoxUrl} style={{ width: '100%', height: '100%' }}>
            <Text style={styles.sender}>salam</Text>
            <Text style={styles.reciver}>salam :)</Text>
          </ImageBackground>
        </View>
        <View style={styles.footer}>
          <TextInput placeholder='type here...' style={styles.input} />
          <Ionicons name='ios-send' size={40} color='#03236c' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  chatTitle: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 20,
    color: '#000',
    backgroundColor: '#ef9a9a'
  },
  chatBox: {
    flex: 10
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  input: {
    borderWidth: 2,
    borderColor: '#03236c',
    borderRadius: 20,
    backgroundColor: '#eee',
    width: 350
  },
  email: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 18
  },
  sender: {
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 20,
    padding: 10,
    alignSelf: 'flex-end'
  },
  reciver: {
    backgroundColor: '#ef9a9a',
    alignSelf: 'flex-start',
    borderRadius: 20,
    margin: 20,
    padding: 10
  }
})
export default Chat
