import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen  from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsComponent";
import ListScreen from './src/screens/ListScreen';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Details" > 
        {(props) => <DetailsScreen {...props}/>}
        </Stack.Screen>
        <Stack.Screen name="List" component={ListScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
