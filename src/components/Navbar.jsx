import logo from "../assets/logo.png";
import SearchInput from "./SearchInput";
import LoginContent from "./LoginContent";
import { RxAvatar } from "react-icons/rx";
import FlyOut from "./FlyOut";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between sm:px-6 sm:p-2 p-2 px-4 ">
      {/* logo */}

      <a href="#" className="flex  items-center justify-center ">
        <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
        <span className="text-2xl font-semibold">Unflake</span>
      </a>

      {/* search bar  */}
      <div id="search" className=" lg:flex-1 sm:flex hidden">
        <SearchInput />
      </div>
      {/* Third Menu */}
      <div className="flex items-center justify-around gap-10 shadow-sm hover:shadow-md px-6  py-2 rounded-full  ">
        <div className="relative inline-block group">
          <a href="#" className="px-4 py-2">
            Notification
          </a>
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </div>
        <div className="relative inline-block group">
          <a href="#" className="px-4 py-2">
            Earning
          </a>
          <span className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </div>

        <FlyOut href="#" FlyoutContent={LoginContent}>
          <span>
            <RxAvatar className="w-6 h-6" />
          </span>
        </FlyOut>
      </div>
    </nav>
  );
};
export default Navbar;
