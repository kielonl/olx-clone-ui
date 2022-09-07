import { Logo } from "./Logo";
import "../styles/Navbar.scss";
export const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-items">
        <div className="navbar-logo">
          <Logo />
        </div>
        <div className="navbar-rightside">
          <div className="navbar-messages">wiadomosci</div>
          <div className="navbar-following">obserwowane</div>
          <div className="navbar-myacc">moje konto</div>
          <button className="add-offer-button">Dodaj ogloszenie</button>
        </div>
      </div>
    </div>
  );
};
