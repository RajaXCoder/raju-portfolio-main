const Certificates = (item) => (
  <li className="relative w-full sm:w-[48%] lg:w-[23%] h-32 rounded-xl overflow-hidden flex flex-col p-6 group m-[1%]">
    <div className="absolute inset-[1px] rounded-lg bg-gray-800 z-10"></div>
    <div className="absolute w-80 h-80 bg-white opacity-0 group-hover:opacity-10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
    <div className="absolute left-2 top-6 w-1 h-24 bg-gradient-to-b from-blue-400 via-indigo-500 to-purple-500 transition-transform group-hover:translate-x-1 z-20"></div>
    <h2 className="text-blue-400 text-base font-medium z-20 relative">
      {item.name}
    </h2>
    <p className="my-3 text-white text-xs font-medium z-20 relative">NxtWave</p>
    <a
      className="text-blue-400 text-xs z-20 relative hover:text-blue-600"
      href={item.url}
    >
      Visit
    </a>
  </li>
);

export default Certificates;
