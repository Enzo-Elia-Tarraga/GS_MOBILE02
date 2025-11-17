import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";
import api from "../services/api";

export default function RegisterWorkScreen() {
  const [local, setLocal] = useState("");
  const [hora, setHora] = useState("");

  const handleSave = async () => {
    if (!local || !hora) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    try {
      await api.post("/posts", { local, hora });
      Alert.alert("Sucesso", "Registro salvo!");
      setLocal("");
      setHora("");
    } catch (error) {
      Alert.alert("Erro", "Falha ao salvar.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Registrar Jornada</Text>

      <TextInput
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Hora (ex: 08:30)"
        value={hora}
        onChangeText={setHora}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}
