import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.navbar}>Voltar</Text>
        <Text style={styles.navbar}>Home</Text>
        <Text style={styles.navbar}>Detalhes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  header: {
    width: 100,
    height: 100,
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
  },
  navbar: {
    flex: 1,
    fontStyle: "italic",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 30,
  },
});
