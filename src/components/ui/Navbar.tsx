import { FaMoon } from "react-icons/fa";
import Button from "./button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-2 bg-white border-b border-b-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
      <Link to="/">
        <div className="text-2xl font-Sora">
          Accom<span className="text-[#8C52FF] ">X</span>
        </div>
      </Link>
      <div className="">
        <nav>
          <ul className=" flex gap-3 text-sm">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <div className="">
          <FaMoon className="text-xl text-[#8C52FF]" />
        </div>
        <div className="">
          <Link to="/login">
            <Button className="text-[#8C52FF] border whitespace-nowrap border-[#8C52FF] rounded-full text-sm font-extralight bg-white hover:text-white hover:bg-[#8C52FF] hover:border-white px-4 py-1">
              Log In
            </Button>
          </Link>
        </div>
        <div className="">
          <Link to="signup">
            <Button className="bg-[#8C52FF] rounded-full whitespace-nowrap text-sm font-extralight text-white px-4 py-1 hover:bg-white hover:text-[#8C52FF] hover: border-[#8C52FF] hover:border">
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
