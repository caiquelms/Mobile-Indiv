import { View, Text, StyleSheet, SectionList } from "react-native";
import React from "react";

const data = [
  {
    title: "Frutas",
    data: ["Maça", "Banana", "Laranja"],
  },
  {
    title: "Legumes",
    data: ["Cenoura", "Beterraba", "Rabanete"],
  },
  {
    title: "Carne",
    data: ["Frango", "Peixe", "Carne bovina", "Carne suina"],
  },
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={{ fontWeight: "500" }}>{item}</Text>
  </View>
);

const renderSectionHeader = ({ section: { title } }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

export default function Section() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  sectionHeader: {
    backgroundColor: "#567FEF",
    padding: 10,
  },
  itemTitle: {
    padding: 10,
    fontSize: 18,
    height: 46,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 46,
    fontWeight: "bold",
    backgroundColor: "lightblue",
  },
});
