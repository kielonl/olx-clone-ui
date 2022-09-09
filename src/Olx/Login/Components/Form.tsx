import "../styles/LoginForm.scss";

import { useEffect, useState } from "react";
import { MediaButtons } from "./SocialMediaButtons";
import { emailValidation, passwordValidation } from "./Validation";
import { Otherwise } from "./Otherwise";
import { FORM_CLASSES } from "../../../constants/FORM_CLASSES";
import { Bookmark } from "./Bookmark";
import { RenderSubmitButton } from "./RenderSubmitButton";
import { CredentialsInput } from "./CredentialsInput";

export const LoginForm = () => {
  const [currentBookmarkType, setBookmarkType] = useState(FORM_CLASSES.LOGIN);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    //change it so it doesnt have to re-render on every change in input
    setEmailValid(emailValidation(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(passwordValidation(password));
  }, [password]);

  return (
    <div className="login-form-wrapper">
      <div className="growing-circle"></div> {/* background animation*/}
      <div className="login-form-box">
        <div className="login-form-upper">
          <Bookmark
            bookmarkType={FORM_CLASSES.LOGIN}
            currType={currentBookmarkType}
            setType={setBookmarkType}
          />
          <Bookmark
            bookmarkType={FORM_CLASSES.REGISTER}
            currType={currentBookmarkType}
            setType={setBookmarkType}
          />
        </div>
        {currentBookmarkType === FORM_CLASSES.REGISTER && (
          <>
            <MediaButtons />
            <Otherwise />
          </>
        )}
        <div className="login-form-main">
          <div className="login-form-inputs">
            <div className="text-above-input">E-mail</div>
            <CredentialsInput
              setCredential={setEmail}
              credentialValid={emailValid}
            />
            <div className="text-above-input">Hasło</div>
            <CredentialsInput
              setCredential={setPassword}
              credentialValid={passwordValid}
            />
          </div>

          <div className="forgot-password">Nie pamiętasz hasła?</div>

          <div className="login-form-bottom">
            <RenderSubmitButton
              currentBookmarkType={currentBookmarkType}
              credentials={{ email, password }}
              isButtonDisabled={!emailValid || !passwordValid}
            />
          </div>

          <div className="login-form-footer">
            {currentBookmarkType === FORM_CLASSES.LOGIN && (
              <>
                <Otherwise />
                <MediaButtons />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
