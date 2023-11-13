import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function List() {
  const [feed, setFeed] = useState([
    { _id_: 1, nome: "Caíque", idade: 24, email: "caique@gmail.com" },
    { _id_: 2, nome: "Victória", idade: 22, email: "victoria@gmail.com" },
    { _id_: 3, nome: "Jorge", idade: 27, email: "jorge@gmail.com" },
    { _id_: 4, nome: "Roger", idade: 25, email: "roger@gmail.com" },
    { _id_: 5, nome: "Wilso", idade: 37, email: "wilso@gmail.com" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id_}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
    </View>
  );
}

function Pessoa(props) {
  return (
    <View style={styles.pessoa}>
      <Text style={styles.texto}>{props.data.nome}</Text>
      <Text style={styles.texto}>{props.data.idade}</Text>
      <Text style={styles.texto}>{props.data.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  pessoa: {
    backgroundColor: "#272220",
    height: 200,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "#fff",
  },
});
