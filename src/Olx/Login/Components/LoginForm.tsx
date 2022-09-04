import { useState } from "react";
import { MediaButtons } from "../../../components/SocialMediaButtons";
import "../styles/LoginForm.scss";
import { Otherwise } from "./Otherwise";

export const LoginForm = () => {
  const [type, setType] = useState("login");
  return (
    <div className="login-form-wrapper">
      <div className="growing-circle"></div> {/* background animation*/}
      <div className="login-form-box">
        <div className="login-form-content">
          <div className="login-form-upper">
            <span
              className={
                type === "login"
                  ? "login-form-login-button selected"
                  : "login-form-login-button"
              }
              onClick={() => setType("login")}
            >
              Zaloguj się
            </span>
            <span
              className={
                type === "register"
                  ? "login-form-register-button selected"
                  : "login-form-register-button"
              }
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
              <input type="text" />
              <div className="text-above-input">Hasło</div>
              <input type="text" />
            </div>

            <div className="forgot-password">Nie pamiętasz hasła?</div>

            <div className="login-form-bottom">
              <button className="login-button">
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
