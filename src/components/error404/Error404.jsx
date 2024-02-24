import { Link } from "react-router-dom";
import "./Error404.scss";
import { useEffect, useState } from "react";
import AnimatedLetters from "../animatedletters/AnimatedLetters";
import Loader from "react-loaders";
import Layout from "../layout/Layout";

const Error404 = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  let lostMessage1 = "This page does not exists!";
  let lostMessage2 = "Go Back";
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
                <span className={`${letterClass} _1`}>4</span>
                <span className={`${letterClass} _1`}>0</span>
                <span className={`${letterClass} _1`}>4</span>
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
            <Link to="/home" className="flat-button-error">
              Home
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Error404;
