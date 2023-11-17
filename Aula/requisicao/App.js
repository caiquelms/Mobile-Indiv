import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Exemplos from "./src/components/Exemplo";
import Cep from "./src/components/Cep";

export default function App() {
  return (
    <View style={styles.container}>
      <Cep />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
});
