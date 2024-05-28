import { RiArrowDropDownLine } from "react-icons/ri";
import FlyOut from "./FlyOut"; // Ensure the import path is correct
import PricingContent from "./PricingContent";

const Menu = () => {
  return (
    <div className="mx-4 hidden md:flex">
      <div className="flex lg:max-w-7xl mx-auto justify-around py-3 px-2 items-center mt-10  rounded-md">
        <FlyOut href="#" FlyoutContent={PricingContent}>
          <span className="flex items-center">
            Historical Trading
            <RiArrowDropDownLine />
          </span>
        </FlyOut>
        <a href="#" className="hover:bg-white px-4 py-2 hover:rounded-md">
          Alert
        </a>
        <a href="#" className="hover:bg-white px-4 py-2 hover:rounded-md">
          Historical Chart
        </a>
        <a href="#" className="bg-white px-4 py-2 hover:rounded-lg">
          Scanners
        </a>
        <a href="#" className="hover:bg-white px-4 py-2 hover:rounded-md">
          <FlyOut href="#" FlyoutContent={PricingContent}>
            <span className="flex items-center">
              Pricing
              <RiArrowDropDownLine />
            </span>
          </FlyOut>
        </a>
        <a href="#" className="hover:bg-white px-4 py-2 hover:rounded-md">
          Advanced Backtest
        </a>
        <a href="#" className="hover:bg-white px-4 py-2 hover:rounded-md">
          Basic Backtest
        </a>
      </div>
    </div>
  );
};

export default Menu;
