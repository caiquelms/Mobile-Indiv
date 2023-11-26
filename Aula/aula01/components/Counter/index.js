import { View, Text, Button } from "react-native";

const Counter = () => {
  let count = 0;
  function atualiza() {
    count += 1;
    console.log({ count });
  }

  return (
    <View>
      <Text>Contador: {count}</Text>
      <Button onPress={atualiza}>+</Button>
    </View>
  );
};

export default Counter;
