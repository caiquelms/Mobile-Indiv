import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>Flex</View>
      <View style={[styles.caixa, { alignSelf: "flex-end" }]}>Flex</View>
      <View style={styles.caixa}>Flex</View>
      <View style={styles.caixa}>Flex</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  caixa: {
    width: 100,
    height: 100,
    backgroundColor: "#d9d9d9",
    margin: 10,
  },
});
