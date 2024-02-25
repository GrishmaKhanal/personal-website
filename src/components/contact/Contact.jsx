import { useEffect, useState, useRef } from "react";
import Loader from "react-loaders";
import Layout from "../layout/Layout";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../animatedletters/AnimatedLetters";
import "./Contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [notification, setNotification] = useState("");
  const formRef = useRef(null); // Use useRef for resetting the form

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("letter class = " + letterClass);
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (notification) {
      const timerId = setTimeout(() => setNotification(""), 5000);
      return () => clearTimeout(timerId);
    }
  }, [notification]);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_hljrizu",
        "template_wg50mct",
        formRef.current,
        {
          publicKey: "r26cjvE4a-FpY3gmx",
        }
      );
      setNotification("Email sent successfully!");
      // Optionally clear the form after successful sending
      formRef.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setNotification("Failed to send email. Please try again.");
    }
  };

  return (
    <>
      <Layout />
      <div className="container contact-page">
        <div className="container-text-zone">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
                idx={15}
              />
            </h1>
            <p className="about-text">
              Ready for any opportunities or questions you may have!
            </p>
          </div>
          <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Name" required />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="user_subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea
                name="user_message"
                placeholder="Message"
                required
              ></textarea>
              <input type="submit" className="flat-button" value="Send" />
            </form>
            <h2>
              {notification && (
                <div className="notification">{notification}</div>
              )}
              {notification && (
                <Link to="/home" className="flat-button">
                  Back to Home
                </Link>
              )}
            </h2>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-beat" />
    </>
  );
};

export default Contact;
