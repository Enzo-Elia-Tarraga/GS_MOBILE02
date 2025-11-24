import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function RegisterWorkScreen() {
  const [entrada, setEntrada] = useState("");
  const [saida, setSaida] = useState("");

  const handleRegister = () => {
    if (!entrada || !saida) {
      return Alert.alert("Erro", "Preencha os horários.");
    }

    Alert.alert("Sucesso", "Horário registrado!");
    setEntrada("");
    setSaida("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Horário</Text>

      <Input
        placeholder="Horário de entrada"
        value={entrada}
        onChangeText={setEntrada}
      />

      <Input
        placeholder="Horário de saída"
        value={saida}
        onChangeText={setSaida}
      />

      <Button title="Salvar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f6f9",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#4A90E2",
  },
});
