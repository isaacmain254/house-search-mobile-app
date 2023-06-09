import { Slot } from "expo-router";
import AuthObserverProvider from "../hooks/AuthenticationObserver";

export default function RootLayout() {
  return (
    <AuthObserverProvider>
      <Slot />
    </AuthObserverProvider>
  );
}
