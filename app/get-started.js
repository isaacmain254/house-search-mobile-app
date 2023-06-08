import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";

export default function GetStarted() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <Text style={styles.skipText} onPress={() => router.push("/login")}>
        Skip
      </Text>
      <View>
        <Image
          style={styles.houseImage}
          source={require("../assets/images/start.jpeg")}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 60,
        }}
      >
        <Text style={styles.headingText}>Get a house hassle free</Text>
        <Text style={styles.textStyle}>
          We save you time and energy of moving around in search of a house
        </Text>
        <View style={styles.continueButton}>
          <Button onPress={() => router.push("/login")}>Get Started</Button>
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

// import StartScreen from "../components/startScreen";
// import Button from "../components/button";
// import { useRouter } from "expo-router";
// import { StyleSheet, View } from "react-native";

// const URI = "../assets/images/start.jpeg";

// export default function GetStarted() {
//   const router = useRouter();
//   return (
//     <View style={styles.container}>
//       <StartScreen
//         uri={require(URI)}
//         heading="Get a house hassle free"
//         description="We save you time and energy of moving around in search of a house"
//       />
//       <Button onPress={() => router.push("/login")}>Start</Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     backgroundColor: "#fff",
//   },
//   skipText: {
//     position: "absolute",
//     top: 50,
//     right: 10,
//     fontSize: 17,
//     fontWeight: 200,
//   },
// });
