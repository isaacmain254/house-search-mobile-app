import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import MapView from "react-native-maps";

export default function Search() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <SafeAreaView style={styles.Container}>
      <TextInput
        placeholder="search"
        value={search}
        onChangeText={(text) => setSearch(text)}
        underlineColorAndroid="transparent"
        returnKeyType="search"
        style={styles.searchInput}
      />
      {/* user to add location to trace them on map and display available houses */}
      {/* can be through a model */}
      <MapView style={styles.map} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#1e1e1e",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#1e1e1e",
    marginHorizontal: 12,
    fontSize: 18,
    paddingVertical: 4,
    borderRadius: 5,
    paddingHorizontal: 3,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
