import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(150)).current;
  const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animated.sequence([
    //   Animated.timing(opacidadeAnimada, {
    //     toValue: 0.5,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),
    //   Animated.parallel([
    //     Animated.timing(larAnimada, {
    //       toValue: 300,
    //       duration: 3000,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(altAnimada, {
    //       toValue: 300,
    //       duration: 4000,
    //       useNativeDriver: false,
    //     }),
    //   ]),
    // ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 100,
          useNativeDriver: false,
        }),
        Animated.timing(altAnimada, {
          toValue: 150,
          duration: 100,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: larAnimada,
          height: altAnimada,
          opacity: opacidadeAnimada,
          backgroundColor: "lightblue",
          justifyContent: "center",
          borderRadius: 100,
        }}
      >
        <Text
          style={{ textAlign: "center", color: "#000", fontWeight: "bold" }}
        >
          Loading.....
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
