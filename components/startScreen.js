import { Stack, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/button";

export default function StartScreen({ uri, heading, description }) {
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
      <Image style={styles.houseImage} source={uri} />
      <View style={{ borderWidth: 2, borderColor: "#111", marginBottom: -9 }}>
        <Text style={styles.headingText}>{heading}</Text>
        <Text style={styles.textStyle}>{description}</Text>
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
});

//   <View>
//         <Text style={styles.headingText}>Register your houses with us</Text>
//         <Text style={styles.textStyle}>
//           We connect you direct to you customer without your effort.Create an
//           account to get started
//         </Text>
//       </View>
