import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import Button from "../../components/button";
import { Entypo } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function passwordReset() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  return (
    <>
      <Stack.Screen options={{}} />
      <SafeAreaView style={styles.passwordResetContainer}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          keyboardVerticalOffset={0}
        >
          <View style={styles.closeIcon}>
            <Entypo
              name="cross"
              size={27}
              color="black"
              onPress={() => router.back()}
            />
          </View>
          <Text style={styles.headingText}>Restore Password</Text>
          <Text style={styles.textStyle}>
            Enter the email provided upon registration we will send you password
            and recovery link
          </Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="johndoe@gmail.com"
            underlineColorAndroid="transparent"
            autoFocus={true}
            inputMode="email"
            style={styles.emailInput}
          />
          <View style={styles.sendButton}>
            <Button onPress={() => router.push("/")}>Send</Button>
            <Text style={styles.privacyText}>
              By clicking the send button you accept the terms of the privacy
              policy
            </Text>
          </View>

          <Text style={styles.loginText}>
            I remember the password!
            <Text
              style={{ color: "#00008b", fontWeight: 600 }}
              onPress={() => router.push("/login")}
            >
              Login
            </Text>
          </Text>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  passwordResetContainer: {
    flex: 1,
    paddingHorizontal: 7,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    height,
  },
  closeIcon: {
    marginTop: 10,
    marginBottom: 18,
  },
  headingText: {
    fontWeight: 600,
    fontSize: 36,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 300,
    marginVertical: 9,
  },
  emailInput: {
    borderBottomWidth: 1,
    borderColor: "#111",
    marginTop: 18,
    marginBottom: 27,
    fontSize: 16,
  },
  sendButton: {
    marginTop: 27,
    alignItems: "center",
  },
  privacyText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 300,
    marginVertical: 7,
  },
  loginText: {
    position: "absolute",
    bottom: 20,
    fontSize: 15,
    alignSelf: "center",
  },
});
