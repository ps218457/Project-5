

import React, { useEffect, useState ,useContext } from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { UserContest } from '../Usergegevens/UsergegevensContext';



const PrestatiesScreen = ({ navigation , route}) => {

  const {user, setUser} = useContext(UserContest);
  const [Prestaties, setPrestaties] = useState([]);
  const isFocused = useIsFocused();
  const getPrestaties = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/prestaties?User=`+user.user.id.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.access_token,
        }
      });
      const json = await response.json();
      console.log(json);
      if (json.success == true) {
        setPrestaties(json.data);
    
      } else {
        alert(json.message);
      }
    }
    catch (error) {
      alert("Er is een fout opgetreden");
      Alert.alert("Er is een fout opgetreden");
      console.error(error);
    }
  };

  const deleteprestatie = async (info
  ) => {
    try {


        const response = await fetch('http://127.0.0.1:8000/api/prestaties/delete/'+ info.ID, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + user.access_token
            }
        });
        const json = await response.json();
        console.log(json);
        if (json.success == true) {
          getPrestaties();
        } else {
           
            alert("Er is een fout opgetreden");
            Alert.alert("Er is een fout opgetreden");
        }
    }
    catch (error) {
        alert("Er is een fout opgetreden");
        Alert.alert("Er is een fout opgetreden");
        console.error(error);
    }

};


  useEffect(() => {
     if (isFocused) {
       getPrestaties();
     }
  }, [isFocused]);

  const Oefening = ({ info }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('PrestatieUpdate', info)}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 5,
          }}>
          <Text style={{ fontWeight: 'bold' }}>{info.naam} </Text>
          <Text style={{ fontWeight: 'bold' }}>{info.Datum} </Text>
          <Text style={{ fontWeight: 'bold' }}>{info.Starttijd} </Text>
          <Text style={{ fontWeight: 'bold' }}>{info.Eindtijd} </Text>
          <Text style={{ fontWeight: 'bold' }}>{info.aantal} </Text>
          <Button title='DEL' onPress={() => deleteprestatie(info)}></Button>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Hier zijn al je</Text>
          <Text
            style={{ fontSize: 38,  fontWeight: "bold" }}
          >
            Prestaties
          </Text>
        </View>

        <View >

          <TouchableOpacity onPress={() => navigation.navigate('Prestatieaanmaken' )} >
            <Icon
              name="add"
              size={18}
            />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={Prestaties}
        renderItem={({ item }) => {
          return <Oefening info={item} />;
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1, paddingHorizontal: 20, backgroundColor: 'white',
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

//make this component available to the app
export default PrestatiesScreen;