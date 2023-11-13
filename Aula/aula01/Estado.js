import { Button, Text, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("Caíque");
  const [idade, setIdade] = useState(24);

  // const trocar = () => {
  //   setNome("marcos");
  //   setIdade(23);
  // };

  return (
    <View style={{ marginTop: 55 }}>
      <Button
        title="Alterar Nome"
        onPress={() => {
          setNome("Victoria");
          setIdade(22);
        }}
      ></Button>
      <Text>{nome}</Text>
      <Text>{idade}</Text>
    </View>
  );
}
