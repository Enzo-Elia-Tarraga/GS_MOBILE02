import { View, Text, StyleSheet, FlatList } from "react-native";

export default function HistoryScreen() {
  const dadosExemplo = [
    { id: "1", entrada: "08:00", saida: "17:00" },
    { id: "2", entrada: "08:15", saida: "17:05" },
    { id: "3", entrada: "07:55", saida: "16:50" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Registros</Text>

      <FlatList
        data={dadosExemplo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>Entrada: {item.entrada}</Text>
            <Text style={styles.text}>Saída: {item.saida}</Text>
          </View>
        )}
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#4A90E2",
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  text: {
    fontSize: 16,
  },
});
