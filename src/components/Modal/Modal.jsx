import { useState } from "react";
import "./Modal.scss";
import { services } from "../../../public/api/services";

export const Modal = ({ onClose, isOpen }) => {
  const [selectedService, setSelectedService] = useState("");

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
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
      <h3 className="modal-title">Залиште свої дані, ми вам передзвонимо</h3>
      <form className="modal-form">
        <div className="modal-div">
          <label htmlFor="user-name" className="form-label">
            Ім'я
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
            Телефон
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
            Пошта
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
            Выбрать услугу
          </label>
          <select
            id="service-select"
            className="modal-input"
            value={selectedService}
            onChange={handleServiceChange}
          >
            <option value="">Выберите услугу</option>
            {services.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-div">
          <label htmlFor="user-text" className="form-label">
            Коментар
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
            Погоджуюся з розсилкою та приймаю &nbsp;
            <a href="" className="chec-link">
              Умови договору
            </a>
          </label>
        </div>

        <button type="submit" className="form-btn">
          Відправити
        </button>
      </form>
    </div>
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
