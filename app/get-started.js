import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";
import { useContext } from "react";
import { RoleContext } from "../hooks/RoleProvider";

export default function GetStarted() {
  const router = useRouter();
  const { setRole } = useContext(RoleContext);

  // handleClick to navigate to login screen and setRole landlord/tenant
  const handleLoginClick = () => {
    setRole("landlord");
    router.push({ pathname: "/login", params: { role: { role } } });
  };

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
      <View>
        <Text style={styles.headingText}>
          Search or advertise houses hassle free
        </Text>
        <Text style={styles.textStyle}>
          We save you time and energy of moving around in search of a house. Are
          you a landord? We provide a platform to advertise your houses for
          free.
        </Text>
        <View style={styles.callToActionButton}>
          <View style={{ alignItems: "center" }}>
            <Button onPress={() => router.push("/login")}>
              Search for house
            </Button>
          </View>
          <View style={{ alignItems: "center" }}>
            <Button theme="primary" onPress={handleLoginClick}>
              Advertise your houses
            </Button>
          </View>
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
    paddingHorizontal: 8,
  },
  houseImage: {
    width: 200,
    height: 200,
    alignItems: "center",
    marginBottom: 18,
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
  callToActionButton: {
    marginTop: 40,
    rowGap: 30,
    marginBottom: -90,
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
