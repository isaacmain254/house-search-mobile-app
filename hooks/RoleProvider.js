import React, { Children, createContext, useEffect, useState } from "react";
export const RoleContext = createContext("tenant");

const RoleProvider = ({ children }) => {
  // set role to navigate to either search if user is searching for house or
  // navigate to register house screen if user is a landlord
  const [role, setRole] = useState("tenant");
  useEffect(() => {
    setRole(role);
  });
  return <RoleContext.Provider value={role}>{children}</RoleContext.Provider>;
};

export default RoleProvider;
