import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize.js";

const languageMap = {
  en: "English",
  de: "Deutsch",
  ru: "Русский",
  uk: "Українська",
};

const Navigation = () => {
  const { t } = useTranslation();
  return (
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
  );
};

const LanguageSelector = ({ i18n }) => {
  return (
    <div className="language-selector">
      <button className="language-button">
        {languageMap[i18n.language] || "Select Language"}
      </button>
      <div className="language-dropdown">
        {Object.keys(languageMap).map((lang) => (
          <button key={lang} onClick={() => i18n.changeLanguage(lang)}>
            {languageMap[lang]}
          </button>
        ))}
      </div>
    </div>
  );
};

const MobileMenu = ({ isMenuOpen, closeMenu, toggleMenu, i18n }) => {
  const { t } = useTranslation();
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("menu-overlay")) {
      closeMenu();
    }
  };

  return (
    <>
      <button className="burger-menu" onClick={toggleMenu}>
        ☰
      </button>
      <div
        className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={handleOutsideClick}
      >
        <nav className={`mobile-navigation ${isMenuOpen ? "open" : ""}`}>
          <button className="close-menu" onClick={closeMenu}>
            ×
          </button>
          <NavLink to="/" className="menu-link">
            {t("heder.home")}
          </NavLink>
          <NavLink to="/projects" className="menu-link">
            {t("heder.projects")}
          </NavLink>
          <NavLink to="/services" className="menu-link">
            {t("heder.services")}
          </NavLink>
          <LanguageSelector i18n={i18n} />
        </nav>
      </div>
    </>
  );
};

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { width } = useWindowSize();

  const toggleMenu = () => {
    if (width < 800) {
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (width < 800) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (width < 800) return;
    closeMenu();
  }, [location]);

  return (
    <header className="header">
      <div className="header-container site-container">
        <NavLink to="/">
          <img src="../public/logo/logo.svg" alt="" className="logo" />
        </NavLink>
        {width < 800 ? (
          <MobileMenu
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            toggleMenu={toggleMenu}
            i18n={i18n}
          />
        ) : (
          <>
            <Navigation />
            <LanguageSelector i18n={i18n} />
          </>
        )}
      </div>
    </header>
  );
};
