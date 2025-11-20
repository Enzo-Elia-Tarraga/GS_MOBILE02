import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../services/api";

export default function RegisterWorkScreen() {
  const [local, setLocal] = useState("");
  const [hora, setHora] = useState("");

  const handleSave = async () => {
    if (!local || !hora) return alert("Preencha todos os campos.");

    await api.post("/posts", { local, hora });
    alert("Registro salvo!");
    setLocal("");
    setHora("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Jornada</Text>

      <Input placeholder="Local" value={local} onChangeText={setLocal} />
      <Input placeholder="Hora (Ex: 08:30)" value={hora} onChangeText={setHora} />

      <Button title="Salvar" onPress={handleSave} />
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
    marginBottom: 20,
  },
});
