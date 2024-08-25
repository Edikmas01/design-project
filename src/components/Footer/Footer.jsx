import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <div className="contact-war">
          <a href="" className="f-logo">
            <img src="../public/logo/logo.svg" alt="" className="logo" />
          </a>
          <address className="footer__address">
            <a
              href="https://goo.gl/maps/xFb1QxKYaWwcLje76"
              target="_blank"
              className="сontact__link-ader"
            >
              м. Київ, пр-т Лесі Українки, 26
            </a>
          </address>
        </div>
        <div className="contacts">
          <h3 className="contacts__title">Contacts</h3>
          <ul className="contacts__list">
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
          <h3 className="join__title">Join me</h3>
          <ul className="join-soc__list">
            <li className="join-soc__item">
              <a href="" className="join-soc__link">
                <svg className="join-soc__icon" width="20" height="20">
                  <use href="./photo/symbol-defs.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
            <li className="join-soc__item">
              <a href="" className="join-soc__link">
                <svg className="join-soc__icon" width="20" height="20">
                  <use href="./photo/symbol-defs.svg#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li className="join-soc__item">
              <a href="" className="join-soc__link">
                <svg className="join-soc__icon" width="20" height="20">
                  <use href="./photo/symbol-defs.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li className="join-soc__item">
              <a href="" className="join-soc__link">
                <svg className="join-soc__icon" width="20" height="20">
                  <use href="./photo/symbol-defs.svg#icon-linkedin"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
