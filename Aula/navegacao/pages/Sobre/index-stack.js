import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Sobre({ route }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
      <Text>{route.params?.nome}</Text>
      <Text>{route.params?.email}</Text>
      <Button
        title="Ir para Contato"
        onPress={() => navigation.navigate("Contato")}
      />
      <Text> Exemplo Retorno</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
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
