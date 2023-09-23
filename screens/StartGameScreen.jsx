import { useState } from "react";

import { View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberInputHandler = (enteredText) => setEnteredNumber(enteredText);

  const resetInputHandler = () => setEnteredNumber("");

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    console.log(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View className="items-center mt-[50]">
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number!</InstructionText>
        <TextInput
          className="h-[50] text-[32px] border-b-2 border-b-accent500 text-accent500 font-bold mb-[20] mx-auto text-center w-[60px]"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
          defaultValue={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View className="flex-row">
          <View className="flex-1">
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View className="flex-1">
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

export default StartGameScreen;
