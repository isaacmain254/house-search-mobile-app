import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";
import { useContext } from "react";
import { AuthObserverContext } from "../hooks/AuthenticationObserver";

export default function App() {
  const router = useRouter();
  const currentUser = useContext(AuthObserverContext);
  // if (currentUser !== null) {
  //   router.push("/search");
  // }
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
          // headerRight: () => (
          //   <Text onPress={() => router.push("/login")}>Skip</Text>
          // ),
        }}
      />

      <Text style={styles.skipText} onPress={() => router.push("/login")}>
        Skip
      </Text>
      <View>
        <Image
          style={styles.houseImage}
          source={require("../assets/images/estate.jpeg")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 60,
        }}
      >
        <Text style={styles.headingText}>Find your a house in any corner</Text>
        <Text style={styles.textStyle}>
          We provide various categories and quickest way to find a house in any
          place. No agencies involved direct contact to your landlord
        </Text>
        <View style={styles.continueButton}>
          <Button onPress={() => router.push("/details")}>Continue</Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  houseImage: {
    width: 250,
    height: 250,
    alignItems: "center",
    marginBottom: 120,
  },
  headingText: {
    fontWeight: 600,
    fontSize: 26,
    marginVertical: 9,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: 300,
    color: "#1e1e1e",
  },
  skipText: {
    position: "absolute",
    top: 50,
    right: 10,
    fontSize: 17,
    fontWeight: 200,
  },
  continueButton: {
    alignItems: "center",
    marginTop: 40,
  },
});
