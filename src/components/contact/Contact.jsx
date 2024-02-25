import { useEffect, useState } from "react";
import Loader from "react-loaders";
import Layout from "../layout/Layout";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../animatedletters/AnimatedLetters";
import "./Contact.scss";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("letter class = " + letterClass);
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_YeJhZkgb", form.current, "your-token")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
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
              Ready for any oppurtunities or questions you may have!
            </p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input className="left half" placeholder="Name" type="text" name="name" required />
              <label>Email</label>
              <input className="left half" placeholder="Email" type="email" name="email" required />
              <label>Subject</label>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <label>Message</label>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <input type="submit" className="flat-button" value="SEND" />
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-grid-beat" />
    </>
  );
};

export default Contact;
