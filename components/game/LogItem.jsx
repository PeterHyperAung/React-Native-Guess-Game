import { View, Text } from "react-native";
import React from "react";

const LogItem = ({ index, children, total }) => (
  <View className="border-2 border-primary700 bg-accent500 w-[100%] rounded-full p-[10] px-[15] flex-row justify-between my-5">
    <Text className="text-white text-lg">#{total - index}</Text>
    <Text className="text-white text-lg">{children}</Text>
  </View>
);

export default LogItem;
