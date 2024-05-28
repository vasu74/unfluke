import { RiArrowDropDownLine } from "react-icons/ri";
import FlyOut from "./FlyOut"; // Ensure the import path is correct
import PricingContent from "./PricingContent";

const Menu = () => {
  return (
    <div className="mx-4 hidden md:flex">
      <div className="flex lg:max-w-7xl mx-auto justify-around py-3 px-2 items-center mt-10 gap-4  rounded-md">
        <FlyOut href="#" FlyoutContent={PricingContent}>
          <span className="flex items-center">
            Historical Trading
            <RiArrowDropDownLine />
          </span>
        </FlyOut>
        <div className="relative inline-block group">
          <a href="#" className="px-4 py-2">
            Alert
          </a>
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </div>

        <div className="relative inline-block group">
          <a href="#" className="px-4 py-2">
            Historical Chart
          </a>
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </div>
        <div className="relative inline-block group">
          <a href="#" className="px-4 py-2">
            Scanner
          </a>
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </div>
        <a href="#" className="hover:bg-white px-4 py-2 hover:rounded-md">
          <FlyOut href="#" FlyoutContent={PricingContent}>
            <span className="flex items-center">
              Pricing
              <RiArrowDropDownLine />
            </span>
          </FlyOut>
        </a>
        <div className="relative inline-block group">
          <a href="#" className="px-4 py-2">
            Advanced Backlist
          </a>
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </div>
        <div className="relative inline-block group">
          <a href="#" className="px-4 py-2">
            Basic BackTest
          </a>
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
