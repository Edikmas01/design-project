
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectPageDetails } from "./ProjectPageDetails/ProjectPageDetails";
import { ProjectsPageCart } from "./ProjectsPageCart/ProjectsPageCart";
import { useFetchProjects } from "../../hooks/useFetchProjects";

export const ProjectPage = () => {
  const { projectId } = useParams();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useFetchProjects();

  const handleProjectSelection = () => {
    const project = projects.find((project) => project.id === projectId);
    setSelectedProject(project);
  };

  return (
    <section className="project-page-section">
      {!selectedProject ? (
        <ProjectsPageCart handleProjectSelection={handleProjectSelection} />
      ) : (
        <ProjectPageDetails project={selectedProject} />
      )}
    </section>
  );
};
/**  */
