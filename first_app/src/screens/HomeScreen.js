import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.view}>
        <Text>Home Screen</Text>
        <Button 
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Lists"
          onPress={() => navigation.navigate('List')}
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