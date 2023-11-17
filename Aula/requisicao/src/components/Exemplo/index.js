import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useMemo, useState, useRef } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Exemplos() {
  const [input, setInput] = useState("");
  const [nome, setNome] = useState("");
  const inputRef = useRef();

  async function gravarNome() {
    await AsyncStorage.setItem("@nome", input);
    setNome(input);
    setInput("");
  }

  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem("@nome").then((value) => {
        setNome(value);
      });
    }
    loadData();
  }, []);

  //   const letrasNomes = nome.length;
  //   console.log(letrasNomes);

  const letrasNomes = useMemo(() => {
    console.log(nome.length);
    return nome.length;
  }, [nome]);

  function chamarInput() {
    inputRef.current.focus();
    inputRef.current.clear();
    // console.log(inputRef.current.isFocused());
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(texto) => setInput(texto)}
          ref={inputRef}
        />
        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          borderColor: "red",
          borderWidth: 2,
          marginTop: 8,
          borderRadius: 10,
        }}
        onPress={chamarInput}
      >
        <Text style={{ color: "red" }}>Chamar Input</Text>
      </TouchableOpacity>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.nome}>{letrasNomes}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "#222",
    color: "#FFF",
    height: 40,
    padding: 10,
    marginLeft: 4,
    borderRadius: 25,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
});
