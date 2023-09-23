import { View, Text, Pressable } from "react-native";
import styles from "../../styles/styles";
import React from "react";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View className="m-1 rounded-3xl overflow-hidden">
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
        // style={({ pressed }) =>
        //   pressed
        //     ? [styles.buttonInnerContainer, styles.pressed]
        //     : styles.buttonInnerContainer
        // }
        className="bg-primary500 py-[10] px-[16] active:bg-600"
        style={[styles.shadow]}
      >
        <Text className="text-center text-white">{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

// const buttonStyles = StyleSheet.create({
//   buttonInnerContainer: {
//     backgroundColor: "#640233",
//   },
// });
