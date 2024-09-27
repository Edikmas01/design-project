import { useState, useEffect } from "react";
import "./MyServices.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks/useWindowSize";

const truncateDescription = (description = "", maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength);
  }
  return description;
};

export const MyServices = () => {
  const [services, setServices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { t } = useTranslation();
  const { width } = useWindowSize();

  useEffect(() => {
    fetch("/public/api/services.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handlePrevClick = () => {
    {
      width > 800 && setActiveIndex(Math.max(activeIndex - 3, 0));
    }
  };

  const handleNextClick = () => {
    {
      width >
        800 >
        setActiveIndex(Math.min(activeIndex + 3, services.length - 1));
    }
  };

  if (loading) {
    return <p>Loading services...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <section className="MyServices site-container">
      <h1 className="MyServices-title">{t("myServices.title")}</h1>
      <p className="MyServices-text">{t("myServices.text")}</p>
      <div className="MyServices-cart">
        {width > 800
          ? services.slice(activeIndex, activeIndex + 3).map((service) => {
              const title = t(`servicesPage.service.${service.id}.title`);
              const description = t(
                `servicesPage.service.${service.id}.description`,
                {
                  returnObjects: true,
                }
              );
              return (
                <div key={service.id} className="service-card">
                  <Link
                    to={`/services/${service.id}`}
                    className="service-link link"
                  >
                    {service.image && service.image.length > 0 && (
                      <img src={service.image[0]} alt={title} />
                    )}
                    <h2>{title}</h2>
                    <p>
                      {truncateDescription(
                        description.join(" "),
                        Math.floor(description.join(" ").length / 2)
                      )}{" "}
                      <Link to={`/services/${service.id}`}>
                        {t("myServices.learnMore")}...
                      </Link>
                    </p>
                  </Link>
                </div>
              );
            })
          : services.map((service) => {
              const title = t(`servicesPage.service.${service.id}.title`);
              const description = t(
                `servicesPage.service.${service.id}.description`,
                {
                  returnObjects: true,
                }
              );
              return (
                <div key={service.id} className="service-card">
                  <Link
                    to={`/services/${service.id}`}
                    className="service-link link"
                  >
                    {service.image && service.image.length > 0 && (
                      <img src={service.image[0]} alt={title} />
                    )}
                    <h2>{title}</h2>
                    <p>
                      {truncateDescription(
                        description.join(" "),
                        Math.floor(description.join(" ").length / 2)
                      )}{" "}
                      <Link to={`/services/${service.id}`}>
                        {t("myServices.learnMore")}...
                      </Link>
                    </p>
                  </Link>
                </div>
              );
            })}

        {width > 800 && (
          <>
            <button
              className="slider__button slider__button--left"
              onClick={handlePrevClick}
              disabled={activeIndex === 0}
            >
              ←
            </button>
            <button
              className="slider__button slider__button--right"
              onClick={handleNextClick}
              disabled={activeIndex >= services.length - 3}
            >
              →
            </button>
          </>
        )}
      </div>
    </section>
  );
};
