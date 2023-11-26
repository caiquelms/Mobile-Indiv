import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";
import Message from "./components/Message";
import Animated, {
  FadeIn,
  BounceIn,
  StretchOutY,
} from "react-native-reanimated";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    // <Animated.View style={styles.container} entering={BounceIn.duration(500)}>
    <Animated.View
      style={styles.container}
      entering={FadeIn.duration(5000)}
      exiting={StretchOutY.duration(4000)}
    >
      {show && <Message />}

      <Button
        title={show ? "Fechar Mensagem" : "Exibir Mensagem"}
        onPress={() => setShow((prevState) => !prevState)}
      ></Button>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
});
