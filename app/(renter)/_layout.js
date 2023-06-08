import { Stack, Tabs, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNetInfo } from "@react-native-community/netinfo";
import NetworkStatus from "../../components/NetworkStatus";

export default function Renter() {
  const netInfo = useNetInfo();
  const router = useRouter();

  // check whether the device is connected to the internet and display no internet if not
  const isConnected =
    netInfo.isConnected !== null && netInfo.isConnected === true;

  return (
    <>
      {!isConnected && <NetworkStatus />}
      <Tabs
        backBehavior="history"
        screenOptions={{ tabBarHideOnKeyboard: true }}
      >
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: () => (
              <FontAwesome name="search" size={24} color="black" />
            ),
            tabBarHideOnKeyboard: true,
          }}
        />
        <Tabs.Screen
          name="chats"
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="chat" size={24} color="black" />
            ),
            tabBarBadge: 3,
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="md-person-circle-outline"
                size={24}
                color="black"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="chatScreen"
          options={{
            href: null,
            headerLeft: () => (
              <FontAwesome
                name="angle-left"
                size={24}
                color="black"
                onPress={() => router.push("/chats")}
              />
            ),
            headerTitleAlign: "center",
          }}
        />
        <Tabs.Screen name="changePassword" options={{ href: null }} />
      </Tabs>
    </>
  );
}
