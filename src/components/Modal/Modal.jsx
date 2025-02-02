import { useState, useEffect,useRef} from "react";
import "./Modal.scss";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export const Modal = ({ onClose, isOpen }) => {
  const [selectedService, setSelectedService] = useState("");
  const [services, setServices] = useState([]);
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
    const [status, setStatus] = useState(""); 
  const formRef = useRef(null);
  
  useEffect(() => {
    fetch("/public/api/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

 const handleChange = (e) => {
   setFormData({ ...formData, [e.target.name]: e.target.value });
 };
  
    const sendEmail = (e) => {
      e.preventDefault();

      setStatus("Отправка...");

      emailjs
        .sendForm(
          "service_ka8i2gs",
          "template_wvqg829",
          formRef.current,
          "TMesN6CWdj2l9CbMC"
        )
        .then(
          (response) => {
            console.log("Email sent successfully!", response);
            setStatus("Сообщение отправлено!");
            setFormData({
              name: "",
              phone: "",
              email: "",
              service: "",
              message: "",
            });
            onClose();
          },
          (error) => {
            console.log("Error sending email:", error);
            setStatus("Ошибка отправки. Попробуйте позже.");
          }
        );
    };
  
const handleServiceChange = (e) => {
  setSelectedService(e.target.value);
  setFormData({ ...formData, service: e.target.value });
};


 return (
    <>
      {isOpen && <div className="modal-backdrop" onClick={onClose}></div>}
      <div className={`modal ${isOpen ? "" : "is-hidden"}`}>
        <button
          type="button"
          className="modal-btn"
          data-modal-close
          onClick={onClose}
        >
          x
        </button>
        <h3 className="modal-title">{t("modal.title")} </h3>
        <form ref={formRef} className="modal-form" onSubmit={sendEmail}>
          <div className="modal-div">
            <label htmlFor="name" className="form-label">
              {t("modal.name")}
            </label>
            <div className="imput-wrap">
              <input
                type="text"
                name="name"
                className="modal-input"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <svg className="input-icon" width="18" height="18">
                <use href="./photo/symbol-defs.svg#icon-name"></use>
              </svg>
            </div>
          </div>

          <div className="modal-div">
            <label htmlFor="phone" className="form-label">
              {t("modal.phone")}
            </label>
            <div className="imput-wrap">
              <input
                type="tel"
                name="phone"
                className="modal-input"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <svg className="input-icon" width="18" height="18">
                <use href="./photo/symbol-defs.svg#icon-email"></use>
              </svg>
            </div>
          </div>

          <div className="modal-div">
            <label htmlFor="email" className="form-label">
              {t("modal.e-mail")}
            </label>
            <div className="imput-wrap">
              <input
                type="email"
                name="email"
                className="modal-input"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <svg className="input-icon" width="18" height="18">
                <use href="./photo/symbol-defs.svg#icon-tel"></use>
              </svg>
            </div>
          </div>

          <div className="modal-div">
            <label htmlFor="service-select" className="form-label">
              {t("modal.service")}
            </label>
            <select
              id="service-select"
              className="modal-input"
              name="service"
              value={selectedService || ""}
              onChange={handleServiceChange}
              required
            >
              <option value=""> {t("modal.service")}</option>
              {services.map((service) => {
                const title = t(`servicesPage.service.${service.id}.title`);
                return (
                  <option key={service.id} value={service.title}>
                    {title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="modal-div">
            <label htmlFor="message" className="form-label">
              {t("modal.message")}
            </label>
            <textarea
              name="message"
              id="message"
              className="modal-text"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="chec">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="modal-chec visually-hidden"
              value="true"
              required
            />
            <label htmlFor="agree" id="agree-label" className="chec-text">
              {t("modal.agree")}&nbsp;
              <a href="" className="chec-link">
                {t("modal.conditions")}
              </a>
            </label>
          </div>

          <button type="submit" className="form-btn">
            {t("modal.btn")}
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </>
  );
};

//  <span className="chec-icon-wrap">
//    <svg className="chec-icon" width="11" height="8">
//      <use href="./photo/symbol-defs.svg#icon-checkmark"></use>
//    </svg>
//  </span>;

// const [isOpen, setIsOpen] = useState(false);

// const toggleModal = () => {
//   setIsOpen(!isOpen);
// };
// className={`beckdrop ${isOpen ? "" : "is-hidden"}`} data-modal
