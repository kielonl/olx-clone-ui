import {
  EMAIL_VALID,
  INCLUDES_NUMBER,
} from "../../../constants/REGEX_PATTERNS";

export const emailValidation = (email: string) => {
  if (!EMAIL_VALID.test(email)) return false;
  return true;
};
export const passwordValidation = (password: string) => {
  if (password.length < 3 || password.length > 12) {
    return false;
  }
  if (password === password.toLowerCase()) {
    return false;
  }
  if (!INCLUDES_NUMBER.test(password)) {
    return false;
  }
  return true;
};
