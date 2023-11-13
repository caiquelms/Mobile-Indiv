import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { styles } from "./styles";

export default function Main() {
  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [botao, setBotao] = useState("Calcular");
  const [textinho, setTextinho] = useState("");

  const calcularIMC = () => {
    // formula do IMC - temos que fazer um parseFloat pq estamos recebendo em String
    if (peso && altura) {
      const alturaEmMetro = parseFloat(altura) / 100; //colocando a altura para metros
      const imc = parseFloat(peso) / Math.pow(alturaEmMetro, 2);

      setResultado("Seu IMC é: " + imc.toFixed(2) + " Kg/m²");
      setAltura("");
      setPeso("");
      setBotao("Novo Calculo");

      if (imc < 18.5) {
        setTextinho("Abaixo de 18,5: Magreza");
      } else if (imc < 24.9) {
        setTextinho("Entre 18,5 a 24,9: Normal");
      } else if (imc < 29.9) {
        setTextinho("Entre 25 a 29,9: Sobrepeso");
      } else if (imc > 30 && imc <= 34.9) {
        setTextinho("Entre 30 a 34,9: Obesidade grau I");
      } else if (imc > 34.9 && imc <= 39.9) {
        setTextinho("Entre 35 a 39,9: Obesidade grau II");
      } else {
        setTextinho("Acima de 40: Obesidade grau III");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.textoPrincipal}>
        <Text style={styles.text}>Preencha a altura e o peso</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        value={altura}
        onChangeText={(text) => setAltura(text)}
        placeholderTextColor="#3D3A3A"
        placeholderStyle={{ fontSize: 20, fontStyle: "italic" }}
        keyboardType="decimal-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={(text) => setPeso(text)}
        placeholderTextColor="#3D3A3A"
        placeholderStyle={{ fontSize: 20, fontStyle: "italic" }}
        keyboardType="decimal-pad"
      />
      <TouchableOpacity style={styles.addButton} onPress={calcularIMC}>
        <Text style={styles.buttonText}>{botao}</Text>
      </TouchableOpacity>
      {resultado != null && (
        <View style={styles.resultado}>
          <Text style={styles.textoresult}>{resultado}</Text>
          <Text style={styles.textoresult}>{textinho}</Text>
        </View>
      )}
    </View>
  );
}
