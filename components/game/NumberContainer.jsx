import { View, Text } from "react-native";

// const deviceWidth = Dimensions.get("window").width;

const NumberContainer = ({ children }) => {
  return (
    <View className="border-4 border-accent500 m-[24px] py-3 rounded-lg items-center justify-center">
      <Text className="text-accent500 text-4xl font-bold">{children}</Text>
    </View>
  );
};

export default NumberContainer;
