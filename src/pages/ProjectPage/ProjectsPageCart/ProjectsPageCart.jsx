import { useState } from "react";
import { ProjectCart } from "../../../components/ProjectCart/ProjectCart";
import "./ProjectsPageCart.scss";
import { useFetchProjects } from "../../../hooks/useFetchProjects";
import { useTranslation } from "react-i18next";

export const ProjectsPageCart = () => {
  const [selectedCategory, setselectedCategory] = useState("all");
const { t } = useTranslation();

  const projects = useFetchProjects();

  const handleCategoryClick = (category) => {
    setselectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="projectsall-section site-container ">
      {/* <h1 className="projects-title">My projects</h1> */}
      <div className="filter-buttons">
        <button
          type="button"
          className={`projectPage-bnt ${
            selectedCategory === "all" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("all")}
        >
          {t("projectsPageCart.allProjects")}
        </button>
        <button
          type="button"
          className={`projectPage-bnt ${
            selectedCategory === "houses" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("houses")}
        >
          {t("projectsPageCart.house")}
        </button>
        <button
          type="button"
          className={`projectPage-bnt ${
            selectedCategory === "apartment" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("apartment")}
        >
          {t("projectsPageCart.apartment")}
        </button>
        <button
          type="button"
          className={`projectPage-bnt ${
            selectedCategory === "business" ? "active" : ""
          }`}
          onClick={() => handleCategoryClick("business")}
        >
          {t("projectsPageCart.business")}
        </button>
      </div>
      <ul className="projectsCart-list">
        {filteredProjects.map((project, index) => (
          <li className="projects-item" key={index}>
            <ProjectCart project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
};
