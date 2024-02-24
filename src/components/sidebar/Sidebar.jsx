import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.scss";
import logoG from "../../assets/images/logoG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';

import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/" onClick={() => setShowNav(false)}>
          <img src={logoG} alt="logo" />
          <div className="sub-title">
            <p>Grishma</p>
          </div>
        </Link>
        <nav className={showNav ? "mobile-show" : ""}>
          <NavLink
            excat="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}
            className={(pathname === "/" || pathname === "/home") ? "active" : ""}
          >
            <FontAwesomeIcon className="fontawesome-icons" icon={faHome} />
          </NavLink>
          <NavLink
            excat="true"
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="projects-link"
            to="/projects"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
          </NavLink>
          <NavLink
            excat="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </NavLink>
          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faClose}
            color="#ffd700"
            size="3x"
            className="close-icon"
          />
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/grishma-raj-khanal-395346204/"
            >
              <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/GrishmaKhanal"
            >
              <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/grishmarajkhanal/"
            >
              <FontAwesomeIcon icon={faInstagram} className="anchor-icon" />
            </a>
          </li>
        </ul>
        <FontAwesomeIcon
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className="hamburger-icon"
        />
      </div>
    </>
  );
};

export default Sidebar;
