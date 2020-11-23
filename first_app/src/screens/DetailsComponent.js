import React from 'react';
import {Button, Text, View} from 'react-native';

const DetailsScreen = ({ navigation }) => {
  console.log(navigation);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
    );
  };

  export default DetailsScreen;