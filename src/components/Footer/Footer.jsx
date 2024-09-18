import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box ">
        <a href="" className="f-logo">
          <img src="../public/logo/logo.svg" alt="" className="logo" />
        </a>
        <div className="contacts">
          {/* <h3 className="contacts__title">Contacts</h3> */}
          <ul className="contacts-list">
            <li className="contacts__item">
              <a href="emailto:info@devstudio.com" className="contacts__link">
                info@devstudio.com
              </a>
            </li>
            <li className="contacts__item">
              <a href="tel:+380961111111" className="contacts__link">
                +38 096 111 11 11
              </a>
            </li>
          </ul>
        </div>
        <div className="join">
          {/* <h3 className="join__title">Join me</h3> */}
          <ul className="join-soc__list">
            <li className="join-soc__item">
              <Link
                to={"https://www.instagram.com/n.prkpvch?igsh=cTc2NDk3ZHRyaWJt"}
                className="join-soc__link"
              >
                <img
                  src="/public/photo/svg/insta.svg"
                  alt="Instagram"
                  className="join-soc__icon"
                  width="20"
                  height="20"
                />
              </Link>
            </li>
            <li className="join-soc__item">
              <Link
                to={"https://t.me/nastyaprokopovych"}
                className="join-soc__link"
              >
                <img
                  src="/public/photo/svg/telegram_icon.svg"
                  alt="Instagram"
                  className="join-soc__icon"
                  width="20"
                  height="20"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
