import { View, Text } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View className="border-4 border-accent500 p-[24px] m-[24px] rounded-lg items-center justify-center">
      <Text className="text-accent500 text-4xl font-bold">{children}</Text>
    </View>
  );
};

export default NumberContainer;
