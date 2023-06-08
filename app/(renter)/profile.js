import { useContext, useEffect, useRef, useState } from "react";

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firebaseConfig";
import { AuthObserverContext } from "../../hooks/AuthenticationObserver";
import { ref, uploadBytes, uploadString } from "firebase/storage";

// default image
const placeholderImage = require("../../assets/images/mainawambui.jpg");

export default function Profile() {
  const currentUser = useContext(AuthObserverContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const refEmailInput = useRef(null);
  const refNameInput = useRef(null);
  const router = useRouter();

  // "tenants" collection with 'iud' as the document  ID
  const currentUserRef = doc(db, "tenants", currentUser.uid);

  // focus name input on both edit button and textInput press
  const handleNameIconPress = () => {
    refNameInput.current.focus();
    setIsNameFocused(true);
  };

  const handleNameInputBlur = () => {
    setIsNameFocused(false);
  };

  const handleNameInputFocus = () => {
    setIsNameFocused(true);
  };

  // focus email input on both edit button press and textInput click
  const handleEmailIconPress = () => {
    refEmailInput.current.focus();
    setIsEmailFocused(true);
  };

  function handleEmailInputBlur() {
    setIsEmailFocused(false);
  }

  function handleEmailInputFocus() {
    setIsEmailFocused(true);
  }

  // functiom to dispaly system UI for picking image from device media library
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
      // .then(() => {
      //   console.log("image upload succcess");
      // })
      // .catch((error) => {
      //   console.log("An error occurred");
      // });
    } else {
      alert("You did not select an Image");
    }
  };

  // upload image to firbase firestore
  const uploadImage = async ({ uri }) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    //refernce to firebase storage bucket
    var storageRef = ref(storage);
    // upload the blob to firebase storage bucket
    const uploadTask = await storageRef.child("images").put(blob);
    uploadTask.on(
      "state_changed",
      () => {
        console.log("upload is running");
      },
      (error) => {
        console.log(error.code);
      },
      () => {
        console.log("image upload success!");
      }
    );
  };

  //change profile image to the selected one
  const imageSource =
    selectedImage !== null ? { uri: selectedImage } : placeholderImage;

  return (
    <SafeAreaView style={styles.profileContainer}>
      <View style={styles.profile}>
        <View style={styles.profileImage}>
          <Image source={imageSource} style={styles.image} />
        </View>
        <Pressable>
          <FontAwesome5
            name="camera"
            size={22}
            color="black"
            style={styles.cameraIcon}
            onPress={pickImageAsync}
          />
        </Pressable>
      </View>

      {/* personal details edit */}
      {/* edit current username */}
      <View style={styles.detailsContainer}>
        <Text style={styles.subTitle}>Name</Text>
        <View style={styles.editInput}>
          <TextInput
            placeholder="isaac"
            value={name}
            onChangeText={(text) => setName(text)}
            autoComplete="name"
            returnKeyType="go"
            style={styles.Input}
            ref={refNameInput}
            onBlur={handleNameInputBlur}
            onFocus={handleNameInputFocus}
          />
          {isNameFocused ? (
            <Ionicons
              name="md-checkmark-done-sharp"
              size={24}
              color="black"
              onPress={async () => {
                await updateDoc(currentUserRef, { name: name });
                setIsNameFocused(false);
              }}
            />
          ) : (
            <MaterialIcons
              name="edit"
              size={24}
              color="black"
              style={styles.materialIcon}
              onPress={handleNameIconPress}
            />
          )}
        </View>
      </View>

      {/* Edit current email address */}
      <View style={styles.detailsContainer}>
        <Text style={styles.subTitle}>Email</Text>
        <View style={styles.editInput}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoComplete="email"
            inputMode="email"
            returnKeyType="go"
            style={styles.Input}
            ref={refEmailInput}
            onBlur={handleEmailInputBlur}
            onFocus={handleEmailInputFocus}
          />
          {isEmailFocused ? (
            <Ionicons
              name="md-checkmark-done-sharp"
              size={24}
              color="black"
              onPress={async () => {
                await updateDoc(currentUserRef, { email: email });
                setIsEmailFocused(false);
              }}
            />
          ) : (
            <MaterialIcons
              name="edit"
              size={24}
              color="black"
              style={styles.materialIcon}
              onPress={handleEmailIconPress}
            />
          )}
        </View>
      </View>

      {/* change your location */}
      <Pressable style={styles.pressableContainer}>
        <View style={styles.text}>
          <Ionicons name="locate-outline" size={24} color="black" />
          <Text style={{ fontSize: 15 }}>location</Text>
        </View>
        <View style={styles.text}>
          <Text style={{ paddingRight: 5, fontSize: 15 }}>Regen, Nairobi</Text>
          <FontAwesome name="angle-right" size={22} color="black" />
        </View>
      </Pressable>

      {/* change current  password */}
      <Pressable
        style={styles.pressableContainer}
        onPress={() => router.push("/changePassword")}
      >
        <View style={styles.text}>
          <AntDesign name="lock" size={24} color="black" />
          <Text style={{ fontSize: 15 }}>password</Text>
        </View>
        <View style={styles.text}>
          <FontAwesome name="angle-right" size={22} color="black" />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}

const length = 100;
const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#1e90ff",
  },
  profile: {
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: length / 2,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "center",
    objectFit: "fill",
  },
  cameraIcon: {
    marginLeft: 38,
    marginTop: -16,
  },

  // edit current  email and name
  detailsContainer: {
    marginHorizontal: 9,
    marginVertical: 6,
  },
  editInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    overflow: "hidden",
  },
  subTitle: {
    fontWeight: 300,
    fontSize: 14,
    marginBottom: 3,
  },
  Input: {
    flex: 1,
    fontSize: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
  materialIcon: {
    borderWidth: 1,
    borderColor: "#1e90ff",
  },
  // change location and passowrd style
  pressableContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 9,
    marginTop: 18,
    paddingVertical: 6,
    paddingHorizontal: 3,
    borderRadius: 6,
    backgroundColor: "#fffafa",
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
  },
});
