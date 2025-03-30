import { LuSend } from "react-icons/lu";
import { User } from "../svgs";
import { Button } from "../ui";
import { TbListDetails } from "react-icons/tb";

const Roomatecard = () => {
  return (
    <div>
      <div className="cursor-pointer border-2 border-[#8C52FF] rounded-lg text-lg font-medium bg-transparent hover:bg-[#8c52ff4d] font-Sora p-2 m-3 flex justify-between items-center gap-4 transition ">
        <div className=" flex gap-3 p-1 justify-center items-center">
          <div className=" border-2 border-[#8C52FF] rounded-full size-20 flex justify-center items-center">
            <User className="size-20" />
          </div>
          <div className=" text-sm">
            <h2>
              <span className="font-semibold">Name:</span>
              <span>Abdullahi</span>
            </h2>
            <h2>
              <span className="font-semibold">Faculty:</span>
              <span>Computing & Infomatics</span>
            </h2>
            <h2>
              <span className="font-semibold">Department:</span>
              <span>Computer Science</span>
            </h2>
            <h2>
              <span className="font-semibold">Gender:</span>
              <span>Male</span>
            </h2>
          </div>
        </div>
        <div className=" flex-col flex gap-3">
          <Button className="bg-[#8C52FF] text-white rounded-md font-light ">
            {" "}
            <div className=" flex  items-center justify-center gap-2">
              <div className="">
                <TbListDetails />
              </div>
              <div className="">Details</div>
            </div>
          </Button>
          <Button className="bg-[#8C52FF] text-white rounded-md font-light">
            {" "}
            <div className=" flex  items-center justify-center gap-2">
              <div className="">
                <LuSend />
              </div>
              <div className="">Message</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Roomatecard;
