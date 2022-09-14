import React from "react";
import { FORM_CLASSES } from "./constants/FORM_CLASSES";
export interface UserContextProps {
  children: React.ReactNode;
}
export interface Context {
  user: string;
  setUser?: (user: User) => void;
}
export interface BookmarkProps {
  bookmarkType: FORM_CLASSES;
  setType: React.Dispatch<React.SetStateAction<FORM_CLASSES>>;
  currType: FORM_CLASSES;
}
export interface CredentialsProps {
  setCredential: (value: React.SetStateAction<string>) => void;
  credentialValid: boolean;
}
export interface SubmitProps {
  currentBookmarkType: FORM_CLASSES;
  credentials: {
    email: string;
    password: string;
  };
  isButtonDisabled: boolean;
}

interface test extends SubmitProps {
  method: string;
  endpoint: string;
  buttonContent: string;
}
