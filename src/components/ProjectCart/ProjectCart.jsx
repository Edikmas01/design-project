import { Link } from "react-router-dom";
import "./ProjectCart.scss";
import { useTranslation } from "react-i18next";

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength);
  }
  return description;
};
export const ProjectCart = ({project}) => {
  const { t } = useTranslation();
  const { image, category, id } = project;

const title = t(`projectDetails.projects.${id}.title`);
const description = t(`projectDetails.projects.${id}.description`);
// const category = t(`projectCart.projects.${id}.category`);

const maxLength = description ? Math.floor(description.length / 2) : 0;
  const truncatedDescription = truncateDescription(description, maxLength);
  
  return (
    <div>
      <Link to={`/${category}/${id}`} className="link">
        <div className="projects-top-wrap">
          <img src={image} alt={title} width="380" height="360" />
          <p className="projects-text">
            {truncatedDescription}{" "}
            <Link to={`/${category}/${id}`} className="link">
              {t("projectCart.learnMore")}...
            </Link>
          </p>
        </div>
        <div className="projects-div">
          <h2 className="project-header">{title}</h2>
          <p className="project-category">{category}</p>
        </div>
      </Link>
    </div>
  );
};
