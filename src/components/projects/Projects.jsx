import { useState } from "react";
import ProjectImage from "../../../public/project-images/project.webp";
import { useNavigate } from "react-router-dom";
import "./Projects.scss";
import Layout from "../layout/Layout";
import Loader from "react-loaders";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    image: ProjectImage,
    description: "This is project 1, here we made a website",
  },
  {
    id: 2,
    title: "Project 1",
    image: ProjectImage,
    description: "This is project 1, here we made a website",
  },
  {
    id: 3,
    title: "Project 1",
    image: ProjectImage,
    description: "This is project 1, here we made a website",
  },
  {
    id: 4,
    title: "Project 1",
    image: ProjectImage,
    description: "This is project 1, here we made a website",
  },
  {
    id: 5,
    title: "Project 1",
    image: ProjectImage,
    description: "This is project 1, here we made a website",
  },
  // Other project data
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <Layout />
      <div>
        <div className="heading">
          <div className="title">Our Projects</div>
          <p className="description">
            We have completed various projects includes
          </p>
        </div>
        <div className="projects-grid">
          {projectsData.map((project) => {
            return (
              <div
                key={project.id}
                className="project-card"
                onClick={() => handleProjectClick(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <h3 className="project-title">{project.title}</h3>
              </div>
            );
          })}
          {selectedProject && (
            <div className="project-details" onClick={handleCloseDetails}>
              <div
                className="details-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="selected-project-image"
                />
                <h3 className="selected-project-title">
                  {selectedProject.title}
                </h3>
                <p className="selected-project-description">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <Loader type="ball-grid-beat" />
    </>
  );
};

export default Projects;
