import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/register/index'
import Login from '../screens/login/index'
import Home from '../screens/home/index'
import RegistrationCompleted from '../screens/registrationCompleted/index'
import BookDetail from '../screens/bookDetail/index'

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
<Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false}} >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegistrationCompleted" component={RegistrationCompleted} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="BookDetail" component={BookDetail} />
    </Stack.Navigator>
  )
}

export default Index