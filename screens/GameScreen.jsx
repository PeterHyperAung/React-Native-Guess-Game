import { View, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect, useMemo } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import LogItem from "../components/game/LogItem";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const intialGuess = useMemo(
    () => generateRandomBetween(1, 100, userNumber),
    [userNumber]
  );
  const [currentGuess, setCurrentGuess] = useState(intialGuess);
  const [rounds, setRounds] = useState([]);
  console.log(rounds);

  console.log(currentGuess, userNumber);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(rounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower" && currentGuess > userNumber) {
      maxBoundary = currentGuess;
      setCurrentGuess(
        generateRandomBetween(minBoundary, maxBoundary, currentGuess)
      );
    } else {
      minBoundary = currentGuess + 1;
      setCurrentGuess(
        generateRandomBetween(minBoundary, maxBoundary, currentGuess)
      );
    }
    setRounds((prevRounds) => [currentGuess, ...prevRounds]);
  }

  return (
    <View className="flex-1 p-[12px]">
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* GUESS */}
      <View className="mb-5">
        <InstructionText className="my-5">Higher or Lower?</InstructionText>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
        </View>
      </View>
      <FlatList
        data={rounds}
        renderItem={({ item, index }) => {
          return (
            <LogItem index={index} total={rounds.length}>
              {item}
            </LogItem>
          );
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default GameScreen;
