import { useState } from "react";
import { MediaButtons } from "./SocialMediaButtons";
import { Otherwise } from "./Otherwise";
import { emailValidation, passwordValidation } from "./formValidation";
import { LoginButton } from "./LoginButton";
import "../styles/LoginForm.scss";
import { HTTP_METHODS } from "../../../constants/HTTP_METHODS";
import { ENDPOINTS } from "../../../constants/ENDPOINTS";

export const LoginForm = () => {
  const [type, setType] = useState("Zaloguj się");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  return (
    <div className="login-form-wrapper">
      <div className="growing-circle"></div> {/* background animation*/}
      <div className="login-form-box">
        <div className="login-form-content">
          <div className="login-form-upper">
            <span
              className={`login-form-button ${
                type === "Zaloguj się" && "selected"
              }`}
              onClick={() => setType("Zaloguj się")}
            >
              Zaloguj się
            </span>
            <span
              className={`login-form-button ${
                type === "Zarejestruj się" && "selected"
              }`}
              onClick={() => setType("Zarejestruj się")}
            >
              Zarejestruj się
            </span>
          </div>
          {type === "Zarejestruj się" && (
            <>
              <MediaButtons />
              <Otherwise />
            </>
          )}

          <div className="login-form-main">
            <div className="login-form-inputs">
              <div className="text-above-input">E-mail</div>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setEmailValid(emailValidation(email))} // calls only when finished typing
                className={`${emailValid ? "valid" : "notvalid"}`} //change so there can be default class
              />
              <div className="text-above-input">Hasło</div>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setPasswordValid(passwordValidation(password))}
                className={`${passwordValid ? "valid" : "notvalid"}`} //change so there can be default class
              />
            </div>

            <div className="forgot-password">Nie pamiętasz hasła?</div>

            <div className="login-form-bottom">
              {type === "Zaloguj się" ? (
                <LoginButton //logging
                  buttonContent={type}
                  disabled={!(emailValid && passwordValid)}
                  data={{ email, password }}
                  method={HTTP_METHODS.POST}
                  endpoint={ENDPOINTS.LOGIN}
                />
              ) : (
                <LoginButton //register
                  buttonContent={type}
                  disabled={!(emailValid && passwordValid)}
                  data={{ email, password }}
                  method={HTTP_METHODS.POST}
                  endpoint={ENDPOINTS.REGISTER}
                />
              )}
            </div>

            <div className="login-form-footer">
              {type === "Zaloguj się" && (
                <>
                  <Otherwise />
                  <MediaButtons />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
