import { View, Text } from "react-native";
import styles from "../../styles/styles";
import React from "react";

const Card = ({ children }) => {
  return (
    <View
      className="my-[30] p-[16] mx-[24] bg-primary700 rounded-lg shadow-{4} w-[90%]"
      style={[styles.shadow]}
    >
      {children}
    </View>
  );
};

export default Card;
