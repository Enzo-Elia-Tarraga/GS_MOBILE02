import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <Button
        title="Registrar Jornada"
        onPress={() => navigation.navigate("Registrar")}
      />

      <Button
        title="Histórico"
        onPress={() => navigation.navigate("Histórico")}
      />

      <Button
        title="Perfil"
        onPress={() => navigation.navigate("Perfil")}
      />
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
});
