import React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.view}>
        <Text>Home Screen</Text>
        <Button 
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button title="Go To lists" 
        onPress={() => navigation.navigate('List')}
        />
        <Button title="Go To Image Screen" 
        onPress={() => navigation.navigate('Image Screen')}
        />
        <Button title="Go To Counter Screen" 
        onPress={() => navigation.navigate('Counter Screen')}
        />
         <Button title="Go To Colour Screen" 
        onPress={() => navigation.navigate('Colour Screen')}
        />
         <Button title="Go To Square Screen" 
        onPress={() => navigation.navigate('Square Screen')}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }
  });

  export default HomeScreen;