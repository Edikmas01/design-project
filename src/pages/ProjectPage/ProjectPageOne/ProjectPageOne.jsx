import { useState, useEffect } from "react";
import "./ProjectPageOne.scss";
import { useParams } from "react-router-dom";

export const ProjectPageOne = () => {
  const { category, projectId } = useParams();
  const [project, setProject] = useState([]);
  const [currentVisualIndex, setCurrentVisualIndex] = useState(0);
  const [currentBlueprintIndex, setCurrentBlueprintIndex] = useState(0);

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

  const handleNextVisual = () => {
    setCurrentVisualIndex((prevIndex) =>
      prevIndex === project.visualizations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevVisual = () => {
    setCurrentVisualIndex((prevIndex) =>
      prevIndex === 0 ? project.visualizations.length - 1 : prevIndex - 1
    );
  };

  const handleNextBlueprint = () => {
    setCurrentBlueprintIndex((prevIndex) =>
      prevIndex === project.blueprints.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevBlueprint = () => {
    setCurrentBlueprintIndex((prevIndex) =>
      prevIndex === 0 ? project.blueprints.length - 1 : prevIndex - 1
    );
  };

  if (!project) {
    return <div>Проект не найден</div>;
  }

  return (
    <section className="project-one-section site-container">
      <h1 className="project-title">{project.title}</h1>
      <h3 className="project-description-title">Description of this project</h3>
      <p className="project-description">{project.description}</p>

      {project.visualizations && project.visualizations.length > 0 && (
        <>
          <h3 className="project-description-title">
            Visualization of this project design
          </h3>
          <div className="carousel-container">
            <div className="slider">
              <div className="img-container gallery">
                <img
                  className="img-carousel"
                  src={project.visualizations[currentVisualIndex]}
                  alt="Slide"
                />
            
              </div>
              <button
                className="slider__button slider__button--left"
                onClick={handlePrevVisual}
              >
                ←
              </button>
              <button
                className="slider__button slider__button--right"
                onClick={handleNextVisual}
              >
                →
              </button>
            </div>
          </div>
        </>
      )}

      {project.blueprints && project.blueprints.length > 0 && (
        <>
          <h3 className="project-description-title">
            Technical drawings project design
          </h3>
          <div className="carousel-container">
            <div className="slider">
              <div className="img-container gallery">
                <img
                  className="img-carousel"
                  src={project.blueprints[currentBlueprintIndex]}
                  alt="Slide"
                />
              </div>
              <button
                className="slider__button slider__button--left"
                onClick={handlePrevBlueprint}
              >
                ←
              </button>
              <button
                className="slider__button slider__button--right"
                onClick={handleNextBlueprint}
              >
                →
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
// → ←
