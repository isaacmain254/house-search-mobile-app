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
import AntDesign from "@expo/vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Chats() {
  const [searchInput, setSearchInput] = useState();
  const currentUser = useContext(AuthObserverContext);
  console.log(currentUser);

  const router = useRouter();
  return (
    <SafeAreaView style={styles.chatContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search available houses in your location"
          value={searchInput}
          onChangeText={(text) => setSearchInput(text)}
          underlineColorAndroid="transparent"
          returnKeyType="search"
          style={styles.searchInput}
        />
        <View style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>
      <KeyboardAwareScrollView>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message} numberOfLines={1}>
                Hey, what's new?? we have cool offer for you, don't hesitate
                hurry up
              </Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>10:50 pm</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>10:50 pm</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>10:50 pm</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>10:50 pm</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>10:50 pm</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>10:50 pm</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>2:00 Am</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>10:50 pm</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>friday</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new??</Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>10:50 pm</Text>
            </View>
          </View>
        </Pressable>
        <Pressable
          style={styles.messageContainer}
          onPress={() => router.push("/chatScreen")}
        >
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.messageDetails}>
            <View>
              <Text style={{ fontWeight: 600, fontSize: 15 }}>isaac</Text>
              <Text style={styles.message}>Hey, what's new?? </Text>
            </View>
            <View>
              <Text style={styles.lastSeen}>last week</Text>
            </View>
          </View>
        </Pressable>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#1e90ff",
    // backgroundColor: "#dcdcdc",
  },
  searchContainer: {
    flexDirection: "row",
    marginHorizontal: 9,
    marginTop: -34,
    marginBottom: 14,
    gap: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    // paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  searchIcon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
  },
  messageContainer: {
    flexDirection: "row",
    borderColor: "#d3d3d3",
    borderBottomWidth: 1,
    marginHorizontal: 7,
    paddingBottom: 5,
    marginBottom: 9,
  },
  imageContainer: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#696969",
    overflow: "hidden",
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  messageDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,

    // borderWidth: 1,
    // borderColor: "#1e90ff",
  },
  message: {
    color: "#696969",
    fontSize: 13,
    paddingVertical: 5,
  },
  lastSeen: {
    fontWeight: 500,
    color: "#696969",
    fontSize: 11,
    paddingTop: 3,
  },
});
