import { useState, useEffect } from "react";
import "./ServicesPage.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ProjectCartSlider } from "../../components/ProjectCartSlider/ProjectCartSlider";

const getContent = (item) => {
  switch (true) {
    case item.includes("Включает в себя чертежи из 'Проекта пересланировани'"):
      return <Link to="/services/1"> {item}</Link>;
    case item.includes(
      "Включает в себя все чертежи из 'Проекта пересланировани' и 'Технический проект'"
    ):
      return <Link to="/services/2"> {item}</Link>;
    default:
      return item;
  }
};

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch("/public/api/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        if (id) {
          const service = data.find((s) => s.id === id);
          if (service) {
            setSelectedService(service);
          }
        }
      })
      .catch((error) => console.error("Error fetching projects:", error));
  }, [id]);

  const handleServiceClick = (services) => {
    setSelectedService(services);
    setCurrentImageIndex(0);
  };

  const handleOrderService = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleNextImage = () => {
    if (selectedService && selectedService.image.length > 0) {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % selectedService.image.length
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedService && selectedService.image.length > 0) {
      setCurrentImageIndex(
        (prevIndex) =>
          (prevIndex - 1 + selectedService.image.length) %
          selectedService.image.length
      );
    }
  };

  return (
    <section className="service-section">
      <div className="option">
        <div className="beckgroundImg"></div>
        <div className="oooo">
          <h1 className="option-title">Services</h1>
          <ul className="option-list">
            {services.map((service) => (
              <li className="option-item" key={service.id}>
                <NavLink
                  to={`/services/${service.id}`}
                  className="option-item-nav"
                  onClick={() => handleServiceClick(service)}
                >
                  {service.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="option-bnt"
            onClick={() => handleOrderService()}
          >
            order service
          </button>
        </div>
      </div>
      <h1 className="description-title">
        {selectedService ? selectedService.title : "Select a service"}
      </h1>
      <div className="description-and-price site-container">
        <div className="description">
          <p className="description-text">
            {selectedService
              ? selectedService.description
              : "Click on a service to see its description"}
          </p>
          {selectedService && (
            <h3 className="price">Price: {selectedService.price}</h3>
          )}
        </div>
        {selectedService && (
          <div className="includes">
            <h3 className="includes-title">includes</h3>
            <ul className="includes-list">
              {selectedService.plen.map((item, index) => (
                <li key={index} className="includes-item">
                  {getContent(item)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {selectedService ? (
        selectedService.id === "3" ? (
          <ProjectCartSlider />
        ) : (
          <>
            <h1 className="imege-title">Примеры работ</h1>
            <div className="image-container site-container">
              <div className="slider">
                {selectedService.image.length > 0 && (
                  <img
                    className="img-services"
                    src={selectedService.image[currentImageIndex]}
                    alt={`Service ${selectedService.title} - Slide ${
                      currentImageIndex + 1
                    }`}
                  />
                )}
                <button
                  onClick={handlePrevImage}
                  className="slider-button prev"
                >
                  ←
                </button>
                <button
                  onClick={handleNextImage}
                  className="slider-button next"
                >
                  →
                </button>
              </div>
            </div>
          </>
        )
      ) : null}
      {modalOpen && <Modal onClose={handleCloseModal} isOpen={modalOpen} />}
      <ContactForm />
    </section>
  );
};
