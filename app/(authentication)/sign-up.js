import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../components/button";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const { height } = Dimensions.get("window");

export default function SignUP() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Create new users using Firebase createUserWithPassword method
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const usercredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const uid = usercredential.user.uid;
      await setDoc(doc(db, "tenants", uid), {
        id: uid,
        name: userName,
        email: email,
      })
        .then(() => {
          setLoading(false);
          router.push("/search");
        })
        .catch((error) => {
          alert(error.message);
        });

      console.log(usercredential.user);
      console.log(`user id: ${uid}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView style={styles.signupContainer}>
        {loading && (
          <ActivityIndicator size="large" color="#000" style={styles.Loading} />
        )}

        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          style={styles.keyBoardContainer}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/digital-home.jpeg")}
              style={styles.homeImage}
            />
          </View>
          <View>
            <Text style={styles.HeadingText}>Sign Up</Text>
            <View>
              <TextInput
                placeholder="Enter your name"
                underlineColorAndroid="transparent"
                value={userName}
                onChangeText={(text) => setUserName(text)}
                // autoFocus={true}
                // inputMode="email"
                style={styles.textInput}
              />
              <TextInput
                placeholder="Enter email"
                underlineColorAndroid="transparent"
                value={email}
                onChangeText={(text) => setEmail(text)}
                // autoFocus={true}
                inputMode="email"
                style={styles.textInput}
              />
              <TextInput
                placeholder="Enter password"
                underlineColorAndroid="transparent"
                value={password}
                onChangeText={(pass) => setPassword(pass)}
                secureTextEntry={true}
                style={styles.textInput}
              />
              <TextInput
                placeholder="Confirm password"
                underlineColorAndroid="transparent"
                value={confirmPassword}
                onChangeText={(pass) => setConfirmPassword(pass)}
                secureTextEntry={true}
                style={styles.textInput}
              />

              <View style={styles.signupButton}>
                <Button onPress={handleSubmit}>Sign Up</Button>
                <Text style={styles.privacyText}>
                  By clicking the sign up button you accept the terms of the
                  privacy policy
                </Text>
              </View>
            </View>
            {/* <View style={{ borderWidth: 2, borderColor: "#111" }}></View> */}
            <View style={styles.socialAuthebtication}>
              <Pressable style={styles.IconContainer}>
                <Image
                  source={require("../../assets/images/google.png")}
                  style={styles.Icon}
                />
              </Pressable>
              <Pressable style={styles.IconContainer}>
                <Image
                  source={require("../../assets/images/facebook.png")}
                  style={styles.Icon}
                />
              </Pressable>
            </View>
          </View>
          <Text style={styles.signUpText}>
            Already have an account?
            <Text
              style={{ color: "#00008b", fontWeight: 600 }}
              onPress={() => router.push("/login")}
            >
              Login
            </Text>
          </Text>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    alignItems: "center",
  },
  Loading: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#00ff00",
    backgroundColor: "#ffffff",
  },
  keyBoardContainer: {
    flex: 1,
    height,
  },
  homeImage: {
    width: 200,
    height: 200,
  },
  HeadingText: {
    fontWeight: 600,
    fontSize: 36,
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: "#111",
    marginVertical: 12,
    fontSize: 16,
  },
  signupButton: {
    alignItems: "center",
    marginTop: 16,
  },
  privacyText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: 300,
    marginVertical: 7,
  },
  socialAuthebtication: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginVertical: 12,
  },
  IconContainer: {
    borderWidth: 1,
    borderColor: "#1e1e1e",
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    width: 20,
    height: 20,
  },
  signUpText: {
    fontSize: 15,
    alignSelf: "center",
    marginTop: 9,
  },
});
