import { View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

export default function Message() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="notifications" color="red" size={50} />
      <Text style={styles.title}>Teste de Mensagem</Text>
    </View>
  );
}
