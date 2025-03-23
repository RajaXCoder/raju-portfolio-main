import { FaExternalLinkAlt } from "react-icons/fa";

import "./style.css";

const Project = (prop) => {
  const { item } = prop;
  return (
    <li
      className="project-card-container"
      data-aos={item.aosValue}
      data-aos-once="true"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <div className="project-card">
        <div className="front-content">
          <img
            src={item.imageUrl}
            className="w-full h-full object-cover absolute top-0 left-0 opacity-50"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/100 to-transparent"></div>
        </div>
        <div className="content">
          <h1 className="heading">{item.name}</h1>
          <p>{item.description}</p>
          <p className="font-bold">{item.technologies}</p>
          <a
            className="url-link text-blue-600"
            href={item.projectUrl}
            target="_black"
          >
            <FaExternalLinkAlt className="link-icon" /> web link
          </a>
        </div>
      </div>
    </li>
  );
};

export default Project;
