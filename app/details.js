import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";

export default function Details() {
  const router = useRouter();
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
          source={require("../assets/images/semi-flat-illustration.png")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 60,
        }}
      >
        <Text style={styles.headingText}>
          {/* Rent out your houses and earn money */}
          Post an advertisement
        </Text>
        <Text style={styles.textStyle}>
          We connect you directly to you customer without your effort.Create an
          account to get started
        </Text>
        <View style={styles.continueButton}>
          <Button onPress={() => router.push("/get-started")}>Continue</Button>
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
