import { useState } from "react";
import "./ProjectCartSlider.scss";
import { ProjectCart } from "../ProjectCart/ProjectCart";
import { useFetchProjects } from "../../hooks/useFetchProjects";
import { useTranslation } from "react-i18next";

export const ProjectCartSlider = () => {
  console.log("ProjectCartSlider component is rendering");
  const [activeIndex, setActiveIndex] = useState(0);
const { t } = useTranslation();


  const projects = useFetchProjects();

  const filterProjects = projects.filter((project) => project.rank);

  const handlePrevClick = () => {
    setActiveIndex(Math.max(activeIndex - 3, 0));
  };

  const handleNextClick = () => {
    setActiveIndex(Math.min(activeIndex + 3, projects.length - 1));
  };

  return (
    <section className="gellore-projects  site-container">
      <h1 className="gellore-title">{t("projectCartSlider.title")}</h1>
      {filterProjects.length > 0 && (
        <div className="slider-body">
          <ul className="projectsCart-list">
            {filterProjects
              .slice(activeIndex, activeIndex + 3)
              .map((project, index) => (
                <li className="projects-item" key={index}>
                  <ProjectCart project={project} />
                </li>
              ))}
          </ul>
          {filterProjects.length > 3 && (
            <>
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
            </>
          )}
        </div>
      )}
    </section>
  );
};
