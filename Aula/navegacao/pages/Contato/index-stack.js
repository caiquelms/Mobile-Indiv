import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { StackActions, useNavigation } from "@react-navigation/native";

export default function Sobre() {
  const navigation = useNavigation();

  function handleHome() {
    navigation.dispatch(StackActions.popToTop);
  }

  return (
    <View style={styles.container}>
      <Text>Contato</Text>
      <Button title="Voltar Home" onPress={handleHome} />
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
