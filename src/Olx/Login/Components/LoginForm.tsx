import { useEffect, useState } from "react";
import { MediaButtons } from "./SocialMediaButtons";
import "../styles/LoginForm.scss";
import { Otherwise } from "./Otherwise";
import { emailValidation, passwordValidation } from "./formValidation";

export const LoginForm = () => {
  const [type, setType] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  useEffect(() => {
    setEmailValid(emailValidation(email));
  }, [email]);
  useEffect(() => {
    setPasswordValid(passwordValidation(password));
  }, [password]);

  return (
    <div className="login-form-wrapper">
      <div className="growing-circle"></div> {/* background animation*/}
      <div className="login-form-box">
        <div className="login-form-content">
          <div className="login-form-upper">
            <span
              className={`login-form-button ${type === "login" && "selected"}`}
              onClick={() => setType("login")}
            >
              Zaloguj się
            </span>
            <span
              className={`login-form-button ${
                type === "register" && "selected"
              }`}
              onClick={() => setType("register")}
            >
              Zarejestruj się
            </span>
          </div>
          {type === "register" && (
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
                className={`${emailValid ? "valid" : "notvalid"}`} //change so there can be default class
              />
              <div className="text-above-input">Hasło</div>
              <input
                type="text"
                onChange={(e) => setPassword(e.target.value)}
                className={`${passwordValid ? "valid" : "notvalid"}`} //change so there can be default class
              />
            </div>

            <div className="forgot-password">Nie pamiętasz hasła?</div>

            <div className="login-form-bottom">
              <button
                className="login-button"
                disabled={emailValid && passwordValid ? false : true}
              >
                {type === "login" ? "Zaloguj się" : "Zarejestruj się"}
              </button>
            </div>
            <div className="login-form-footer">
              {type === "login" && (
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
