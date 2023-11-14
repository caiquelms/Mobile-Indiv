import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navegaSobre() {
    navigation.navigate("Sobre", { nome: "Caíque", email: "caique@gmail.com" });
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Ir para Sobre" onPress={navegaSobre} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
