import React from "react";
import { TextInput, View } from "react-native";

export default function Input() {
  return (
    <>
      <View>
        <TextInput
          placeholder={placeholder}
          underlineColorAndroid="transparent"
        />
      </View>
    </>
  );
}
