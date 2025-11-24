import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    console.log("📌 Clicou no login!");

    if (!email || !senha) {
      return Alert.alert("Erro", "Preencha e-mail e senha.");
    }

    console.log("📤 Enviando requisição para /auth/login...");

    try {
      const response = await api.post("/auth/login", {
        email: email.trim(),
        senha: senha.trim(),
      });

      console.log("📥 Resposta da API:", response.data);

      const token = response.data.token;

      if (!token) {
        console.log("❌ API não retornou token");
        return Alert.alert("Erro", "Resposta inválida da API.");
      }

      await AsyncStorage.setItem("token", token);

      Alert.alert("Sucesso", "Login realizado!");

      navigation.replace("Home"); 
    } catch (error) {
      console.log("❌ ERRO LOGIN:", error?.response?.data || error.message);
      Alert.alert("Erro", "Credenciais inválidas ou API fora do ar.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlexTime</Text>

      <Input
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Input
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <Button title="Entrar" onPress={handleLogin} />
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
