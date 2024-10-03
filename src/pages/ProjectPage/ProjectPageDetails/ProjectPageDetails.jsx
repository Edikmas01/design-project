import "./ProjectPageDetails.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useTranslation } from "react-i18next";

export const ProjectPageDetails = () => {
  const { category, projectId } = useParams();
  const [project, setProject] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`/api/${category}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((projects) => {
        const project = projects.find((p) => p.id === projectId);
        if (project) {
          setProject(project);
        } else {
          console.error("Project not found");
        }
      })
      .catch((error) => console.error("Error fetching project:", error));
  }, [category, projectId]);

  const title = t(`projectDetails.projects.${project.id}.title`);
  const description = t(`projectDetails.projects.${project.id}.description`);

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

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section className="project-one-section site-container">
      <h1 className="project-title">{title}</h1>
      <h3 className="project-description-title">
        {t("projectPageDetails.descriptionTitle")}
      </h3>
      <p className="project-description">{description}</p>
      {project.visualizations && project.visualizations.length > 0 && (
        <>
          <h3 className="project-description-title">
            {t("projectPageDetails.visualizationTitle")}
          </h3>
          <div className="img-container-visualizations">
            {project.visualizations.map((src, index) => (
              <img
                key={index}
                className="img-visualizations"
                src={src}
                alt={`Slide ${index}`}
                onClick={() => openLightbox(project.visualizations, index)}
              />
            ))}
          </div>
        </>
      )}
      {project.blueprints && project.blueprints.length > 0 && (
        <>
          <h3 className="project-description-title">
            {t("projectPageDetails.technicalTitle")}
          </h3>
          <div className="img-container-blueprints">
            {project.blueprints.map((src, index) => (
              <img
                key={index}
                className="img-blueprints"
                src={src}
                alt={`Slide ${index}`}
                onClick={() => openLightbox(project.blueprints, index)}
              />
            ))}
          </div>
        </>
      )}
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
          animation={{
            fade: 500, 
            easing: "ease-in-out", 
            speed: 500,
          }}
          carousel={{
            transitionDuration: 500, 
          }}
        />
      )}
    </section>
  );
};
