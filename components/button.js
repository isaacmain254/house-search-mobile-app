import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.Button}>
      <Text style={styles.ButtonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Button: {
    borderWidth: 2,
    width: "95%",
    borderRadius: 5,
    backgroundColor: "#1e1e1e",
  },
  ButtonText: {
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 9,
    fontWeight: 600,
    color: "#fff",
  },
});
