import { useState, useEffect } from "react";
import "./ServicesPage.scss";
import { useParams } from "react-router-dom";
import { useWindowSize } from "../../hooks/useWindowSize.js";
import { useTranslation } from "react-i18next";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import { ContactForm } from "../../components/ContactForm/ContactForm";
import { Modal } from "../../components/Modal/Modal";
import { ProjectCartSlider } from "../../components/ProjectCartSlider/ProjectCartSlider.jsx";
import { ServiceList } from "./ServiceList/ServiceList.jsx";
import { ServiceDescription } from "./ServiceDescription/ServiceDescription.jsx";
import { ServiceImagesSlader } from "./ServiceImagesSlader/ServiceImagesSlader.jsx";

export const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [services, setServices] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(null);
  const { width } = useWindowSize();
    const { id } = useParams();
    const { t } = useTranslation();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched services:", data);
        setServices(data);
        if (id) {
          const service = data.find((s) => s.id === id);
          console.log("Selected service after fetch:", service);
          if (service) {
            setSelectedService(service);
          }
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, [id]);


  const handleServiceClick = (services) => {
    setSelectedService(services);
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

  return (
    <section className="service-section ">
      <ServiceList
        services={services}
        handleServiceClick={handleServiceClick}
        handleOrderService={handleOrderService}
        t={t}
      />

      <div className="cont">
        <ServiceDescription
          selectedService={selectedService}
          width={width}
          t={t}
        />
        {selectedService?.id === "3" ? (
          <>
            {console.log("Rendering ProjectCartSlider component")}
            <ProjectCartSlider />
          </>
        ) : (
          <ServiceImagesSlader
            selectedService={selectedService}
            openLightbox={openLightbox}
            width={width}
            t={t}
          />
        )}
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
