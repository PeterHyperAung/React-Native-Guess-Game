import { View, Image, Text, ScrollView } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ userNumber, roundsCount, onStartNewGame }) => {
  return (
    <ScrollView>
      <View className="my-8 items-center justify-center">
        <Title>Game Over</Title>
        <Image
          source={require("../assets/images/success.png")}
          className="w-[250px] h-[250px] rounded-full my-10 border-2"
          resizeMode="cover"
        />
        <View className="mb-3">
          <Text className="text-white text-lg px-20 text-center">
            Your phone needs{" "}
            <Text className="text-primary500 font-bold">{roundsCount}</Text>{" "}
            rounds to get{" "}
            <Text className="text-primary500 font-bold">{userNumber}</Text>{" "}
            number.
          </Text>
        </View>

        <View className="w-[50%]">
          <PrimaryButton onPress={onStartNewGame}>Restart</PrimaryButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;
