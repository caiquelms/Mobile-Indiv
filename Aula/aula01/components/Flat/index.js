import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

export default function Flat() {
  const alunos = [
    { matricula: "001", nome: "Caíque" },
    { matricula: "002", nome: "Victória" },
    { matricula: "003", nome: "Sergio" },
    { matricula: "004", nome: "Adriana" },
    { matricula: "005", nome: "Jorge" },
    { matricula: "006", nome: "Jão" },
    { matricula: "007", nome: "Maria" },
    { matricula: "008", nome: "Roger" },
    { matricula: "009", nome: "Gilberto" },
    { matricula: "010", nome: "Wilson" },
  ];

  const item = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={item}
        data={alunos}
        keyExtractor={(aluno) => aluno.matricula}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  item: {
    backgroundColor: "#d9d9d9",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
