import axios from "axios";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

import { FaArrowDown } from "react-icons/fa6";

import Skills from "../components/Skills";
import skills from "../../public/data";
import ProfileView from "../components/ProfileView";
import Loader from "../components/Loader";
import Certificates from "../components/Certificates";
import Project from "../components/Project";
import ContactView from "../components/ContactView";

import "./style.css"; // Move this to the top

const navigation = [
  { name: "Profile", href: "#Profile", current: true },
  { name: "Projects", href: "#Project", current: false },
  { name: "Skills", href: "#Skills", current: false },
  { name: "Contact", href: "#Contacts", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const URI = "https://raju-portfolio-backend.onrender.com/api";

const Home = () => {
  const [tabsList, setTabsList] = useState(navigation);
  const [projectList, setProjectList] = useState([]);
  const [skillsList, setSkillsList] = useState([]);
  const [certificates, setCertificates] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    const resumeUrl = "/Rajasekar_Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rajasekar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const apiCall = async () => {
      try {
        setIsLoading(true);
        const [res1, res2, res3] = await Promise.all([
          axios.get(`${URI}/get-projects`),
          axios.get(`${URI}/get-skills`),
          axios.get(`${URI}/get-certificates`),
        ]);
        // console.log("res 3 ", res3);
        if (res1.status === 200 && res2.status === 200 && res3.status === 200) {
          setIsLoading(false);
          setProjectList(res1.data.projects);

          setSkillsList(res2.data.skills[0]);
          console.log(res2.data.skills[0]);
          setCertificates(res3.data.certificatez);
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

  // console.log(skillsList);
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

      {/* Profile View */}

      <div className="home-container bg-zinc-800 text-white">
        <h1 id="Profile" className="home-heading cssanimation leFadeInLeft">
          Profile
        </h1>

        <ProfileView />
        <h1 id="Project" className="home-heading">
          Projects
        </h1>

        {/* Project View */}
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="project-list-container">
            {projectList.map((each) => (
              <Project item={each} key={each._id} />
            ))}
          </ul>
        )}

        {/* Skills View*/}
        <h1 id="Skills" className="home-heading">
          Skills
        </h1>

        {isLoading ? <Loader /> : <Skills skills={skillsList} />}

        {/*Certificates View*/}
        <h1 className="home-heading">Certificates</h1>

        {isLoading ? (
          <Loader />
        ) : (
          <ul className="w-[90%] m-auto flex flex-row items-center flex-wrap">
            {certificates.map((item) => (
              <Certificates certificate={item} key={item._id} />
            ))}
          </ul>
        )}

        {/* {contacts} */}
        <h1 id="Contacts" className="home-heading">
          Contacts
        </h1>
        <ContactView />
      </div>
    </>
  );
};

export default Home;
