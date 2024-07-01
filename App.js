import { useCallback, useRef, useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const roundsCount = useRef();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    roundsCount.current = { count: 0 };
  }, []);

  const prepare = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(totalRounds) {
    setGameIsOver(true);
    roundsCount.current.count = totalRounds;
  }

  function startNewGameHandler() {
    setUserNumber("");
    roundsCount.current.count = 0;
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsCount={roundsCount.current.count}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#4e0329", "#ddb52f"]}
      className="flex-1"
      onLayout={prepare}
    >
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        resizeMode="cover"
        className="flex-1"
        imageStyle={{ opacity: 0.15 }}
      >
        <SafeAreaView className="flex-1">{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

// expo install for to install fitting version for our current project
