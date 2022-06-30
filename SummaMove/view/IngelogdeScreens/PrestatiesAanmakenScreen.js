import React, { useState, useEffect,useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  Alert,
} from "react-native";
import { UserContest } from '../Usergegevens/UsergegevensContext';

import Icon from 'react-native-vector-icons/MaterialIcons';

const PrestatiesAanmakenScreen = ({ navigation , route }) => {

  const {user, setUser} = useContext(UserContest);
  const [choosenValue, setChoosenValue] = useState(1);
  const [choosenIndex, setChoosenIndex] = useState(1);
  const [Prestaties, setPrestaties] = useState({
    Datum: "",
    Starttijd: "",
    Eindtijd: "",
    aantal: "",
   
  });

  const [loading, setLoading] = useState(false);
  const [Oefeningen, setOefeningen] = useState([]);

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


  useEffect(() => {
    getAllOefeningen();
  }, []);

  const onChangeDatum = (value) => {
    setPrestaties({ ...Prestaties, Datum: value });
  };

  const onChangeStarttijd = (value) => {
    setPrestaties({ ...Prestaties, Starttijd: value });
  };

  const onChangeEindtijd = (value) => {
    setPrestaties({ ...Prestaties, Eindtijd: value });
  };

  const onChangeaantal = (value) => {
    setPrestaties({ ...Prestaties, aantal: value });
  };


  const saveData = async () => {
    
      setLoading(true);
      var myHeaders = new Headers();


      myHeaders.append("Content-Type", "application/json");
      let requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + user.access_token,
        },
        body: JSON.stringify({
          User_id: parseInt(user.user.id) ,
          oefening_id: parseInt(choosenValue) ,
          Datum: Prestaties.Datum,
          Starttijd: Prestaties.Starttijd,
          Eindtijd: Prestaties.Eindtijd,
          aantal: Prestaties.aantal,
        })
      };
      try {
      

        const response = await fetch("http://127.0.0.1:8000/api/prestaties/store", requestOptions);
        const json = await response.json();
        if (json.success == true) {
          setLoading(false);
          navigation.navigate('prestaties');
        }
        else {
          setLoading(false);
          alert("Er is een fout opgetreden probeer het opnieuw");
          Alert.alert("Er is een fout opgetreden probeer het opnieuw");
        }
      } catch (error) {
        alert("Er is een fout opgetreden");
        Alert.alert("Er is een fout opgetreden");
        console.error(error);
    
      }
    
  };

  const Opslaan = () => {
    if (Prestaties.datum == "" || Prestaties.Starttijd == "" || Prestaties.Eindtijd == "" || Prestaties.aantal == "" ) {
      alert("Vul alle velden in");
      Alert.alert("Vul alle velden in");
    }
    else { saveData(); }
}

  return (
    <View style={styles.container}>
      <View>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />

        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Maak hier een nieuwe</Text>
        <Text
          style={{ fontSize: 38,  fontWeight: "bold" }}
        >
          Prestatie
        </Text>
      </View>
      <TextInput
        placeholder={"Datum"}
        onChangeText={(value) => onChangeDatum(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Starttijd"}
        onChangeText={(value) => onChangeStarttijd(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Eindtijd"}
        onChangeText={(value) => onChangeEindtijd(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Aantal"}
        onChangeText={(value) => onChangeaantal(value)}
        style={styles.input}
      />
      <Picker
       
        onValueChange={(itemValue, itemIndex) => {

          setPrestaties({ ...Prestaties, oefening_id: itemValue });

          setChoosenValue(itemValue);
          setChoosenIndex(itemIndex);
        }}
      >
        <Picker.Item value={0} label=''/>
        {
          Oefeningen.map(item => {
            return <Picker.Item value={item.id} label={item.naam} />
          })
        }
      </Picker>

      <TouchableOpacity onPress={Opslaan}  >
        <View style={{ backgroundColor: "blue", padding: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {loading ? "loading..." : "Create"}
            {loading == true ? <Icon name="cached" size={28} color="white" /> : null}
          
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  

}


const styles = StyleSheet.create({
  
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
  container: {
    flex: 1, paddingHorizontal: 20, backgroundColor: 'white',
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PrestatiesAanmakenScreen;