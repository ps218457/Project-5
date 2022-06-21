import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import React from 'react'

const LoginScreen = (  ) => {

  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity  onPress={() => navigation.replace("Login")}>
              <Text > Login</Text>
            </TouchableOpacity> 

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})