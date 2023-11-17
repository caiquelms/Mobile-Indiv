import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ActionModal from "../../components/ActionModal";

export default function Home() {
  const [precoAlcool, setPrecoAlcool] = useState("");
  const [precoGasolina, setPrecoGasolina] = useState("");
  const [resultado, setResultado] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const calcular = () => {
    if (!precoAlcool.trim() || !precoGasolina.trim()) {
      alert("Por favor, preencha ambos os campos");
      return;
    } else if (precoAlcool && precoGasolina) {
      const resultadoCalculo =
        parseFloat(precoAlcool) / parseFloat(precoGasolina);

      if (resultadoCalculo < 0.7) {
        setResultado("Compensa usar álcool!");
      } else {
        setResultado("Compensa usar gasolina!");
      }

      setMostrarModal(true);
    }
  };

  const calcularNovamente = () => {
    setPrecoAlcool("");
    setPrecoGasolina("");
    setMostrarModal(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        scrollEnabled={true}
      >
        <View style={styles.viewImage}>
          <Image
            source={require("../../assets/gasolina1.png")}
            style={{ width: 125, height: 125 }}
          />
        </View>
        <Text style={styles.titulo}>Qual melhor opção?</Text>

        <View style={styles.main}>
          <View style={styles.inputsMain}>
            <Text style={styles.textos}>Álcool (preço por litro)</Text>
            <TextInput
              placeholder="Inserir preço do álcool"
              keyboardType="numeric"
              value={precoAlcool}
              onChangeText={(text) => setPrecoAlcool(text)}
              placeholderTextColor="#D4D7D2"
              style={styles.input}
            />
            <Text style={styles.textos}>Gasolina (preço por litro)</Text>
            <TextInput
              placeholder="Inserir preço da gasolina"
              keyboardType="numeric"
              value={precoGasolina}
              onChangeText={(text) => setPrecoGasolina(text)}
              placeholderTextColor="#D4D7D2"
              style={styles.input}
            />
          </View>

          <TouchableOpacity onPress={calcular} style={styles.botao}>
            <Text style={styles.textoBotao}>Calcular</Text>
          </TouchableOpacity>
        </View>
        <Modal visible={mostrarModal} transparent={true}>
          <ActionModal
            calcularNovamente={calcularNovamente}
            resultado={resultado}
            precoAlcool={precoAlcool}
            precoGasolina={precoGasolina}
          />
        </Modal>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#000",
    alignItems: "center",
    width: "100%",
  },
  viewImage: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    width: 200,
    height: 200,
    borderWidth: 10,
    borderRadius: 100,
    borderColor: "#FF0000",
    backgroundColor: "#fff",
  },

  titulo: {
    color: "#FF0000",
    fontSize: 28,
    marginTop: 5,
    marginBottom: 30,
    fontWeight: "bold",
  },

  main: {
    backgroundColor: "#1A1D1A",
    width: 300,
    padding: 30,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#FF0000",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  inputsMain: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
  },

  input: {
    height: 50,
    width: 250,
    borderColor: "#FF0000",
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    backgroundColor: "#000",
    color: "#fff",
  },

  textos: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#fff",
  },

  botao: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#FF0000",
    width: 170,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 20,
  },

  textoBotao: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
