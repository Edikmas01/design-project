
import { useState } from "react";
import { ProjectCart } from "../../../components/ProjectCart/ProjectCart";
import "./ProjectsPageCart.scss";
import { useFetchProjects } from "../../../hooks/useFetchProjects";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks/useWindowSize"; 

export const ProjectsPageCart = () => {
  const [selectedCategory, setselectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();


  const { width } = useWindowSize();
  const projects = useFetchProjects();

  const handleCategoryClick = (category) => {
    setselectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  
  const itemsPerPage = 4;

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
const paginatedProjects =
  width > 900
    ? filteredProjects
    : filteredProjects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
  


  return (
    <section className="projectsall-section site-container">

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
        {paginatedProjects.map((project, index) => (
          <li className="projects-item" key={index}>
            <ProjectCart project={project} />
          </li>
        ))}
      </ul>

      {width < 920 && totalPages > 1 && (
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={currentPage === index + 1 ? "active" : ""}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};
