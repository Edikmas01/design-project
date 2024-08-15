import { Link, NavLink } from "react-router-dom";
import "./ProjectCart.scss";

export const ProjectCart = ({
  project: { image, title, description, category, id },
}) => {
  return (
    <Link to={`/${category}/${id}`}>
      <div className="projects-top-wrap">
        <img src={image} alt={title} width="380" height="360" />
        <p className="projects-text">
          {description}{" "}
          <NavLink to={`/${category}/${id}`}>Learn More...</NavLink>
        </p>
      </div>
      <div className="projects-div">
        <h2 className="projects-header">{title}</h2>
        <p className="projects-skop">{category}</p>
      </div>
    </Link>
  );
};
