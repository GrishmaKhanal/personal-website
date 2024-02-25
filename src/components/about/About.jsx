import Layout from "../layout/Layout";
import "./About.scss";
import { useEffect, useState } from "react";
import {
  faLinux,
  faPython,
  faGitAlt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loaders";
import AnimatedLetters from "../animatedletters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import faCpp from "../../assets/images/cpp_logo.png";
import tailwindcss from "../../assets/images/tailwindcss.svg";
import djangoLogo from "../../assets/images/django-logo.svg";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  let skills = "Langugages & Frameworks";
  const skillsArray = skills.split("");

  const handleDragStart = (e) => {
    e.preventDefault();
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
      <div className="container about-page">
        <div className="container-text-zone">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
                idx={7}
              />
            </h1>
            <p className="about-text">
              I&apos;m a dedicated Computer Engineering Student from Kathamndu,
              Nepal with a passion for technology and software development.
            </p>
            <p className="about-text">
              I&apos;m quiet confident, naturally curious, and perpetually
              working on improving myself one ability at a time. I am eager to
              explore new oppurtunities and contribute the ever-evolving field
              of technology.
            </p>
            <p className="about-text">
              I have intest in following latest tech news, and enjoy following
              football, watching movies, anime.
            </p>
          </div>
        </div>

        <div className="skills">
          <div className="stage-cube-cont">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={skillsArray}
                idx={7}
              />
            </h1>
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faLinux} color="#DD0031" />
              </div>
              <div className="face2">
                <img src={faCpp} onDragStart={handleDragStart} />
              </div>
              <div className="face2">
                <img src={tailwindcss} onDragStart={handleDragStart} />
              </div>
              <div className="face2">
                <img src={djangoLogo} onDragStart={handleDragStart} />
              </div>
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#28A4D9" />
              </div>
              <div className="face1">
                <FontAwesomeIcon icon={faDatabase} color="#28A4D9" />
              </div>
              <div className="face1">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face1">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face1">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-beat" />
    </>
  );
};

export default About;
