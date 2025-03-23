import { FaExternalLinkAlt } from "react-icons/fa";

const Certificates = (item) => {
  const { certificate } = item;
  return (
    <li
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="500"
      data-aos-duration="1000"
      className="relative w-full sm:w-[48%] lg:w-[23%] h-40 rounded-xl overflow-hidden flex flex-col p-6 group m-[1%] border border-gray-700 bg-gray-800 hover:bg-gray-700/50 transition-colors duration-200 shadow-lg shadow-cyan-900/10 hover:shadow-cyan-900/20"
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-cyan-400" />

      <div className="relative h-full flex flex-col justify-between">
        <div>
          <h2 className="text-gray-100 text-lg font-semibold mb-2">
            {certificate.name}
          </h2>
          <p className="text-cyan-400 text-sm font-medium">NxtWave</p>
        </div>

        <div className="flex items-center justify-between">
          <a
            className="text-cyan-400 text-sm font-medium hover:text-cyan-300 hover:underline flex items-center"
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate
            <FaExternalLinkAlt className="ml-2" />
          </a>
          <span className="text-cyan-600 text-2xl">•</span>
        </div>
      </div>

      <div className="absolute bottom-2 right-4 opacity-20 text-8xl font-bold text-cyan-900/50 select-none">
        ✓
      </div>
    </li>
  );
};

export default Certificates;
