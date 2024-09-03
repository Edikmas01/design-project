import { useEffect, useState } from "react";

export const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("api/projects.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return projects;
};
