import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ChatScreen() {
  const [message, setMessage] = useState();
  const canSend = message !== "";
  return (
    <SafeAreaView style={styles.chatScreenContainer}>
      <View style={styles.chats}>
        <Text>chat screen</Text>
      </View>
      <View style={styles.messageInput}>
        <TextInput
          placeholder="Type meassage..."
          value={message}
          onChangeText={() => setMessage(message)}
          returnKeyType="send"
        />
        {/* pressable icon changes color depending on {canSend} */}
        <Text>Send</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chatScreenContainer: {
    flex: 1,

    borderWidth: 1,
    borderColor: "#1e90ff",
  },
  chats: {
    borderWidth: 1,
    borderColor: "#1e1e1e",
  },
  messageInput: {
    position: "absolute",
    bottom: 0,
  },
});
