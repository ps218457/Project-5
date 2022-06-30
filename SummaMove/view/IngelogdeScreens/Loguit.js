import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import React, { useState, useEffect, useContext } from "react";
const backImage = require("../../assets/Summa_move.png");
import { UserContest } from '../Usergegevens/UsergegevensContext';


const Loguit = ({navigation}) => {
  const {user, setUser} = useContext(UserContest);
  const logout = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.access_token
      }
    });
    const json = await response.json();
    console.log(json)
    if (json.success == true) {
      alert("Uitgelogd");
      navigation.navigate('BeginScreen')
    }
    else {
      alert(json.message);
      Alert.alert(json.message);
    }
  };
    return (
        <View style={styles.container}>
          <Image source={backImage} style={styles.backImage} />
          <View style={styles.whiteSheet} />
          <SafeAreaView style={styles.form}>
            <Text style={styles.title}>Log Uit</Text>
           
            <TouchableOpacity style={styles.button} onPress={()=> logout() }>
              <Text style={{ fontWeight: 'bold', color: '#d70096', fontSize: 18 }}> Log Uit</Text>
            </TouchableOpacity>
    
          </SafeAreaView>
          <StatusBar barStyle="light-content" />
        </View>
      );
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
      },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "orange",
        alignSelf: "center",
        paddingBottom: 24,
        color: "#fc0303"
      },
      input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
      },
      backImage: {
        width: 170,
        height: 150,
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
        left: 90,
    
      },
      whiteSheet: {
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
        backgroundColor: '#24126e',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
    });


export default Loguit