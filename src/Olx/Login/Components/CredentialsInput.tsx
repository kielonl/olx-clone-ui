import { FORM_CLASSES } from "../../../constants/FORM_CLASSES";

interface Props {
  setCredential: (value: React.SetStateAction<string>) => void;
  credentialValid: boolean;
}

export const CredentialsInput: React.FC<Props> = ({
  setCredential,
  credentialValid,
}) => {
  return (
    <input
      type="text"
      onChange={(e) => setCredential(e.target.value)}
      //   onBlur={() => setEmailValid(emailValidation(credential))} // calls only when finished typing
      className={`${
        credentialValid ? FORM_CLASSES.VALID : FORM_CLASSES.NOT_VALID
      }`} //change so there can be default class
    />
  );
};
