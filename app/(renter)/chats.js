import { SafeAreaView } from "react-native-safe-area-context";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { AuthObserverContext } from "../../hooks/AuthenticationObserver";

export default function Chats() {
  const [searchInput, setSearchInput] = useState();
  const currentUser = useContext(AuthObserverContext);
  console.log(currentUser);

  const router = useRouter();
  return (
    <SafeAreaView style={styles.chatContainer}>
      <TextInput
        placeholder="search ..."
        value={searchInput}
        onChangeText={(text) => setSearchInput(text)}
        underlineColorAndroid="transparent"
        returnKeyType="search"
        style={styles.searchInput}
      />
      <Pressable style={styles.chat} onPress={() => router.push("/chatScreen")}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/mainawambui.jpg")}
            style={styles.profileImage}
          />
        </View>
        <View>
          <Text>isaac</Text>
          <Text>Hey, what's new??</Text>
        </View>
      </Pressable>
      <Text>{currentUser.email}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#1e90ff",
  },
  searchInput: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    marginTop: -30,
  },
  chat: {
    flexDirection: "row",
    borderColor: "#1e1e1e",
    borderWidth: 2,
    borderBottomWidth: 1,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1e1e1e",
  },
  profileImage: {
    width: 30,
    height: 30,
  },
});
