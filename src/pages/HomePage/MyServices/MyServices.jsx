import { useState, useEffect } from "react";
import "./MyServices.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const truncateDescription = (description = '', maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength);
  }
  return description;
};


export const MyServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const { t } = useTranslation();



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


  // const maxLength = services.description
  //   ? Math.floor(services.description.length / 2)
  //   : 0;

  const handlePrevClick = () => {
    setActiveIndex(Math.max(activeIndex - 3, 0));
  };

  const handleNextClick = () => {
    setActiveIndex(Math.min(activeIndex + 3, services.length - 1));
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
        {services.slice(activeIndex, activeIndex + 3).map((service) => (
          <div key={service.id} className="service-card">
            <Link to={`/services/${service.id}`} className="service-link link">
              {service.image.length > 0 && (
                <img src={service.image[0]} alt={service.title} />
              )}
              <h2>{service.title}</h2>

              <p>
                {truncateDescription(
                  service.description,
                  Math.floor(service.description.length / 2)
                )}{" "}
                <Link to={`/services/${service.id}`}>
                  {t("myServices.learnMore")}...
                </Link>
              </p>
            </Link>
          </div>
        ))}
        <button
          className="slider__button slider__button--left"
          onClick={handlePrevClick}
        >
          ←{" "}
        </button>
        <button
          className="slider__button slider__button--right"
          onClick={handleNextClick}
        >
          {" "}
          →
        </button>
      </div>
    </section>
  );
};
