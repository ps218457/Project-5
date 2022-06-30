import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import AboutScreen from '../view/AboutScreen';
import OefeningGastScreen from '../view/GastScreens/OefeningGastScreen';
import QRStack from './QRStack';
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from '../view/GastScreens/DetailsScreen';
import LoginScreen from '../view/LoginScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const OefeningStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} >
      <Stack.Screen name="OefeningGastScreen" component={OefeningGastScreen} />
      <Stack.Screen name="DetailsOefening" component={DetailsScreen} />
      
    </Stack.Navigator>
  );
};

const GastStack = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <Drawer.Navigator useLegacyImplementation screenOptions={{ name: () => null }}>
          <Drawer.Screen name="Oefening" component={OefeningStack} />
          <Drawer.Screen name="AboutOns" component={AboutScreen} />
          <Drawer.Screen name="QRCode" component={QRStack} />
          <Drawer.Screen name="login" component={LoginScreen} />
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
  }

})
