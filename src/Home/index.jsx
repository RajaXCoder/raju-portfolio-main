import axios from "axios";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter, FaArrowDown } from "react-icons/fa6";

import Loader from "../Loader";

import "./style.css"; // Move this to the top

import Skill from "./style";

const navigation = [
  { name: "Profile", href: "#Profile", current: true },
  { name: "Projects", href: "#Project", current: false },
  { name: "Skills", href: "#Skills", current: false },
  { name: "Contact", href: "#Contacts", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Home = () => {
  const [tabsList, setTabsList] = useState(navigation);
  const [projectList, setProjectList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isError, setIsError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleDownload = () => {
    const resumeUrl = "/Rajasekar_MERN.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rajasekar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      console.log(data);

      if (response.ok) {
        setIsError(false);
        setErrorMsg(data.message);
        alert('Send Email Successfully')
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

  useEffect(() => {
    const apiCall = async () => {
      try {
        setIsLoading(true);
        const [res1, res2] = await Promise.all([
          axios.get(
            "https://raju-portfolio-server.onrender.com/api/get-projects"
          ),
          axios.get(
            "https://raju-portfolio-server.onrender.com/api/get-skills"
          ),
        ]);
        console.log(res1);
        if (res1.status === 200 && res2.status === 200) {
          setIsLoading(false);
          setProjectList(res1.data.projects);
          setSkillsList(res2.data.skills);
        }
      } catch (e) {
        setIsLoading(true);
        console.error("Server data fetching error : ", e);
      }
    };
    apiCall();
  }, []);

  const changeTabs = (item) => {
    setTabsList((prev) =>
      prev.map((each) =>
        each.name === item.name
          ? { ...each, current: true }
          : { ...each, current: false }
      )
    );
  };
  return (
    <>
      {/* {Navbar container} */}

      <Disclosure as="nav" className="bg-cyan-400">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block text-white h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 text-white group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-center ">
              <div className="hidden sm:ml-6 sm:block flex flex-1">
                <div className="flex space-x-4">
                  {tabsList.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      onClick={() => changeTabs(item)}
                      className={classNames(
                        item.current
                          ? "bg-gray-700 text-white"
                          : "text-stone-950 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}

                  <button
                    onClick={handleDownload}
                    className="cursor-pointer flex justify-between items-center bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
                  >
                    Resume
                    <FaArrowDown className="w-5 h-5 animate-bounce" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden ">
          <div className="space-y-1 px-2 pb-3 pt-2 bg-cyan-400 menu-bar-menu">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                onClick={() => changeTabs(item)}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "hover:bg-gray-700 hover: text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
            <button
              onClick={handleDownload}
              className="cursor-pointer flex justify-between items-center bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
            >
              Resume
              <FaArrowDown className="w-5 h-5 animate-bounce" />
            </button>
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* {Home container} */}

      <div className="home-container bg-zinc-800 text-white">
        <h1 className="home-heading cssanimation leFadeInLeft">Profile</h1>

        <div className="e-card playing">
          <div className="image"></div>

          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>

          <div className="infotop">
            <img
              src="https://i.postimg.cc/XYvhy0Zs/0b3c1610-03b4-4cda-b4f0-83ef6abea697.png"
              alt="profile"
              className="profile-image"
            />
            <div className="self-intro-container">
              <img
                src="https://i.postimg.cc/DycmNXPY/IMG-20241112-075823.png"
                alt="profile"
                className="mobile-view-profile"
              />
              <h1 className="fade-sequence">
                Hello! <span className=" highlight-text">I’m Rajasekar</span>
              </h1>

              <p className="name">
                a passionate{" "}
                <span className="highlight-text">MERN stack developer</span>{" "}
                focused on building efficient and user-friendly web
                applications. I’m skilled in MongoDB, Express, React, and
                Node.js, creating interactive and scalable solutions. With a
                strong attention to detail, I’m committed to delivering clean,
                maintainable code for every project.
              </p>
            </div>
          </div>
        </div>

        <h1 id="Project" className="home-heading">
          Projects
        </h1>

        {isLoading ? (
          <Loader />
        ) : (
          <ul className="project-list-container">
            {projectList.map((each) => (
              <li
                key={each._id}
                className="project-card-container"
                data-aos={each.aosValue}
                data-aos-once="true"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                <div className="project-card">
                  <div className="front-content">
                    <img
                      src={each.imageUrl}
                      className="w-full h-full object-cover absolute top-0 left-0 opacity-50"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/100 to-transparent"></div>
                  </div>
                  <div className="content">
                    <h1 className="heading">{each.name}</h1>
                    <p>{each.description}</p>
                    <p className="font-bold">{each.technologies}</p>
                    <a
                      className="url-link text-blue-600"
                      href={each.projectUrl}
                      target="_black"
                    >
                      <FaExternalLinkAlt className="link-icon" /> web link
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Skills */}

        <h1 id="Skills" className="home-heading">
          Skills
        </h1>

        {isLoading ? (
          <Loader />
        ) : (
          <ul
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="500"
            data-aos-duration="1000"
            className="skills-container"
          >
            {skillsList.map((each) => (
              <li key={each._id} className="skill-box">
                <span className="title">{each.name}</span>

                <div className="skill-bar">
                  <Skill width={`${each.points}%`}>
                    <span className="tooltip">{each.points}%</span>
                  </Skill>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* {contacts} */}
        <h1 id="Contacts" className="home-heading">
          Contacts
        </h1>
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
                A passionate MERN stack developer skilled in building dynamic
                web applications with React, Node.js, and MongoDB. Always eager
                to learn and innovate in full-stack development.
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
        <div className="contact-disktop-container">
          <div
            className="disktop-social-container"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <div className="main">
              <div className="up">
                <button
                  onClick={() =>
                    window.open("https://www.instagram.com/snstr_xx/", "_blank")
                  }
                  className="card1"
                >
                  <FaInstagram size={30} className="instagram" />
                </button>
                <button
                  onClick={() =>
                    window.open("https://x.com/RajuWise3", "_blank")
                  }
                  className="card2"
                >
                  <FaXTwitter size={30} className="twitter" />
                </button>
              </div>
              <div className="down">
                <button
                  onClick={() =>
                    window.open("https://github.com/RajaXCoder", "_blank")
                  }
                  className="card3"
                >
                  <FaGithub size={30} className="github" />
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
                  <FaLinkedin size={30} className="linkedin" />
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
      </div>
    </>
  );
};

export default Home;
