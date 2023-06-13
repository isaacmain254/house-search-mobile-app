import { Slot } from "expo-router";
import AuthObserverProvider from "../hooks/AuthenticationObserver";
import { useState } from "react";
import RoleProvider from "../hooks/RoleProvider";

export default function RootLayout() {
  return (
    <AuthObserverProvider>
      <RoleProvider>
        <Slot />
      </RoleProvider>
    </AuthObserverProvider>
  );
}
