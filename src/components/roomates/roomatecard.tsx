import { LuSend } from "react-icons/lu";
import { TbListDetails } from "react-icons/tb";
import { User } from "../svgs";
import { Button } from "../ui";
import { Link } from "react-router-dom";

const RoommateCard = () => {
  return (
    <div className="border-2 border-[#8C52FF] rounded-lg bg-transparent hover:bg-[#8c52ff1a] transition p-4 m-3 flex justify-between items-center gap-6 shadow-sm cursor-pointer">
      {/* Profile Section */}
      <div className="flex gap-4 items-center">
        <div className="border-2 border-[#8C52FF] rounded-full size-20 flex justify-center items-center">
          <User className="size-16" />
        </div>
        <div className="text-sm space-y-1">
          <p className="font-semibold">
            Name: <span className="font-normal">Abdullahi</span>
          </p>
          <p className="font-semibold">
            Faculty:{" "}
            <span className="font-normal">Computing & Informatics</span>
          </p>
          <p className="font-semibold">
            Department: <span className="font-normal">Computer Science</span>
          </p>
          <p className="font-semibold">
            Gender: <span className="font-normal">Male</span>
          </p>
        </div>
      </div>

      {/* Actions Section */}
      <div className="flex flex-col gap-2">
        <Link to="/roomatedetails">
          <Button className="bg-[#8C52FF] text-white rounded-md font-medium flex items-center gap-2 px-4 py-2 shadow-md">
            <TbListDetails className="size-5" />
            <span>View Details</span>
          </Button>
        </Link>
        <Button className="bg-[#8C52FF] text-white rounded-md font-medium flex items-center gap-2 px-4 py-2 shadow-md">
          <LuSend className="size-5" />
          <span>Send Message</span>
        </Button>
      </div>
    </div>
  );
};

export default RoommateCard;
