import React, { useState } from "react";
import { KeyboardAvoidingView, TextInput, View } from "react-native";
import Button from "../../components/button";

export default function changePassword() {
  const [currentpassword, setCurrentPassword] = useState("maina");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <KeyboardAvoidingView>
      <View>
        <TextInput
          placeholder="current password"
          underlineColorAndroid="transparent"
          value={currentpassword}
          onChangeText={(current) => setCurrentPassword(current)}
          secureTextEntry={true}
          returnKeyType="next"
        />
      </View>
      <View>
        <TextInput
          placeholder="new password"
          underlineColorAndroid={"transparent"}
          value={newPassword}
          onChangeText={(pass) => setNewPassword(pass)}
          secureTextEntry={true}
          returnKeyType="next"
        />
      </View>
      <View>
        <TextInput
          placeholder="Confirm password"
          underlineColorAndroid={"transparent"}
          value={confirmPassword}
          onChangeText={(confirm) => setConfirmPassword(confirm)}
          secureTextEntry={true}
          returnKeyType="done"
        />
      </View>
      <View>
        <Button onPress={() => alert("password update")}>Save</Button>
      </View>
    </KeyboardAvoidingView>
  );
}
