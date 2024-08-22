import { Link } from "react-router-dom";
import "./ProjectCart.scss";

const truncateDescription = (description, maxLength) => {
  if (description.length > maxLength) {
    return description.slice(0, maxLength);
  }
  return description;
};
export const ProjectCart = ({project}) => {
  const { image, title, description, category, id } = project
  
  const maxLength = Math.floor(description.length / 2); 
  const truncatedDescription = truncateDescription(description, maxLength);
  
  return (
    <div>
      <Link to={`/${category}/${id}`}>
        <div className="projects-top-wrap">
          <img src={image} alt={title} width="380" height="360" />
          <p className="projects-text">
            {truncatedDescription}{" "}
            <Link to={`/${category}/${id}`}>Learn More...</Link>
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
