import { StyleSheet, Text, View, TouchableOpacity, Alert ,SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react';

const QROefeningScreen = ( props ) => {

  const [data, setdata] = useState(props.route.params.data);

  const showDetailScreen = () => {
    Alert.alert(data);
  }
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.form}>
  
      <TouchableOpacity onPress={showDetailScreen}>
        <Text>Gegevens Laten zien</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  }
});
export default QROefeningScreen