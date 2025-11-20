import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholder, value, onChangeText }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#777"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 15,
  },
});
