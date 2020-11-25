import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen  from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsComponent";
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColourScreen from './src/screens/ColourScreen';




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
        <Stack.Screen name="Image Screen" component={ImageScreen}/>
        <Stack.Screen name="Counter Screen" component={CounterScreen}/>
        <Stack.Screen name="Colour Screen" component={ColourScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
