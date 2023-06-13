import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ children, onPress, theme, id }) {
  if (theme === "primary") {
    return (
      <Pressable
        onPress={onPress}
        style={[styles.Button, { backgroundColor: "#fff" }]}
      >
        <Text style={[styles.ButtonText, { color: "#1e1e1e" }]}>
          {children}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable onPress={onPress} style={styles.Button}>
      <Text style={styles.ButtonText}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Button: {
    borderWidth: 1,
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
