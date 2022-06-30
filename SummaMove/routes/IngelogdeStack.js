import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import AboutScreen from '../view/AboutScreen';
import OefeningIngelondeScreen from '../view/IngelogdeScreens/OefeningIngelondeScreen';
import PrestatiesScreen from '../view/IngelogdeScreens/PrestatiesScreen';
import QRStack from './QRStack';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../view/LoginScreen';
import DetailsScreen from '../view/IngelogdeScreens/DetailsScreen';
import PrestatiesAanmakenScreen from '../view/IngelogdeScreens/PrestatiesAanmakenScreen';
import PrestatieUpdateScreen from '../view/IngelogdeScreens/PrestatieUpdateScreen';
import Loguit from '../view/IngelogdeScreens/Loguit';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const OefeningStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} >
      <Stack.Screen name="oefeningen" component={OefeningIngelondeScreen} />
      <Stack.Screen name="DetailsOefening" component={DetailsScreen} />
     
    </Stack.Navigator>
  );
};
const PrestatieStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} >
      <Stack.Screen name="prestaties" component={PrestatiesScreen} />
      <Stack.Screen name="Prestatieaanmaken" component={PrestatiesAanmakenScreen} />
      <Stack.Screen name="PrestatieUpdate" component={PrestatieUpdateScreen} />
    </Stack.Navigator>
  );
};


const IngelogdeStack = () => {
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <Drawer.Navigator useLegacyImplementation screenOptions={{ name: () => null }}>
        <Drawer.Screen  name="Oefening" component={OefeningStack} />
        <Drawer.Screen name="Prestaties" component={PrestatieStack} />
 
        <Drawer.Screen  name="AboutOns" component={AboutScreen} />
        <Drawer.Screen  name="QRCode" component={QRStack} />
        <Drawer.Screen name="Loguit" component={Loguit} />
      </Drawer.Navigator>
      </SafeAreaView>
      </View>
      )
    }

export default IngelogdeStack

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  }

})