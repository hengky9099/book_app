import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {SetLoginEmail, SetLoginPassword, SetToken} from './redux/action';
import NoInternetConnection from '../../component/NoInternetConnection';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

const Index = ({navigation}) => {
  const {email, password, token} = useSelector(state => state.login);
  const dispatch = useDispatch();
  const {connection} = useSelector(state => state.global);

  const data = {
    email: email, // Hengky9099@gmail.com
    password: password, // Qpwoeiru123
  };

  const login = async () => {
    try {
      const res = await axios.post(
        `http://code.aldipee.com/api/v1/auth/login`,
        data,
        {
          validateStatus: status => {
            if (status < 201) {
              // console.log(res.tokens);
              // dispatch(SetToken(res.tokens.access.token))
              Alert.alert('Selamat', 'Login Berhasil', [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Home'),
                },
              ]);
            } else if (status === 401) {
              Alert.alert('Warning', 'Username atau Password Salah!');
            } else {
              Alert.alert('Warning', 'Error');
            }
          },
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (connection) {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />

        <TextInput
          style={styles.value}
          onChangeText={value => dispatch(SetLoginEmail(value))}
          // value={email}
          textContentType="emailAddress"
          placeholder="Email"
        />
        <TextInput
          style={styles.value}
          onChangeText={value => dispatch(SetLoginPassword(value))}
          // value={password}
          placeholder="Password"
          secureTextEntry={true}
        />

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.text}>Don't have an account?</Text>
        {/* register */}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textregister}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    <NoInternetConnection />;
  }
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: moderateScale(1500),
  },
  value: {
    left: moderateScale(40),
    top: moderateScale(150),
    width: moderateScale(280),
    marginBottom: moderateScale(20),
    borderStyle: 'solid',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    borderColor: 'gray',
  },
  text: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: moderateScale(14),
    marginLeft: moderateScale(100),
    marginTop: moderateScale(160),
  },
  textregister: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: moderateScale(16),
    left: moderateScale(138),
    top: moderateScale(10),
  },
  logo: {
    height: moderateScale(200),
    width: moderateScale(200),
    left: moderateScale(70),
    top: moderateScale(130),
  },
  button: {
    backgroundColor: '#4D96FF',
    width: moderateScale(260),
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(10),
    top: moderateScale(150),
    left: moderateScale(45),
  },
  buttonText: {
    color: 'white',
  },
});
