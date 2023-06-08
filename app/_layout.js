import { useNetInfo } from "@react-native-community/netinfo";
import { Slot, Stack } from "expo-router";
import AuthObserverProvider from "../hooks/AuthenticationObserver";

export default function RootLayout() {
  return (
    <AuthObserverProvider>
      <Slot />
    </AuthObserverProvider>
  );
}
