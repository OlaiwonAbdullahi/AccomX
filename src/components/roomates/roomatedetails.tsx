import { TbSocial, TbVacuumCleaner } from "react-icons/tb";
import { User } from "../svgs";
import { Button } from "../ui";
import DashboardNavbar from "../ui/dashboard/dashboardNavbar";
import { LuBed, LuSend, LuSparkles } from "react-icons/lu";
import { LiaUserTagSolid } from "react-icons/lia";
import { GoNumber, GoWorkflow } from "react-icons/go";
import { PiGenderFemale } from "react-icons/pi";

const RoommateDetails = ({ roommate }) => {
  return (
    <div>
      <DashboardNavbar />
      <div className="roommate-details-container flex p-4 bg-gray-100 min-h-screen">
        {/* Left Section: Roommate Info */}
        <div className="roommate-info w-full h-auto md:w-1/3 flex flex-col items-center p-6 bg-white shadow-lg rounded-lg border border-gray-300">
          <div className="user-icon mb-4">
            <User className="w-32 h-32 text-gray-700" />
          </div>
          <h2 className="roommate-name text-xl font-semibold mb-2">
            {roommate?.name || "John Doe"}
          </h2>
          <p className="roommate-major text-gray-600">
            {roommate?.major || "Unknown Major"}
          </p>
          <div className="flex flex-row gap-2 w-full m-3">
            <Button className="bg-[#8C52FF] text-white gap-4 rounded-md font-medium flex items-center  px-4 py-2 shadow-md">
              <div className="">
                <LuSend className="size-5" />
              </div>
              <span className=" whitespace-nowrap">Message</span>
            </Button>
          </div>
        </div>

        {/* Right Section: Additional Details */}
        <div className="roommate-extra w-full md:w-2/3 p-6 bg-white shadow-lg rounded-lg border border-gray-300 mt-0 md:ml-4">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Roommate Details
          </h3>
          <ul className="details-list space-y-2 text-gray-700 text-sm">
            {/* Basic Information */}
            <li className=" flex gap-2 items-center ">
              <strong>
                <LiaUserTagSolid className=" text-[#8C52FF] size-5" />
              </strong>{" "}
              {roommate?.name || "John Doe"}
            </li>
            <li className=" flex gap-2 items-center ">
              <strong>
                <GoNumber className=" text-[#8C52FF] size-5" />
              </strong>{" "}
              {roommate?.age || "N/A"}
            </li>
            <li className=" flex gap-2 items-center ">
              <strong>
                <PiGenderFemale className=" text-[#8C52FF] size-5" />
              </strong>{" "}
              {roommate?.gender || "N/A"}
            </li>
            <li className=" flex gap-2 items-center ">
              <strong>
                <GoWorkflow className=" text-[#8C52FF] size-5" />
              </strong>{" "}
              {roommate?.occupation || "N/A"}
            </li>

            <li className=" flex gap-2 items-center ">
              <strong>
                <LuBed className=" text-[#8C52FF] size-5" />
              </strong>{" "}
              {roommate?.sleepingHabits || "N/A"}
            </li>

            {/* Room Sharing Preferences */}
            <li className=" flex gap-2 items-center ">
              <strong>Roommate Gender: </strong>{" "}
              {roommate?.preferredGender || "Any"}
            </li>
            <li className=" flex gap-2 items-center ">
              <strong>
                <TbVacuumCleaner className=" text-[#8C52FF] size-5" />
              </strong>{" "}
              {roommate?.cleanliness || "Average"}
            </li>
            <li className=" flex gap-2 items-center ">
              <strong>
                <TbSocial className=" text-[#8C52FF] size-5" />
              </strong>{" "}
              {roommate?.socialLevel || "Moderate"}
            </li>
            <li>
              <div className="text-xs h-4 flex items-center gap-1 w-1/3 whitespace-nowrap bg-[#a78bfa60] rounded-full p-1 px-2 text-[#8C52FF]">
                <LuSparkles />
                <span className=" uppercase">Currently Needs Roomate</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Example usage with dummy data
const sampleRoommate = {
  name: "Abdullahi Olaiwon",
  age: 24,
  gender: "Male",
  occupation: "Student",
  major: "Computer Science",
  smoking: false,
  drinking: false,
  pets: false,
  diet: "Non-Vegetarian",
  sleepingHabits: "Night Owl",
  preferredGender: "Any",
  cleanliness: "Very Clean",
  socialLevel: "Moderate",
};

export default () => <RoommateDetails roommate={sampleRoommate} />;
