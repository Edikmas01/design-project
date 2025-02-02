import "./ContactForm.scss";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export const ContactForm = () => {
  const { t } = useTranslation();
 const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStatus("Отправка...");

    emailjs
      .sendForm(
        "service_ka8i2gs",
        "template_eb7qtu8",
        formRef.current,
        "TMesN6CWdj2l9CbMC"
      )
      .then(
        () => {
          setStatus("Сообщение отправлено!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Ошибка отправки:", error);
          setStatus("Ошибка отправки. Попробуйте позже.");
        }
      );
  };
  return (
    <section className="contact-form-container ">
      <div className="site-container">
        <h1 className="contactForm-title">{t("contactForm.title")}</h1>
        <p>{t("contactForm.text")}</p>
         <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group ">
            <label htmlFor="name">{t("contactForm.name")}*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group ">
              <label htmlFor="phone">{t("contactForm.phone")}*</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div className="form-group ">
            <label htmlFor="message">{t("contactForm.message")}*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message "
              required
            ></textarea>
          </div>
          <button type="submit" className="contactForm-btn">
            {t("contactForm.contact")}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
};
