import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import AnimatedLetters from "../animatedletters/AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Loader from "react-loaders";
import { NavLink } from "react-router-dom";
import resumePDF from "../../assets/GrishmaResumef.pdf";

const ResumePDF = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  let lostMessage1 = "You can view my resume here!";
  let lostMessage2 = " ";
  const lostMessageArray1 = lostMessage1.split("");
  const lostMessageArray2 = lostMessage2.split("");
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
      <div className="container home-page">
        <div className="container-text-zone">
          <div className="text-zone">
            <h1 className="error-color">
              <div className="big-404">
                <span className={`${letterClass} _1`}>H</span>
                <span className={`${letterClass} _1`}>E</span>
                <span className={`${letterClass} _1`}>Y</span>
              </div>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={lostMessageArray1}
                idx={5}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={lostMessageArray2}
                idx={16}
              />
            </h1>
            <NavLink
            className="flat-button-error"
            to="/resume"
            onClick = {() => {
              window.open(resumePDF, '_blank');
            }}
          >
            Resume / CV <FontAwesomeIcon icon={faDownload} />
          </NavLink>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-beat" />
    </>
  );
};

export default ResumePDF;
