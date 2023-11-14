import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import ActionModal from "../../components/ActionModal";

export default function Sobre() {
  const [exibirModal, setExibirModal] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações</Text>
      <TouchableOpacity
        style={styles.buttton}
        onPress={() => setExibirModal(true)}
      >
        <Text style={styles.title}>Abrir</Text>
      </TouchableOpacity>
      <Modal visible={exibirModal} transparent={true}>
        <ActionModal
          handleClose={() => setExibirModal(false)}
          handleAjuda={() => alert("Clicou em Ajuda")}
          handleOutros={() => alert("Clicou em Outros")}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttton: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
