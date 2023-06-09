import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import MapView from "react-native-maps";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Search() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search available houses in your location"
          value={search}
          onChangeText={(text) => setSearch(text)}
          underlineColorAndroid="transparent"
          returnKeyType="search"
          style={styles.searchInput}
        />
        <View style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>
      <KeyboardAwareScrollView style={{ marginBottom: 7 }}>
        <View style={styles.houseContainer}>
          <Image
            source={require("../../assets/images/beach-house.jpg")}
            style={styles.houseImage}
          />
          <View style={styles.houseDetails}>
            <Text style={styles.description}>3 Bedroom, ksh 15,000</Text>
            <View style={styles.locationText}>
              <Text style={{ fontSize: 18, color: "#808080" }}>Uthiru</Text>
              <FontAwesome name="angle-right" size={22} color="#808080" />
            </View>
          </View>
        </View>
        <View style={styles.houseContainer}>
          <Image
            source={require("../../assets/images/beach-house.jpg")}
            style={styles.houseImage}
          />
          <View style={styles.houseDetails}>
            <Text style={styles.description}>3 Bedroom, ksh 15,000</Text>
            <View style={styles.locationText}>
              <Text style={{ fontSize: 18, color: "#808080" }}>Uthiru</Text>
              <FontAwesome name="angle-right" size={22} color="#808080" />
            </View>
          </View>
        </View>
        <View style={styles.houseContainer}>
          <Image
            source={require("../../assets/images/beach-house.jpg")}
            style={styles.houseImage}
          />
          <View style={styles.houseDetails}>
            <Text style={styles.description}>3 Bedroom, ksh 15,000</Text>
            <View style={styles.locationText}>
              <Text style={{ fontSize: 18, color: "#808080" }}>Uthiru</Text>
              <FontAwesome name="angle-right" size={22} color="#808080" />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#dcdcdc",
    // backgroundColor: "#f8f8ff",
  },
  searchContainer: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginTop: -30,
    marginBottom: 14,
    gap: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  searchIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  houseContainer: {
    width: "100%",
    // borderWidth: 2,
    // borderColor: "#1e90ff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 7,
  },
  houseImage: {
    width: "93%",
    height: 160,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  houseDetails: {
    backgroundColor: "#fff",
    width: "93%",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    paddingVertical: 4,
  },
  description: {
    color: "#808080",
    fontSize: 18,
    paddingLeft: 12,
  },

  locationText: {
    fontSize: 18,
    color: "#808080",
    paddingRight: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
