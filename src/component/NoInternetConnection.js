import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

const NoInternetConnection = (connection) => {
    if(connection){
        return null
    } else {
        return (
            <View>
              <Text style={styles.name}>No Internet Connection, Check your internet and refresh</Text>
            </View>
          )
    }
}

export default NoInternetConnection

const styles = StyleSheet.create({
    name: {
        fontSize: moderateScale(24),
        textAlign: 'center'
    }
})