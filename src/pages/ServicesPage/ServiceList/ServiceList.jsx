import { NavLink } from "react-router-dom";
import "./ServiceList.scss";

export const ServiceList = ({ services, handleServiceClick, handleOrderService, t }) => {
  return (
    <div className="service-option">
      <div className="beckgroundImg"></div>
      <div className="option">
        <h1 className="option-title">{t("servicesPage.title")}</h1>
        <ul className="option-list">
          {services.map((service) => (
            <li className="option-item" key={service.id}>
              <NavLink
                to={`/services/${service.id}`}
                className="option-item-nav"
                onClick={() => handleServiceClick(service)}
              >
                {t(`servicesPage.service.${service.id}.title`)}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="optionServis-bnt"
          onClick={() => handleOrderService()}
        >
          {t("servicesPage.btn")}
        </button>
      </div>
    </div>
  );
};
