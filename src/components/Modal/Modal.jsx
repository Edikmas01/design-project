import { useState, useEffect } from "react";
import "./Modal.scss";
import { useTranslation } from "react-i18next";

export const Modal = ({ onClose, isOpen }) => {
  const [selectedService, setSelectedService] = useState("");
  const [services, setServices] = useState([]);
  const { t } = useTranslation();


 useEffect(() => {
   fetch("/public/api/services.json")
     .then((res) => res.json())
     .then((data) => setServices(data))
     .catch((error) => console.error("Error fetching projects:", error));
 }, []);
  
  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
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
          {/* <svg className="beckdrop-icon" width="11" height="11">
          <use href="./photo/symbol-defs.svg#icon-exit"></use>
        </svg> */}
          x
        </button>
        <h3 className="modal-title">{t("modal.title")} </h3>
        <form className="modal-form">
          <div className="modal-div">
            <label htmlFor="user-name" className="form-label">
              {t("modal.name")}
            </label>
            <div className="imput-wrap">
              <input
                type="text"
                name="user-name"
                className="modal-input"
                id="user-name"
              />
              <svg className="input-icon" width="18" height="18">
                <use href="./photo/symbol-defs.svg#icon-name"></use>
              </svg>
            </div>
          </div>
          <div className="modal-div">
            <label htmlFor="user-tel" className="form-label">
              {t("modal.phone")}
            </label>
            <div className="imput-wrap">
              <input
                type="tel"
                name="user-tel"
                className="modal-input"
                id="user-tel"
              />
              <svg className="input-icon" width="18" height="18">
                <use href="./photo/symbol-defs.svg#icon-email"></use>
              </svg>
            </div>
          </div>
          <div className="modal-div">
            <label htmlFor="user-email" className="form-label">
              {t("modal.e-mail")}
            </label>
            <div className="imput-wrap">
              <input
                type="email"
                name="user-email"
                className="modal-input"
                id="user-email"
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
              value={selectedService}
              onChange={handleServiceChange}
            >
              <option value=""> {t("modal.service")}</option>
              {services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>
          <div className="modal-div">
            <label htmlFor="user-text" className="form-label">
              {t("modal.message")}
            </label>
            <textarea
              name="user-text"
              id="user-text"
              placeholder="Введіть текст"
              className="modal-text"
            ></textarea>
          </div>

          <div className="chec">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              className="modal-chec visually-hidden"
              value="true"
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
