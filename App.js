import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

 import BeginScreen from "./view/BeginScreen";
import GastStack from "./routes/GastStack";
import IngelogdeStack from "./routes/IngelogdeStack";
import LoginScreen from "./view/LoginScreen";


const BeginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} >
      <Stack.Screen name="BeginScreen" component={BeginScreen} />
      <Stack.Screen name="Gast" component={GastStack} />
      <Stack.Screen name="Login" component={IngelogdeStack} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
     
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <BeginStack/>
    </NavigationContainer>
  );
};

export default App;