import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ChatScreen() {
  const [message, setMessage] = useState();
  const [canSend, setCanSend] = useState(false);

  useEffect(() => {
    if (message !== "") {
      setCanSend(!canSend);
    }
    return () => {
      setCanSend(!canSend);
    };
  }, []);

  return (
    <SafeAreaView style={styles.chatScreenContainer}>
      <KeyboardAwareScrollView style={styles.messagesContainer}>
        <View style={styles.chats}>
          <Text>chat screen</Text>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.messageInput}>
        <TextInput
          placeholder="Type meassage..."
          value={message}
          onChangeText={() => setMessage(message)}
          style={styles.textInput}
          multiline={true}
        />
        <View style={styles.inputIcons}>
          {canSend ? (
            <View>
              <Ionicons name="ios-images-outline" size={24} color="black" />
            </View>
          ) : (
            <View>
              <MaterialCommunityIcons name="send" size={24} color="black" />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatScreenContainer: {
    flex: 1,

    borderWidth: 3,
    borderColor: "#1e90ff",
  },
  chats: {
    borderWidth: 1,
    borderColor: "#1e1e1e",
  },
  messagesContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#696969",
    height: "100%",
  },
  messageInput: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  textInput: {
    flex: 1,
    borderColor: "#0000ff",
    borderWidth: 2,
    fontSize: 18,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  inputIcons: {
    borderColor: "#1e90ff",
    borderWidth: 2,
    flexDirection: "row",
    gap: 10,
  },
});
