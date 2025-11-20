import { View, Text, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function HistoryScreen() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/posts").then((res) => setItems(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.local || "Registro"}</Text>
            <Text style={styles.cardSubtitle}>Hora: {item.hora || "--"}</Text>
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
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    marginTop: 6,
    color: "#555",
  },
});
