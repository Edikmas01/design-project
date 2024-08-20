import { useState, useEffect } from "react";
import "./MyServices.scss";
import { Link } from "react-router-dom";

export const MyServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <h1 className="MyServices-title"> My Services</h1>
      <p className="MyServices-text">
        We offer a wide range of interior design industry services tailored to
        your unique aesthetic and functional needs.
      </p>
      <div className="MyServices-cart">
        {services.slice(activeIndex, activeIndex + 3).map((service) => (
          <div key={service.id} className="service-card">
            <Link to={`/services/${service.id}`} className="service-link">
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
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
