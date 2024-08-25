import "./ContactForm.scss";
import { useTranslation } from "react-i18next";



export const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-form-container ">
      <div className="site-container">
        <h1>{t("contactForm.title")}</h1>
        <p>{t("contactForm.text")}</p>
        <form action="" className="contact-form">
          <div className="form-group ">
            <label htmlFor="name">{t("contactForm.name")}*</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group-inline">
            <div className="form-group ">
              <label htmlFor="email">{t("contactForm.e-mail")}*</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group ">
              <label htmlFor="phone">{t("contactForm.phone")}*</label>
              <input
                type="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div className="form-group ">
            <label htmlFor="message">{t("contactForm.message")}*</label>
            <textarea
              id="message"
              placeholder="Enter your message "
              required
            ></textarea>
          </div>
          <button type="submit">{t("contactForm.contact")}</button>
        </form>
      </div>
    </section>
  );
};
