import { Link } from "react-router-dom";
import "./ServiceDescription.scss"

const getContent = (item, t) => {
  switch (true) {
    case item.includes(t("servicesPage.service.2.plen.0")):
      return (
        <Link to="/services/1" className="link">
          {" "}
          {item}
        </Link>
      );
    case item.includes(t("servicesPage.service.3.plen.0")):
      return (
        <Link to="/services/2" className="link">
          {" "}
          {item}
        </Link>
      );
    default:
      return item;
  }
};
export const ServiceDescription = ({ selectedService, width, t }) => {
    
  const title = selectedService
    ? t(`servicesPage.service.${selectedService.id}.title`)
    : "";

  const description = selectedService
    ? t(`servicesPage.service.${selectedService.id}.description`, {
        returnObjects: true,
      })
    : [];

  const plen = selectedService
    ? t(`servicesPage.service.${selectedService.id}.plen`, {
        returnObjects: true,
      })
      : [];
    
  return (
    <>

      <h1 className="description-title">
        {selectedService ? title : t("servicesPage.selectService")}
      </h1>
      <div className="description-and-price">
        {width < 900 && selectedService && (
          <div className="includes">
            <h3 className="includes-title">{t("servicesPage.includes")}</h3>
            <ul className="includes-list">
              {plen.map((item, index) => (
                <li key={index} className="includes-item">
                  {getContent(item, t)}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="description">
          {selectedService ? (
            <ul className="description-list">
              {description.map((item, index) => (
                <li key={index} className="description-item">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="description-text">{t("servicesPage.text")}</p>
          )}
          {selectedService && (
            <h3 className="price">
              {t("servicesPage.price")}: {selectedService.price}
            </h3>
          )}
        </div>
        {width > 900 && selectedService && (
          <div className="includes">
            <h3 className="includes-title">{t("servicesPage.includes")}</h3>
            <ul className="includes-list">
              {plen.map((item, index) => (
                <li key={index} className="includes-item">
                  {getContent(item, t)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};
