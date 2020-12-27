import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { set } from "react-native-reanimated";

const TextScreen = () => {
    const [password,setPassword] = useState('');
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={password}
        onChangeText={(value)=> {
            setPassword(value);
        }}
      />
      { password.length < 4 ? <Text>Password must be at least 4 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;
