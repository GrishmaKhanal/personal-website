import { Link } from "react-router-dom";
import "./Home.scss";
import ProfilePic from "../../assets/images/profilepic.jpg";
import { useEffect, useState } from "react";
import AnimatedLetters from "../animatedletters/AnimatedLetters";
import Loader from "react-loaders";
import Layout from "../layout/Layout";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = ["G", "r", "i", "s", "h", "m", "a"];
  const jobArray = ["P", "r", "o", "g", "r", "a", "m", "m", "e", "r", "."];

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
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _11`}>i</span>
              <span className={`${letterClass} _12`}>,</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>&apos;</span>
              <span className={`${letterClass} _15`}>m</span>
              <span className={`${letterClass} _16`}> </span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={17}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={24}
              />
            </h1>
            <h2>Student | C++ Intern | Web Developer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
        <div>
          <img src={ProfilePic} className="profile-img" />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
