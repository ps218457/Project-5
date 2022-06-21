import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const AboutScreen = () => {
  return (
    <View>
      <Text style={styles.Textstyle}>SummaMove is een initiatief van het Summa College, met de missie om de wereld een gezondere, gelukkerige plek te maken. In 2022 lanceerde wij onze eerste App oplossingen in gezondheid & fitness. Op het moment biedt de app een oplossing voor als u graag meer wilt bewegen, maar komt het er soms niet van? Met uw telefoon heeft u altijd een sportinstructeur bij de hand. Deze app die u eraan herinneren om in beweging te komen en bijhouden hoeveel u loopt of fietst op een dag. Ook kunt u oefeningen bekijken en nadoen.</Text>
      <Text style={styles.Textstyle2}>Versie 1.0</Text>
    </View>
  )
}

export default AboutScreen

const styles = StyleSheet.create({

  Textstyle:{
  color: '#9400D3',
  fontSize: 18,
  },

  Textstyle2:{
    color: '#9400D3',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 400
  },

});
