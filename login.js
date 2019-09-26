import React from 'react'
import { StyleSheet, Text, View, TextInput, ImageBackground, Button, Alert, TouchableHighlight } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'

class Login extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      fields: {
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      }
    }
  }

  static navigationOptions = {
    title: 'Welcome'
  }

  // handleEmail (e) {
  //   this.setState({ ...this.state, fields: { ...this.state.fields, email: e.target.value } })
  // }

  // handlePass (e) {
  //   this.setState({ ...this.state, fields: { ...this.state.fields, password: e.target.value } })
  // }

  handleError () {
    let valid = true
    const errors = {
      email: validate('email', this.state.fields.email),
      password: validate('password', this.state.fields.password)
    }
    console.log('errorrr', errors)
    this.setState({ errors },
      () => {
        Object.values(this.state.errors).map((item) => {
          if (item !== null) {
            valid = false
          }
        })
        if (valid) {
          this.handleRequest()
        }
      }
    )
  }

  handleRequest () {
    console.log('state::::', this.state)
    axios.post('https://api.paywith.click/auth/signin/', {
      email: this.state.fields.email,
      password: this.state.fields.password
    })
      .then((response) => {
        console.log('data:', response.data.data)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('user_id', response.data.data.profile.id)
        this.props.navigation.navigate('Chat')
      })
      .catch(function (error) {
        console.log(error)
      })
      
  }

  render () {
    var Image = require('./assets/background.jpg')
    return (
      <ImageBackground source={Image} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Text style={styles.text}>Login Here</Text>
          <View>
            <TextInput
              value={this.state.fields.email}
              placeholder='Email'
              style={styles.inputs} 
              onChangeText={(email) => this.setState(email)} />
            <TextInput 
              value={this.state.fields.password}
              placeholder='Password' 
              style={styles.inputs}
              onChangeText={(password) => this.setState(password)} />
            
            {/* {this.state.errors.password !== null && <span className='error'>{this.state.errors.password}</span>} */}
              <Button
                title='Login'
                color='#03236c'
                style={styles.submitBtn}
                onPress={() => this.handleError()}
              />
            
          </View>
          
            <Text style={styles.forgetText}>Forget you'r password ?</Text>
          
        </View>
        <View style={styles.signupBtn}>
         
            <Button
              title='SIGNUP'
              color='#fc345f'
               />
          
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30
  },
  inputs: {
    width: 200,
    backgroundColor: '#fff',
    borderColor: '#fff',
    margin: 15,
    padding: 10,
    height: 40,
    borderRadius: 10,
    borderWidth: 1
  },
  submitBtn: {
    width: 120
  },
  signupBtn: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    margin: 15
  },
  forgetText: {
    color: '#fff',
    padding: 5
  }
})

export default Login
