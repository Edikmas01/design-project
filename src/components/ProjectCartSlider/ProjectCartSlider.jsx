import { useEffect, useState } from "react";
import "./ProjectCartSlider.scss";
import { ProjectCart } from "../ProjectCart/ProjectCart";


export const ProjectCartSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch("api/projects.json")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error("Error fetching projects:", error));
    }, []);

  const filterProjects = projects.filter((project) => project.rank);

  const handlePrevClick = () => {
    setActiveIndex(Math.max(activeIndex - 3, 0));
  };

  const handleNextClick = () => {
    setActiveIndex(Math.min(activeIndex + 3, projects.length - 1));
  };

  return (
    <section className="gellore-projects  site-container">
      {filterProjects.length > 0 && (
        <div className="slider-body">
          <ul className="projectsCart-list">
            {projects
              .filter((project) => project.rank)
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
