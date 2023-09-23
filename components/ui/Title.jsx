import { View, Text, Image } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return (
    <View className="border-2 border-white  p-[12px] px-[24px]">
      <Text className="text-2xl font-bold text-white text-center">
        {children}
      </Text>
    </View>
  );
};

export default Title;
