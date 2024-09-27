import { useState, useEffect } from "react";
import "./ServicesPage.scss";
import { Link, NavLink, useParams } from "react-router-dom";
import { Modal } from "../../components/Modal/Modal";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ProjectCartSlider } from "../../components/ProjectCartSlider/ProjectCartSlider";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useWindowSize } from "../../hooks/useWindowSize.js";

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

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(null);
  const { width } = useWindowSize();

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

  const openLightbox = (gallery, index) => {
    setCurrentGallery(gallery);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentGallery(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === currentGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? currentGallery.length - 1 : prevIndex - 1
    );
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
    <section className="service-section ">
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

      <div className="cont">
        <h1 className="description-title">
          {selectedService ? title : t("servicesPage.selectService")}
        </h1>
        <div className="description-and-price">
          {width < 900 && (
              selectedService && (
                <div className="includes">
                  <h3 className="includes-title">
                    {t("servicesPage.includes")}
                  </h3>
                  <ul className="includes-list">
                    {plen.map((item, index) => (
                      <li key={index} className="includes-item">
                        {getContent(item, t)}
                      </li>
                    ))}
                  </ul>
                </div>
              )
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
          {width > 900 && (
              selectedService && (
                <div className="includes">
                  <h3 className="includes-title">
                    {t("servicesPage.includes")}
                  </h3>
                  <ul className="includes-list">
                    {plen.map((item, index) => (
                      <li key={index} className="includes-item">
                        {getContent(item, t)}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
        </div>

        {selectedService ? (
          selectedService.id === "3" ? (
            <ProjectCartSlider />
          ) : (
            <>
              <h1 className="imege-title">{t("servicesPage.works")}</h1>
              <div className="image-container site-container">
                {width > 1000 ? (
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
                ) : (
                  selectedService.image.map((src, index) => {
                    return (
                      <img
                        key={index}
                        className="img-services"
                        src={src}
                        alt={"a"}
                        onClick={() =>
                          openLightbox(selectedService.image, index)
                        }
                      />
                    );
                  })
                )}
              </div>
            </>
          )
        ) : null}
      </div>
      {modalOpen && <Modal onClose={handleCloseModal} isOpen={modalOpen} />}
      <ContactForm />
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={closeLightbox}
          slides={currentGallery.map((src) => ({ src }))}
          index={currentIndex}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 2,
          }}
          on={{
            clickNext: handleNext,
            clickPrev: handlePrev,
          }}
        />
      )}
    </section>
  );
};
