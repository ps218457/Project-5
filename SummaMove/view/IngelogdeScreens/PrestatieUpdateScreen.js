import React, { useState, useEffect ,useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  Alert,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { UserContest } from '../Usergegevens/UsergegevensContext';

const PrestatieUpdateScreen = ({ navigation , route }) => {
  console.log(route);
  console.log(route.params);
 
    const {user, setUser} = useContext(UserContest);

    const [choosenValue, setChoosenValue] = useState(route.params.oefening_id);
    const [choosenIndex, setChoosenIndex] = useState(route.params.oefening_id);
    const [prestatie, setprestatie] = useState({
      Naam: route.params.naam,
      Datum: route.params.Datum,
      Starttijd: route.params.Starttijd,
      Eindtijd: route.params.Eindtijd,
      aantal: route.params.aantal,
     
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
  
  
  
    const onChangeNaam = (value) => {
      setprestatie({ ...prestatie, Naam: value });
    };
  
    const onChangeDatum = (value) => {
      setprestatie({ ...prestatie, Datum: value });
    };
  
    const onChangeStarttijd = (value) => {
      setprestatie({ ...prestatie, Starttijd: value });
    };
  
    const onChangeEindtijd = (value) => {
      setprestatie({ ...prestatie, Eindtijd: value });
    };
  
    const onChangeaantal = (value) => {
      setprestatie({ ...prestatie, aantal: value });
    };
    
    const saveData = async () => {
      
        setLoading(true);
        var myHeaders = new Headers();
  
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + user.access_token,
          },
          body: JSON.stringify({
            User_id: parseInt(user.user.id) ,
            oefening_id: parseInt(choosenValue) ,
            Datum: prestatie.Datum,
            Starttijd: prestatie.Starttijd,
            Eindtijd: prestatie.Eindtijd,
            aantal: prestatie.aantal,
           
          })
        };
        try {
        
  
          const response = await fetch("http://127.0.0.1:8000/api/prestaties/update/"+route.params.ID.toString() , requestOptions);
          const json = await response.json();
          if (json.success == true) {
            setLoading(false);
            alert("Succesvol aangepast!");
            Alert.alert("Succesvol aangepast!");
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
      if (prestatie.Naam == "" || prestatie.Datum == "" || prestatie.Starttijd == "" || prestatie.Eindtijd == "" || prestatie.aantal == "") {
        alert("Vul alle velden in");
        Alert.alert("Vul alle velden in");
      }
      else { saveData(); }
  }

  
    return (
      <View style={styles.container}>
        <View>
          <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
  
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Update je prestatie</Text>
          <Text
            style={{ fontSize: 38,  fontWeight: "bold" }}
          >
          </Text>
        </View>
        <TextInput
          onChangeText={(value) => onChangeNaam(value)}
          style={styles.input}
          value={prestatie.Naam}
        />
        <TextInput
          placeholder={"Datum"}
          onChangeText={(value) => onChangeDatum(value)}
          style={styles.input}
          value={prestatie.Datum}
        />
        <TextInput
          placeholder={"Starttijd"}
          onChangeText={(value) => onChangeStarttijd(value)}
          style={styles.input}
          value={prestatie.Starttijd}
        />
        <TextInput
          placeholder={"Eindtijd"}
          onChangeText={(value) => onChangeEindtijd(value)}
          style={styles.input}
          value={prestatie.Eindtijd}
        />
        <TextInput
          placeholder={"aantal"}
          onChangeText={(value) => onChangeaantal(value)}
          style={styles.input}
          value={prestatie.aantal}
        />
        <Picker
         value={choosenValue}
          onValueChange={(itemValue, itemIndex) => {
  
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
              {loading ? "loading..." : "Update"}
              {loading == true ? <Icon name="cached" size={28} color="white" /> : null}
            
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  

  
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
  
  

export default PrestatieUpdateScreen;