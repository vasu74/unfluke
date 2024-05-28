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
      <div className="flex items-center justify-around gap-6 shadow-sm hover:shadow-md px-6  py-2 rounded-full  ">
        <a href="#">Notification</a>
        <a href="#">Earning</a>

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
