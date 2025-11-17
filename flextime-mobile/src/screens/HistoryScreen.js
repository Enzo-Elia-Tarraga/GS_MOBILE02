import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import api from "../services/api";

export default function HistoryScreen() {
  const [items, setItems] = useState([]);

  const load = async () => {
    const response = await api.get("/posts");
    setItems(response.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>Histórico</Text>

      <FlatList
        data={items}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 12, borderWidth: 1, borderRadius: 8, marginBottom: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Registro</Text>
            <Text>Local: {item.local || "N/A"}</Text>
            <Text>Hora: {item.hora || "N/A"}</Text>
          </View>
        )}
      />
    </View>
  );
}
