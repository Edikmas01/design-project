import "./Header.scss";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header ">
      <div className="header-container site-container">
        <NavLink to="/">
          <img src="../public/logo/logo.svg" alt="" className="logo" />
        </NavLink>
        <nav className="navigation">
          <NavLink to="/" className="menu-link">
            Home
          </NavLink>
          <NavLink to="/projects" className="menu-link">
            Projects
          </NavLink>
          <NavLink to="/services" className="menu-link">
            Services
          </NavLink>
        </nav>
        {/* <div className="login-container">
              <p className="sign-in-text">sing in</p>
              <p className="sign-in-text">sing in</p>
            </div> */}
      </div>
    </header>
  );
};
