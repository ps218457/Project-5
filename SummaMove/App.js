import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

 import BeginScreen from "./view/BeginScreen";
import GastStack from "./routes/GastStack";
import IngelogdeStack from "./routes/IngelogdeStack";
import LoginScreen from "./view/LoginScreen";
import { UserProviders , UserContest } from "./view/Usergegevens/UsergegevensContext";


const BeginStack = ({ navigation}) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} >
      <Stack.Screen name="BeginScreen" component={BeginScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Gast" component={GastStack} />
      <Stack.Screen name="IngelogdeStack" component={IngelogdeStack} />
     
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <UserProviders>
        <NavigationContainer>
      <BeginStack/>
    </NavigationContainer>
    </UserProviders>
  
  );
};

export default App;