import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ActivityIndicator, Button, Provider as PaperProvider } from 'react-native-paper';

const OefeningGastScreen = ({ navigation }) => {
  const apiOefening = 'http://localhost:8000/api/oefeningen';
    const [isOefeningAvailable, setOefeningAvailable] = useState(false);
    const [OefeningData, setOefeningData] = useState(null);

    useEffect(() => { GetOefening(); }, []);

    const BehandelFout = (error) => {
      console.log(error);
      setOefeningData(
        { 
          beschrijving: '***ERROR***', 
          results: [
            {naam: 'Er is een fout opgetreden. Start de applicatie opnieuw op. ' 
                  + 'Blijft het probleem optreden, waarschuw dan de service desk.'
                }
              ]
        }
      )
    }
  
    const GetOefening = () => {
      fetch(apiOefening)
        .then((response) => response.json())
        .then((data) => setOefeningData(data))
        .catch((error) => BehandelFout(error))
        .finally(()=>setOefeningAvailable(true));
    }
  
    const RenderOefening = ({ item, index }) => {
      return (
        <View style={styles.OefeningItem}>
          <Pressable onPress={() => navigation.navigate( 'Details', {item})}>
            <Text style={styles.OefeningItemText}>{item.naam}</Text>
          </Pressable>
        </View>
      )
    }

  return (
    <PaperProvider>
    <View style={styles.container}>
      {isOefeningAvailable
        ?
        (
          <View style={styles.container}>
            <Text style={styles.header}>Aantal Oefeningen: {OefeningData.length}</Text>
            <FlatList
              style={styles.oefeningList}
              data={OefeningData}
              renderItem={RenderOefening}
              keyExtractor={(item, index) => item.naam + index}

            />
          </View>
        )
        :
        (
          <ActivityIndicator style={styles.activityIndicator} color='purple' size={70} />
        )
      }
    </View>
  </PaperProvider>

  )
}

export default OefeningGastScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9400D3',
  },
  activityIndicator : { flex: 1, },
  oefeningList: {flexGrow: 1, backgroundColor: '#e3e3e3', },
  oefeningItem : { marginHorizontal: 10, marginVertical: 3, backgroundColor: 'black', },
  oefeningItemText: { fontSize: 15, color: 'white', padding: 10},

  button: { flexGrow: 1, marginHorizontal: 10, },


});