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