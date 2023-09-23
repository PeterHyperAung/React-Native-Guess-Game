import { View, Text } from "react-native";
import React from "react";

const InstructionText = ({ children, style, className }) => {
  return (
    <Text
      className={
        "text-accent500 text-2xl font-semibold text-center " + className
      }
      style={style}
    >
      {children}
    </Text>
  );
};

export default InstructionText;
