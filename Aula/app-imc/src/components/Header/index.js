import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Programa Saúde 2023</Text>
    </View>
  );
}
