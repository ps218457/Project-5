import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import React, { useState, useEffect ,useContext } from "react";
import {  UserContest } from "./Usergegevens/UsergegevensContext";

const backImage = require("../assets/Summa_move.png");
const LoginScreen = (  ) => {
const navigation= useNavigation();

const {user, setUser} = useContext(UserContest);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const LoginKlant = async (email, password) => {

    setPassword("");
    setEmail("");
    try {
      var myHeaders = new Headers();


      myHeaders.append("Content-Type", "application/json");

      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          email: email,
          password: password,
          password_confirmation: password,
        }),
      });
      console.log(response);
      if (response.status == 200) {

        const data = await response.json();
       setUser(data);
        console.log(data);
        navigation.replace("IngelogdeStack");
        // navigation.navigate("IngelogdeStack", {
        //   params: { data },
        // });
        
      }
      else {
        
        alert("Email of wachtwoord is incorrect");
        Alert.alert("Email of wachtwoord is incorrect");
      }
    }
    catch (error) {
      alert("Fout bij aanroepen van api");
      Alert.alert("Fout bij aanroepen van api");
    }



  };

  const login =  () => {
    if (Email == "") {
      alert("Email is leeg");
      Alert.alert("Email is leeg");
    }
   else if (Password == "") {
      alert("Password is leeg");
      Alert.alert("Password is leeg");

    }
    else{
      
      LoginKlant(Email, Password);
    }
  

  };


  useEffect(() => {

  }, []);
 return (
    <View style={styles.container}>
      <Image source={backImage} style={styles.backImage} />
      <View style={styles.whiteSheet} />
      <SafeAreaView style={styles.form}>
        <Text style={styles.title}>Log In</Text>
         <TextInput
        style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={Email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        textContentType="password"
        value={Password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={{fontWeight: 'bold', color: '#d70096', fontSize: 18}}> Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
        <Text style={{fontWeight: 'bold', color: '#d70096', fontSize: 18}}> Annuleren</Text>
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
    left:90,
    
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
export default LoginScreen

