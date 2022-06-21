import { createStackNavigator } from '@react-navigation/stack';
import CamraScreen from '../view/QRCode/CamraScreen';
import QROefeningScreen from '../view/QRCode/QROefeningScreen';
const Stack = createStackNavigator();

const QRStack = () => {
    return (
        <Stack.Navigator >
          <Stack.Screen name="Camra" component={CamraScreen} />
          <Stack.Screen name="OefeningQRCode" component={QROefeningScreen} />
        </Stack.Navigator>
      );
}

export default QRStack

