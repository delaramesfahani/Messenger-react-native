import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
import Login from './login'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Chat from './chat'
// export default function App () {
//   return (
//     <Chat />
//   )
// }

const MainNavigator = createStackNavigator({
  Login: { screen: Login },
  Chat: { screen: Chat }
})

const App = createAppContainer(MainNavigator)
export default App


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
