import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const COUNTER_INCREMENT = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case "counter_increase":
      return { ...state, counter: state.counter + action.payload };
    case "counter_decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <View>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({ type: "counter_increase", payload: COUNTER_INCREMENT })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({
            type: "counter_decrease",
            payload:  COUNTER_INCREMENT,
          })
        }
      />
      <Text>Counter: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
