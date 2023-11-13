import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const Grupo6 = () => {
  const [inserirTexto, setInserirTexto] = useState("");
  const [data, setData] = useState([]);

  const adicionarItem = () => {
    if (inserirTexto.trim() != "") {
      setData([
        ...data,
        { id: (data.length + 1).toString(), nome: inserirTexto },
      ]);
      setInserirTexto("");
    }
  };

  const item = ({ item }) => (
    <View style={styles.item}>
      <Text style={{ fontWeight: "bold" }}>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Adicione seus items</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite um item"
        value={inserirTexto}
        onChangeText={(text) => setInserirTexto(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={adicionarItem}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={item}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "lightblue",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 15,
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Grupo6;
