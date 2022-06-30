import { useIsFocused } from '@react-navigation/native';
import React, { useState ,useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';


const OefeningIngelondeScreen = ({ navigation,route }) => {
 
  const data = route;
  console.log(data);

  const [Oefeningen, setOefeningen] = useState([]);

  const isFocused = useIsFocused();
  const getAllOefeningen = async () => {
    try {

      const response = await fetch('http://127.0.0.1:8000/api/oefeningen', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      const json = await response.json();
      console.log(json);
      if (json.success == true) {
        const data = json.data;
       
        setOefeningen(data);

      } else {

        alert(json.message);
      }
    } catch (error) {
      alert("Er is een fout opgetreden");
      Alert.alert("Er is een fout opgetreden");
      console.error(error);
    }
  };


  const Oefening = ({ info }) => {


    return (
      <TouchableOpacity onPress={() => navigation.navigate("DetailsOefening", info)}>
        <View style={styles.Oefeningcontainer}>
          <View style={styles.cardContainer}>
            <Image style={styles.imageStyle} source={info.foto} />
            <View style={styles.infoStyle}>
              <Text style={styles.titleStyle}>{info.naam}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    if (isFocused) {
      getAllOefeningen();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <FlatList
        data={Oefeningen}
        renderItem={({ item }) => {
          return <Oefening info={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 40;
const radius = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d70096',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Oefeningcontainer: {
    width: deviceWidth - 20,
    alignItems: 'center',
    paddingBottom: radius,
    height: 500,
    marginTop: radius,
  },
  cardContainer: {
    width: deviceWidth - offset,
    backgroundColor: '#24126e',
    height: 400,
    borderRadius: radius,

    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  imageStyle: {
    height: 200,
    width: deviceWidth - offset,
    borderTopLeftRadius: radius,
    borderTopRightRadius: radius,
    opacity: 0.9,
    alignContent: 'center',
    alignSelf: 'center',
    
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '800',
    color:'#fc0303',
  },

  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 5,
  },


})


export default OefeningIngelondeScreen

