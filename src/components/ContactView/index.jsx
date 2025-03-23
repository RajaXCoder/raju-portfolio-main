import { useState } from "react";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import "./style.css";

const ContactView = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    if (name && subject && email && description) {
      setIsError(false);
      setErrorMsg("");
      const emailDetails = {
        name,
        email,
        subject: `Portfolio: ${subject}`,
        description,
      };

      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailDetails),
      };

      const response = await fetch(
        "https://raju-portfolio-server.onrender.com/api/send-email",
        options
      );
      const data = await response.json();
      // console.log(data);

      if (response.ok) {
        setIsError(false);
        setErrorMsg(data.message);
        alert("Send Email Successfully");
      } else {
        setIsError(true);
        setErrorMsg(data.message);
      }
      setName("");
      setEmail("");
      setSubject("");
      setDescription("");
    } else {
      setIsError(true);
      setErrorMsg("*Enter All Given Requirement");
    }
  };

  return (
    <>
      {/*mobile- view */}
      <div
        className="contact-card"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rajasekarrdx35@gmail.com&su=Portfolio%20Inquiry&body=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20work."
          target="_black"
          className="mail"
        >
          <IoMailOutline className="mail-icon" />
        </a>
        <div className="profile-pic">
          <img
            src="https://i.postimg.cc/7LptNTGC/profile-1.jpg"
            alt="Raju IMG"
          />
        </div>
        <div className="bottom">
          <div className="content">
            <span className="name">I'm Rajasekar</span>
            <span className="about-me">
              A passionate MERN stack developer skilled in building dynamic web
              applications with React, Node.js, and MongoDB. Always eager to
              learn and innovate in full-stack development.
            </span>
          </div>
          <div className="bottom-bottom">
            <div className="social-links-container">
              <a href="https://github.com/RajaXCoder" target="_black">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rajasekar-s-4b36172a4"
                target="_black"
              >
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/snstr_xx/" target="_black">
                <FaInstagram />
              </a>
              <a href="https://x.com/RajuWise3" target="_black">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*disktop view*/}
      <div
        className="contact-disktop-container"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <div className="disktop-social-container">
          <div className="main">
            <div className="up">
              <button
                onClick={() =>
                  window.open("https://www.instagram.com/snstr_xx/", "_blank")
                }
                className="card1"
              >
                <FaInstagram size={30} className="instagram" size={40} />
              </button>
              <button
                onClick={() => window.open("https://x.com/RajuWise3", "_blank")}
                className="card2"
              >
                <FaXTwitter size={30} className="twitter" size={40} />
              </button>
            </div>
            <div className="down">
              <button
                onClick={() =>
                  window.open("https://github.com/RajaXCoder", "_blank")
                }
                className="card3"
              >
                <FaGithub size={30} className="github" size={40} />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rajasekar-s-4b36172a4",
                    "_blank"
                  )
                }
                className="card4"
              >
                <FaLinkedin size={30} className="linkedin" size={40} />
              </button>
            </div>
          </div>
        </div>
        <div
          className="form-card1"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <div className="form-card2">
            <form onSubmit={sendEmail} className="form">
              <p className="form-heading">Get In Touch</p>
              <div className="form-field">
                <input
                  required=""
                  placeholder="Name"
                  className="input-field"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-field">
                <input
                  required=""
                  placeholder="Email"
                  className="input-field"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <input
                  required=""
                  placeholder="Subject"
                  className="input-field"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="form-field">
                <textarea
                  required=""
                  placeholder="Message"
                  cols="30"
                  rows="3"
                  className="input-field"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="sendMessage-btn">
                Send Message
              </button>
              {isError ? (
                <p className="font-medium text-red-600">{errorMsg}</p>
              ) : (
                <p className="font-medium text-green-600">{errorMsg}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactView;
