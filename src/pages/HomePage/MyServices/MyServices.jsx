import { useState } from "react";
import { services } from "../../../../public/api/services";
import "./MyServices.scss";

export const MyServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(Math.max(activeIndex - 3, 0));
  };

  const handleNextClick = () => {
    setActiveIndex(Math.min(activeIndex + 3, services.length - 1));
  };
  return (
    <section className="MyServices site-container">
      <h1 className="MyServices-title"> My Services</h1>
      <p className="MyServices-text">
        We offer a wide range of interior design industry services tailored to
        your unique aesthetic and functional needs.
      </p>
      <div className="MyServices-cart">
        {services.slice(activeIndex, activeIndex + 3).map((service) => (
          <div key={service.id}>
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
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
