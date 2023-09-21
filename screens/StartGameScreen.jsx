import { View, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import styles from "../styles/styles";

function StartGameScreen() {
  return (
    <View
      className="mt-[100] p-[16] mx-[24] bg-[#72063c] rounded-lg shadow-{4}"
      style={[styles.shadow]}
    >
      <TextInput
        className="h-[50] text-[32px] border-b-2 border-b-[#ddb52f] color-[#ddb52f] font-bold my-[10] mb-[20] mx-auto text-center w-[60px]"
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
      />
      <View className="flex-row">
        <View className="flex-1">
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View className="flex-1">
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;
