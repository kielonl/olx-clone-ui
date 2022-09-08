import React, { useEffect, useState } from "react";
import { isObjectEmpty } from "../helpers/helpers";
import * as storageManager from "../StorageManager";
interface Props {
  children: React.ReactNode;
}

interface User {
  email: string;
  password: string;
}
interface Context {
  user: string;
  setUser?: (user: User) => void;
}

const defaultState = {
  user: "",
};

export const UserContext = React.createContext<Context>(defaultState);

export const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    setUser(storageManager.read("user"));
  }, []);
  useEffect(() => {
    if (isObjectEmpty(user)) {
      storageManager.save("user", user);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
