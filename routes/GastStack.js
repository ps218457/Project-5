import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import AboutScreen from '../view/AboutScreen';
import OefeningGastScreen from '../view/GastScreens/OefeningGastScreen';
import QRStack from './QRStack';
import { createStackNavigator } from "@react-navigation/stack";
import OefeningBeschrijvingGast from '../view/GastScreens/OefeningBeschrijvingGast';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const oefeningenstack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Oefeningen" component={OefeningGastScreen} />
      <Stack.Screen name="Details" component={OefeningBeschrijvingGast} />
    </Stack.Navigator>
  );
}

const GastStack = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <Drawer.Navigator useLegacyImplementation screenOptions={{ name: () => null }}>
          <Drawer.Screen name="Oefening" component={oefeningenstack} />
          <Drawer.Screen name="AboutOns" component={AboutScreen} />
          <Drawer.Screen name="QRCode" component={QRStack} />
        </Drawer.Navigator>
      </SafeAreaView>
    </View>



  )
}

export default GastStack


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  }

})
