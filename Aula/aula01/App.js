import { Text, View } from "react-native";
import Exemplo from "./Exemplo";
import Estado from "./Estado";
import Botao from "./components/Botao";
import Saudacao from "./components/Saudacao";
import Flex from "./components/Flex";
import Header from "./components/Header";
import Scroll from "./components/Scroll";
import Flat from "./components/Flat";
import FlatExercicio from "./components/FlatExercicio";
import List from "./components/List";
import Section from "./components/Section";
import SectionTeste from "./components/SectionTeste";

export default function App() {
  return (
    // <View style={{ flex: 1, marginTop: 25 }}>
    //   <View style={{ flex: 1, backgroundColor: "#3ec09f" }}>
    //     <Text style={{ color: "#f2f2f2", textAlign: "center" }}>Não sei</Text>
    //   </View>
    //   <View style={{ flex: 1, backgroundColor: "#aa3333" }}>
    //     <Text style={{ color: "#f2f2f2", textAlign: "center" }}>Sei lá</Text>
    //   </View>
    //   <View style={{ flex: 1, backgroundColor: "blue" }}>
    //     <Text style={{ color: "#f2f2f2", textAlign: "center" }}>Eae</Text>
    //   </View>
    // </View>
    <Flat />
  );
}
