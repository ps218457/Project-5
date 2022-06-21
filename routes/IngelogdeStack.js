import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import AboutScreen from '../view/AboutScreen';
import OefeningIngelondeScreen from '../view/IngelogdeScreens/OefeningIngelondeScreen';
import PrestatiesScreen from '../view/IngelogdeScreens/PrestatiesScreen';
import QRStack from './QRStack';

const Drawer = createDrawerNavigator();

const IngelogdeStack = ({ navigation }) => {
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.form}>
        <Drawer.Navigator useLegacyImplementation screenOptions={{ name: () => null }}>

        <Drawer.Screen name="Oefening" component={OefeningIngelondeScreen} />
        <Drawer.Screen name="Prestaties" component={PrestatiesScreen} />
        <Drawer.Screen  name="AboutOns" component={AboutScreen} />
        <Drawer.Screen  name="QRCode" component={QRStack} />
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
    marginHorizontal: 30,
  }

})