import { useState } from "react";
import "./ServiceImagesSlader.scss"

export const ServiceImagesSlader = (
  {
  selectedService,
  openLightbox,
  width,
  t
}
) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  
  if (!selectedService || !selectedService.image) {
    return; 
  }

  return (
    <>
      <h1 className="imege-title ">{t("servicesPage.works")}</h1>
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
                onClick={() => openLightbox(selectedService.image)}
              />
            )}
            <button onClick={handlePrevImage} className="slider-button prev">
              ←
            </button>
            <button onClick={handleNextImage} className="slider-button next">
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
                onClick={() => openLightbox(selectedService.image, index)}
              />
            );
          })
        )}
      </div>
    </>
  );
};
