import { Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import axios from 'axios'
import {BASE_URL} from '../../helpers/apiAccessToken'
import {NoInternetConnection} from '../../component/NoInternetConnection'
import NetInfo from '@react-native-community/netinfo'
import { useDispatch, useSelector } from 'react-redux'
import {SetUsername, SetPassword, SetEmail} from './redux/action'
import { checkEmail, isValidPassword } from '../../helpers/validation'


const Index = ({navigation}) => {
  // const [connection, setConnection] = useState(true)
  const dispatch = useDispatch()
  const {email, password, name } = useSelector(state => state.register)

  const data = {
    email: email,
    password: password,
    name: name,
  }

  const register = async () => {
    try {
      if(checkEmail(email) && isValidPassword(password)){
        const res = await axios.post(`http://code.aldipee.com/api/v1/auth/register`, data)
        console.log(res);
            Alert.alert('Alert', 'Registration Success', [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Login'),
              },
            ]);
      } else if(!checkEmail(email) && isValidPassword(password)) {
        Alert.alert('Alert', `Invalid Email`);
      } else if(checkEmail(email) && !isValidPassword(password)) {
        Alert.alert('Alert', `Invalid Password`);
      } else {
        Alert.alert(
          'Alert',
          'Invalid Email and Password',
        );
      }
    } catch (error) {
      Alert.alert(
        'Alert',
        error,
      );
    }
  }

  // const checkInternet = () => {
  //   NetInfo.fetch().then(state => {
  //     console.log('Connection type', state.type);
  //     console.log('Is connected?', state.isConnected);

  //     setConnection(state.isConnected);
  //   })
  // }

  // if(connection){
    return (
      <ScrollView style={styles.container}>
        <Image
        style={styles.logo}
        source={require('../../assets/images/logo.png')}
        />
        <TextInput
          style={styles.value}
          onChangeText={(value) => dispatch(SetUsername(value))}
          value={name}
          placeholder="Full Name"
        />
        <TextInput
          style={styles.value}
          onChangeText={(value) => dispatch(SetEmail(value))}
          value={email}
          placeholder="Email"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.value}
          onChangeText={(value) => dispatch(SetPassword(value))}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Don't have an account?</Text>
      
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.textlogin}>Login</Text>
          </TouchableOpacity>

      </ScrollView>
    )
  // } else {
  //   NoInternetConnection(connection)
  // }
}

export default Index

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  logo: {
    width: moderateScale(200),
    height: moderateScale(200),
    marginTop: moderateScale(100),
    marginLeft: moderateScale(70)
  },
  value: {
    width: moderateScale(280),
    marginBottom: moderateScale(20),
    borderStyle: 'solid',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    borderColor: 'gray',
    marginLeft: moderateScale(32)
  },
  button: {
    backgroundColor: '#4D96FF',
    width: moderateScale(260),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    marginLeft: moderateScale(40)

  },
  buttonText: {
    color: 'white'
  }, 
  text: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    marginLeft: moderateScale(100),
    marginTop: moderateScale(10)
  },
  textlogin: {
    fontWeight:'bold',
    color: 'black',
    fontSize: moderateScale(16),
    left: moderateScale(144),
    marginTop: moderateScale(10)
  },
})