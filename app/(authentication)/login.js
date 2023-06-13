import { Stack, useRouter } from "expo-router";
import { useContext, useState } from "react";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { RoleContext } from "../../hooks/RoleProvider";
const { height } = Dimensions.get("window");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);
  const router = useRouter();
  const role = useContext(RoleContext);

  // handle authentication with firebase signInWithEmailAndPassword
  const handleLoginPress = async () => {
    setLoading(true);

    try {
      const usercredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      const uid = usercredential.user.uid;

      if (uid !== null) {
        if (role === "landlord") {
          router.push("/houseRegister");
        } else if (role === "tenants") router.push("/search");
        console.log(role);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.loginContainer}>
        {Loading && (
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
            <Text style={styles.HeadingText}>Login</Text>
            <View>
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
              <Text
                style={{
                  textAlign: "right",
                  marginRight: 12,
                  fontWeight: 200,
                  fontSize: 15,
                }}
                onPress={() => router.push("/password-reset")}
              >
                Forgot password?
              </Text>
              <View style={styles.loginButton}>
                <Button onPress={handleLoginPress}>Login</Button>
                <Text style={styles.privacyText}>
                  By clicking the login button you accept terms fo the privacy
                  policy
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
            Don't have an account?
            <Text
              style={{ color: "#00008b", fontWeight: 600 }}
              onPress={() => router.push("/sign-up")}
            >
              Sign Up
            </Text>
          </Text>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Loading: {
    position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0,
    justifyContent: "center",
    alignItems: "center",
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
  loginButton: {
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
    // position: "absolute",
    // bottom: 25,
    fontSize: 15,
    alignSelf: "center",
    marginTop: 9,
  },
});
