import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { moderateScale } from 'react-native-size-matters'
import axios from 'axios'

const Index = () => {

  useEffect(() => {
    recommended()
  }, [])

  const recommended = async () => {
    try {
      const res = await axios.get(`http://code.aldipee.com/api/v1/books`, {
        headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjQ3ZDAxOTIyNTM2YzdmYzdmZjdhMTciLCJpYXQiOjE2NDg5MTY2NzksImV4cCI6MTY1MTUwODY3OSwidHlwZSI6InJlZnJlc2gifQ.3wj2R67B0UqsFxHF_K3rPY4x04q0D6doJBMNZn5YjmA`}
      })
      console.log(res)
    } catch (error) {
      console.log(error)
      
    }
  }

//   useEffect(() => {
//     getDataFromHome();
//     getCastData();
//   }, []);

//   const getDataFromHome = async () => {
//     try {
//       setLoading(true)
//     const results = await axios.get(`${BaseUrl}/movie/${route.params.datas}`, {
//       headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
//     });
//       setData(results.data)
//     }catch (error) {
//         console.log(error);
//   } finally {
//     setLoading(false)
//   }
// }
  
  return (
    <View>
      <Text style={styles.greeting}>Good Morning, Hengky!</Text>
      <Text style={styles.recommended}>Recommended</Text>
      <View style={styles.kotak} />
      <Text style={styles.popular}>Popular Book</Text>
      <View style={styles.kotak2} />
      <TouchableOpacity onPress={recommended}>
          <Text style={styles.textregister}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
  greeting: {
    fontSize: moderateScale(16),
    top: moderateScale(40),
    left: moderateScale(20),
    color: 'black'
  },
  recommended: {
    fontSize: moderateScale(14),
    top: moderateScale(60),
    left: moderateScale(20)
  },
  kotak: {
    width: moderateScale(100),
    height: moderateScale(200),
    backgroundColor: 'black',
    marginTop: moderateScale(70),
    marginLeft: moderateScale(20)
  }, 
  popular: {
    fontSize: moderateScale(14),
    top: moderateScale(25),
    left: moderateScale(20)
  },
  kotak2: {
    width: moderateScale(100),
    height: moderateScale(200),
    backgroundColor: 'black',
    top: moderateScale(40),
    marginLeft: moderateScale(20)
  }, 
})