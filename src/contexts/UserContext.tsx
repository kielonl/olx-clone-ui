import React, { useEffect, useState } from "react";
import * as storageManager from "../StorageManager";

export const UserContext = React.createContext("");

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(storageManager.read("user"));
  }, []);
  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      storageManager.save("user", user);
    }
  }, [user]);

  return (
    // @ts-ignore
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
