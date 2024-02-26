import { useState, useEffect } from "react";
import PortfolioImage from "../../../public/project-images/portfolio.png";
import SupplyChainImage from "../../../public/project-images/supply-chain-management.png";
import ICTImage from "../../../public/project-images/ict-website.png";
import ProjectImage from "../../../public/project-images/project.webp";
import GrammarImage from "../../../public/project-images/grammar-error-correction.png";
import "./Projects.scss";
import Layout from "../layout/Layout";
import AnimatedLetters from "../animatedletters/AnimatedLetters";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Loader from "react-loaders";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    image: PortfolioImage,
    description: "This is my portfolio",
    techUsed: "Reactjs, SCSS, Emailjs, Animatejs",
    githubLink: "https://github.com/GrishmaKhanal/personal-website",
  },
  {
    id: 2,
    title: "Supply Chain Management",
    image: SupplyChainImage,
    description:
      "This our major project deployed in Ethereum, which employs web3 to track the product movement and analysis between Manufacturer, Retailer, Distributor, and Consumer.",
    techUsed: "Solidity, MongoDB, Reactjs, Nodejs, Sepolia",
    githubLink: "https://github.com/GrishmaKhanal/SupplyChainBlockchain/",
  },
  {
    id: 3,
    title: "Grammar Error Corrector",
    image: GrammarImage,
    description:
      "In this, we trained an ai model in t5 transformer to correct any grammatical errors in english sentences and paragraphs. This model achieved 90% accuracy.",
    techUsed: "Python, T5 transformer, Django",
    githubLink: "https://github.com/GrishmaKhanal/GrammarCorrection",
  },
  {
    id: 4,
    title: "ICT Website",
    image: ICTImage,
    description: "This is a group project to create a company's website",
    techUsed: "ReactJs, Nodejs, ",
    githubLink: "https://github.com/WarClub/ICT-website",
  },
  // Other project data
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [letterClass, setLetterClass] = useState("text-animate");

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("letter class = " + letterClass);
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Layout />
      <div className="container project-page">
        <div className="container-text-zone">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  "M",
                  "y",
                  " ",
                  "P",
                  "r",
                  "o",
                  "j",
                  "e",
                  "c",
                  "t",
                  "s",
                ]}
                idx={7}
              />
            </h1>
          </div>
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
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                    href={selectedProject.githubLink}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </h3>

                <p className="selected-project-description">
                  {selectedProject.description}
                </p>
                <p className="selected-project-tech">
                  Technology Used: {selectedProject.techUsed}
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
