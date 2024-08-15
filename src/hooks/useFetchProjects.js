import { useEffect, useState } from "react";

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("api/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return projects;
};
