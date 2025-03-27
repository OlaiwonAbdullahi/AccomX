import { useState } from "react";
import { LuLayoutGrid, LuSparkles } from "react-icons/lu";
import { PiGearSix } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import { TbSmartHome } from "react-icons/tb";
import { TfiBell } from "react-icons/tfi";
import { LuMessageCircle, LuUsers } from "react-icons/lu";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4  flex flex-col items-end">
      {/* Menu List */}
      <div
        className={`bg-white shadow-lg rounded-lg p-2 transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map(({ icon: Icon, label }, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer"
            >
              <Icon className="text-gray-700 size-5" />
              <span className="text-gray-800">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className=" flex gap-2">
        <button className="bg-[#8C52FF] w-12 h-12 flex items-center justify-center rounded-full shadow-md z-50 text-white">
          <LuSparkles className="size-6" />
        </button>

        <button
          className="bg-[#8C52FF] w-12 h-12 flex items-center justify-center rounded-full shadow-md z-50 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <LiaTimesSolid className="size-6" />
          ) : (
            <LuLayoutGrid className="size-6" />
          )}
        </button>
      </div>
    </div>
  );
};

const menuItems = [
  { icon: TbSmartHome, label: "Home" },
  { icon: LuUsers, label: "Roomates" },
  { icon: TfiBell, label: "Notifications" },
  { icon: LuMessageCircle, label: "Messages" },
  { icon: PiGearSix, label: "Settings" },
];

export default Menu;
