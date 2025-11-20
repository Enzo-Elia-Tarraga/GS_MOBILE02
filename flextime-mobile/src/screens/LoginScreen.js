import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlexTime</Text>

      <Input
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Entrar" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f6f9",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#4A90E2",
  },
});
