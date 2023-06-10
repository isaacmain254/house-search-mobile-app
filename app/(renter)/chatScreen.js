import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// get the screen height
let screenheight = Dimensions.get("window").height;

export default function ChatScreen() {
  const [message, setMessage] = useState();
  const [canSend, setCanSend] = useState(false);

  // useEffect(() => {
  //   if (message !== "") {
  //     setCanSend(!canSend);
  //   }
  //   return () => {
  //     setCanSend(!canSend);
  //   };
  // }, []);

  return (
    <SafeAreaView style={styles.chatScreenContainer}>
      <KeyboardAwareScrollView
        style={styles.messagesContainer}
        // contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.Message}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/mainawambui.jpg")}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.chats}>
            <Text style={styles.messageText}>
              Hello what's new! Got great deals for you!! dont't hesitate slide
              right away. Thank you
            </Text>
          </View>
        </View>
        {message !== "" ? (
          <View style={[styles.Message, { flexDirection: "row-reverse" }]}>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/mainawambui.jpg")}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.chats}>
              <Text style={styles.messageText}>
                {/* Hello what's new! Got great deals for you!! dont't hesitate
                slide right away. Thank you */}
                {message}
              </Text>
            </View>
          </View>
        ) : (
          ""
        )}
        {/* container for displaying sent images */}

        <Image
          source={require("../../assets/images/mainawambui.jpg")}
          style={styles.imageMessage}
        />
      </KeyboardAwareScrollView>

      <View style={styles.messageInput}>
        <TextInput
          placeholder="Type meassage..."
          value={message}
          onChangeText={(text) => setMessage(text)}
          style={styles.textInput}
          multiline={true}
        />
        <View style={styles.inputIcons}>
          {/* display image upload button if the text input is empty  */}
          {/* Display send message icon if the text input no empty */}
          {message !== "" ? (
            <MaterialCommunityIcons name="send" size={24} color="black" />
          ) : (
            <Ionicons name="ios-images-outline" size={24} color="black" />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

// image width and height
const Length = 45;

const styles = StyleSheet.create({
  chatScreenContainer: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
    marginTop: -30,
    overflow: "hidden",
  },
  Message: {
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    marginHorizontal: 5,
    marginVertical: 9,
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
    alignSelf: "flex-start",
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  chats: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    width: "65%",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: "#dcdcdc",
  },
  messageText: {
    paddingHorizontal: 4,
    paddingVertical: 3,
    alignSelf: "flex-start",
  },
  messageInput: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    zIndex: 99,
    marginHorizontal: 4,
    gap: 5,
    marginBottom: 9,
    elevation: Platform.OS === "android" ? 99 : 0,
  },
  textInput: {
    flex: 1,
    borderColor: "#dcdcdc",
    borderWidth: 1,
    fontSize: 18,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: "#fff",
    maxHeight: 125,
  },
  inputIcons: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    paddingHorizontal: 3,
    alignSelf: "flex-end",
  },

  // sent message
  imageMessage: {
    width: 180,
    height: 250,
    borderColor: "red",
    borderWidth: 2,
    alignSelf: "flex-end",
    marginRight: 21,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    overflow: "hidden",
  },
});
