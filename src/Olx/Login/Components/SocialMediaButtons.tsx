// import icon from "../../assets/facebookIcon.png";
import "../styles/SocialMediaButtons.scss";
export const FacebookButton = () => {
  return (
    <button className="social-media-button">Kontynuuj przez Facebooka</button>
  );
};
export const GoogleButton = () => {
  return <button className="social-media-button">Kontynuuj przez Apple</button>;
};
export const AppleButton = () => {
  return (
    <button className="social-media-button">Kontynuuj przez Google</button>
  );
};

export const MediaButtons = () => {
  return (
    <div className="media-login-buttons">
      <FacebookButton />
      <AppleButton />
      <GoogleButton />
    </div>
  );
};
