import "../styles/LoginForm.scss";
export const LoginForm = () => {
  return (
    <div className="login-form-wrapper">
      <div className="growing-circle"></div>
      <div className="login-form-box">
        <div className="login-form-content">
          <div className="login-form-upper">
            <span className="login-form-login-button selected">
              Zaloguj się
            </span>
            <span className="login-form-register-button">Zarejestruj się</span>
          </div>
          <div className="login-form-main">
            <div className="login-form-inputs">
              <div className="text-above-input">E-mail</div>
              <input type="text" />
              <div className="text-above-input">Hasło</div>
              <input type="text" />
            </div>
            <a className="forgot-password">Nie pamiętasz hasła?</a>
            <div className="login-form-bottom">
              <button className="login-button">Zaloguj się</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
