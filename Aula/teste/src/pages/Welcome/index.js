import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import NetworkStatus from "../../components/NetworkStatus";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          delay={1000}
          animation="fadeInLeft"
          source={require("../../../assets/serrafylogo.png")}
          style={{
            width: 250,
            height: 250,
            borderRadius: 500,
            borderColor: "white",
            borderWidth: 4,
          }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={2000}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          O melhor App de Música da Região Serrana!
        </Text>
        <Text style={styles.text}>
          Faça o login para ter a melhor experiência musical
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
      <NetworkStatus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#151515",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#EBEBEB",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    color: "#151515",
    fontSize: 15,
  },
  button: {
    position: "absolute",
    backgroundColor: "#151515",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#004AAD",
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#EBEBEB",
    fontWeight: "bold",
  },
});
