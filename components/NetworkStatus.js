import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const NetworkStatus = () => {
  return (
    <View style={styles.networkStatusContainer}>
      <Text style={styles.text}>
        No internet connection. Connect to the internet and try again later
      </Text>
    </View>
  );
};

export default NetworkStatus;

const styles = StyleSheet.create({
  NetworkContainer: {
    flex: 1,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#000",
    position: "absolute",
    top: 60,
  },

  networkStatusContainer: {
    position: "absolute",
    top: 60,
    height: 80,
    elevation: Platform.OS === "android" ? 99 : 0,
    zIndex: 99,
    alignSelf: "center",
    borderRadius: 6,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 600,
    padding: 5,
  },
});
