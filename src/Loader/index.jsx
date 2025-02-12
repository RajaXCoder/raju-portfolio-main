import { MutatingDots } from "react-loader-spinner";

const Loader = () => (
  <div className="flex justify-center items-center h-[22rem]">
    <MutatingDots
      height="100"
      width="100"
      color="cyan"
      secondaryColor="#00ff75"
    />
  </div>
);

export default Loader;
