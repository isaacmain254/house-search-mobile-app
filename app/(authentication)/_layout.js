import { useNetInfo } from "@react-native-community/netinfo";
import { Slot } from "expo-router";
import React from "react";
import NetworkStatus from "../../components/NetworkStatus";

const AuthenticationLayout = () => {
  // useNetInfo is a react hoook for checking network status
  const netInfo = useNetInfo();
  // check whether the device is connected to the internet and display no internet if not
  const isConnected =
    netInfo.isConnected !== null && netInfo.isConnected === true;

  return (
    <>
      {/* show no network component when the device is no connected to the internet */}
      {!isConnected && <NetworkStatus />}
      <Slot />
    </>
  );
};

export default AuthenticationLayout;
