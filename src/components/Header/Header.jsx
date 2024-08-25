import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header ">
      <div className="header-container site-container">
        <NavLink to="/">
          <img src="../public/logo/logo.svg" alt="" className="logo" />
        </NavLink>
        <div className="navigation-container">
          <nav className="navigation">
            <NavLink to="/" className="menu-link">
              {t("heder.home")}
            </NavLink>
            <NavLink to="/projects" className="menu-link">
              {t("heder.projects")}
            </NavLink>
            <NavLink to="/services" className="menu-link">
              {t("heder.services")}
            </NavLink>
          </nav>
        </div>
        <div className="language-selector">
          <button className="language-button">Select Language</button>
          <div className="language-dropdown">
            <button onClick={() => i18n.changeLanguage("en")}>English</button>
            <button onClick={() => i18n.changeLanguage("de")}>German</button>
            <button onClick={() => i18n.changeLanguage("ru")}>Русский</button>
            <button onClick={() => i18n.changeLanguage("uk")}>
              Українська
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
