import { GoSearch } from "react-icons/go";
import Input from "../input";
import { User } from "@/components/svgs";
import { LuMessageCircle } from "react-icons/lu";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 flex items-center justify-between p-2 px-5 bg-white border-b border-b-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <Link to="/">
          <div className="text-2xl font-Sora">
            Accom<span className="text-[#8C52FF] ">X</span>
          </div>
        </Link>
        <div className=" flex items-center border-violet-400 border p-1 rounded-md">
          <Input
            type="text"
            className=" placeholder:text-[#A9A9A9] placeholder:text-xs text-xs h-6 w-full"
            placeholder="Search...."
          />
          <GoSearch className=" text-[#8C52FF] text-xl " />
        </div>
        <div className="flex items-center gap-3">
          <Link to="/message">
            <div className=" flex">
              <LuMessageCircle className="size-5 hover:text-[#8C52FF] text-black" />
              <sup className=" text-white text-xs w-4 flex items-center justify-center rounded-full  bg-[#8C52FF]">
                2
              </sup>
            </div>
          </Link>
          <Link to="/settings">
            <div className="">
              <User className=" size-7" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
