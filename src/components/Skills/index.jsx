import { FaCircle, FaCode, FaDatabase, FaServer } from "react-icons/fa";

const Skills = (props) => {
  const { skills } = props;
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="500"
      data-aos-duration="1000"
      className="w-[90%] flex flex-row flex-wrap mx-auto"
    >
      {/* Frontend Skills */}
      <ul className="relative w-full sm:w-[48%] lg:w-[31.33%] h-[15rem] rounded-xl overflow-hidden flex flex-col p-6 group m-[1%] border border-gray-700 bg-gray-800 transition-colors duration-200 shadow-lg shadow-cyan-900/10 hover:shadow-cyan-900/20 hover:shadow-cyan-900/20 transition-all duration-300 hover:transform hover:scale-[1.02] relative group">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-cyan-400" />
        <li className="text-cyan-400 text-2xl mb-4 font-semibold flex items-center">
          <FaCode className="mr-3 text-cyan-400" /> Frontend
        </li>
        {skills.frontend.map((each, _id) => (
          <li
            key={_id}
            className="w-full text-gray-300 transition-all duration-300 flex items-center hover:translate-x-2 group-hover:text-gray-100"
          >
            <FaCircle className="mr-2 text-cyan-500 text-[8px]" />
            {each}
          </li>
        ))}
        <div className="absolute bottom-2 right-4 opacity-50 text-8xl text-cyan-900/30">
          <FaCode />
        </div>
      </ul>

      {/* Database & Tools Skills */}
      <ul className="relative w-full sm:w-[48%] lg:w-[31.33%] h-[15rem] rounded-xl overflow-hidden flex flex-col p-6 group m-[1%] border border-gray-700 bg-gray-800 transition-colors duration-200 shadow-lg shadow-cyan-900/10 hover:shadow-cyan-900/20 hover:shadow-cyan-900/20 transition-all duration-300 hover:transform hover:scale-[1.02] relative group">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-cyan-400" />
        <li className="text-cyan-400 text-2xl mb-4 font-semibold flex items-center">
          <FaDatabase className="mr-3 text-cyan-400" /> Databases & Tools
        </li>
        {skills.database.map((each, _id) => (
          <li
            key={_id}
            className="w-full text-gray-300 transition-all duration-300 flex items-center hover:translate-x-2 group-hover:text-gray-100"
          >
            <FaCircle className="mr-2 text-cyan-500 text-[8px]" />
            {each}
          </li>
        ))}
        <div className="absolute bottom-2 right-4 opacity-50 text-8xl text-cyan-900/30">
          <FaDatabase />
        </div>
      </ul>

      {/* Backend Skills */}

      <ul className="relative w-full sm:w-[48%] lg:w-[31.33%] h-[15rem] rounded-xl overflow-hidden flex flex-col p-6 group m-[1%] border border-gray-700 bg-gray-800 transition-colors duration-200 shadow-lg shadow-cyan-900/10 hover:shadow-cyan-900/20 hover:shadow-cyan-900/20 transition-all duration-300 hover:transform hover:scale-[1.02] relative group">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-cyan-400" />
        <li className="text-cyan-400 text-2xl mb-4 font-semibold flex items-center">
          <FaServer className="mr-3 text-cyan-400" /> Backend
        </li>
        {skills.backend.map((each, _id) => (
          <li
            key={_id}
            className="w-full text-gray-300 transition-all duration-300 flex items-center hover:translate-x-2 group-hover:text-gray-100"
          >
            <FaCircle className="mr-2 text-cyan-500 text-[8px]" />
            {each}
          </li>
        ))}
        <div className="absolute bottom-2 right-4 opacity-50 text-8xl text-cyan-900/30">
          <FaServer />
        </div>
      </ul>
    </div>
  );
};

export default Skills;
