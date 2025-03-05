const Skills = (props) => {
  const { skills } = props;
  //   console.log(props.skills);
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay="500"
      data-aos-duration="1000"
      className="w-[90%] flex flex-row flex-wrap mx-auto"
    >
      <ul className="box-border w-full sm:w-[48%] sm:mx-[1%] lg:w-[31.33%] lg:mx-[1%] rounded-xl px-10 py-5 my-2 h-[15rem] bg-gray-900 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
        <li className="text-white text-2xl my-2 transition-colors duration-300">
          Frontend
        </li>
        {skills.frontend.map((each, _id) => (
          <li
            key={_id}
            className="w-full text-blue-300 transition-transform duration-300 flex items-center hover:translate-x-2 hover:text-blue-400"
          >
            <span className="mr-2 text-blue-500">•</span> {each}
          </li>
        ))}
      </ul>
      <ul className="box-border w-full sm:w-[48%] sm:mx-[1%] lg:w-[31.33%] lg:mx-[1%] rounded-xl px-10 py-5 my-2 h-[15rem] bg-gray-900 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
        <li className="text-white text-2xl my-2 transition-colors duration-300">
          Databases & Tools
        </li>
        {skills.database.map((each, _id) => (
          <li
            key={_id}
            className="w-full text-blue-300 transition-transform duration-300 flex items-center hover:translate-x-2 hover:text-blue-400"
          >
            <span className="mr-2 text-blue-500">•</span> {each}
          </li>
        ))}
      </ul>
      <ul className="box-border w-full sm:w-[48%] sm:mx-[1%] lg:w-[31.33%] lg:mx-[1%] rounded-xl px-10 py-5 my-2 h-[15rem] bg-gray-900 shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
        <li className="text-white text-2xl my-2 transition-colors duration-300">
          Backend{" "}
        </li>
        {skills.backend.map((each, _id) => (
          <li
            key={_id}
            className="w-full text-blue-300 transition-transform duration-300 flex items-center hover:translate-x-2 hover:text-blue-400"
          >
            <span className="mr-2 text-blue-500">•</span> {each}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
