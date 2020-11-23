import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      <Text>Image Detail - {title}</Text>
      <Image source={imageSource} />
      <Text>Score: {score}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageDetail;
