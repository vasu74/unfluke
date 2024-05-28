import { Button } from "@/components/ui/button";
import Menu from "./Menu";
import Tables from "./Tables";
import FlyOut from "./FlyOut";
import ShowContent from "./showContent";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row md:flex-row justify-between  md:justify-center  items-center px-3 text-center">
        <h2 className="text-4xl font-semibold text-center md:order-2 text-[#E27498]">
          LeaderBoard
        </h2>
        <FlyOut href="#" FlyoutContent={ShowContent}>
          <a className="">Show Option</a>
        </FlyOut>

        {/* <Button className="md:flex hidden" variant="secondary">
          My Earning
        </Button> */}
      </div>
      {/* menu bar  */}
      <Menu />
      <div className="w-full mt-10">
        <h1 className="text-2xl text-[#E27498] font-bold mb-3 px-6  md:px-3">
          Basic BackTest
        </h1>
        <div className="  px-6 md:px-3 rrounded-lg shadow-md py-3">
          <Tables />
        </div>
      </div>
    </>
  );
};

export default Hero;
