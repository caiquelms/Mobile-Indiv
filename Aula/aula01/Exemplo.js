import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("Marcos");
  const [idade, setIdade] = useState(23);

  return (
    <View style={styles.container}>
      <Text style={{ color: "blue", fontSize: 30 }}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 6,
    borderStyle: "solid",
    borderRadius: 30,
    width: 360,
    height: 200,
  },
});
