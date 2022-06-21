import React, { useRef, useState } from "react";
import { SafeAreaView, TouchableOpacity, FlatList, Image, StyleSheet, View,Text ,Dimensions ,StatusBar } from "react-native";

const height = Dimensions.get("window").height;

import BottomSheet from "react-native-gesture-bottom-sheet";
import LoginScreen from "./LoginScreen";
const BeginScreen = ({ navigation }) => {

    const bottomSheet = useRef(); 
    return (
        <View style={styles.container}>
          <View style={styles.whiteSheet} />
          <SafeAreaView style={styles.form}>
        
            <TouchableOpacity style={styles.button} onPress={() => { bottomSheet.current.show()}} >
            <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18} } >

            Login</Text>
          </TouchableOpacity>
         
            <TouchableOpacity   style={styles.button} onPress={() => navigation.navigate("Gast")}>
              <Text style={{fontWeight: 'bold', color: '#fff', fontSize: 18}}> Gast</Text>
            </TouchableOpacity> 

            <BottomSheet hasDraggableIcon ref={bottomSheet} height={height-50}>
		
             <LoginScreen/> 

            </BottomSheet>

          </SafeAreaView>
          <StatusBar barStyle="light-content" />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      }, whiteSheet: {
        width: '100%',
        height: '75%',
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 60,
      },
      form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
      },
      button: {
        backgroundColor: '#009688',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },

})

export default BeginScreen
