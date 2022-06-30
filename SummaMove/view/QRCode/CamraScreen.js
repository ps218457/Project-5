import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
const CamraScreen = ( {navigation} ) => {
  const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
   
    const getOefening = async (data) => {
      try {
  
        const response = await fetch('https://summamoveyazan1.000webhostapp.com/api/oefeningen?ID=' + data.toString() , {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
  
        const json = await response.json();
        console.log(json);
        if (json.success == true) {
        
          navigation.push('OefeningQRCode' , json.data);
        } else {
  
          alert(json.message);
        }
      } catch (error) {
        alert("Er is een fout opgetreden");
        Alert.alert("Er is een fout opgetreden");
        console.error(error);
      }
    };


    // return(
    //   <View style={styles.container}>
    //   <Button title={'Tap to Scan Again'} onPress={() => getOefening()} />
    //   </View>
    // );
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      getOefening(data)
      setScanned(true);
    
  
    };
  
    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
  });

export default CamraScreen;