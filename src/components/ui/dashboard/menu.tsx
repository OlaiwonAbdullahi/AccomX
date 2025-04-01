import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LuLayoutGrid,
  LuSparkles,
  LuMessageCircle,
  LuUsers,
} from "react-icons/lu";
import { PiGearSix } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import { TbSmartHome } from "react-icons/tb";
import { TfiBell } from "react-icons/tfi";
import Chatbot from "@/components/chatbot/chatbot";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openChatbot, setOpenChatbot] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <div className="fixed bottom-4 left-4 flex flex-col items-start">
      {/* Menu List */}
      <div
        className={`bg-white shadow-lg rounded-lg p-2 transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {menuItems.map(({ icon: Icon, label, path }, index) => {
            const isActive = location.pathname === path; // Check if item is active
            return (
              <Link to={path} key={index}>
                <li
                  className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition-all ${
                    isActive
                      ? "bg-[#8C52FF] text-white" // Active state styles
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  <Icon
                    className={`size-5 ${
                      isActive ? "text-white" : "text-gray-700"
                    }`}
                  />
                  <span>{label}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* Floating Buttons */}
      <div className="flex gap-2">
        {/* Chat Button */}
        <button
          className="bg-[#8C52FF] w-12 h-12 flex items-center justify-center rounded-full shadow-md z-50 text-white"
          onClick={() => setOpenChatbot(!openChatbot)}
        >
          {openChatbot ? (
            <LiaTimesSolid className="size-6" />
          ) : (
            <LuSparkles className="size-6" />
          )}
        </button>

        {/* Menu Button */}
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

      {/* Chat Component - Render outside menu div to avoid layout issues */}
      <Chatbot open={openChatbot} onClose={() => setOpenChatbot(false)} />
    </div>
  );
};

const menuItems = [
  { icon: TbSmartHome, label: "Home", path: "/dashboard" },
  { icon: LuUsers, label: "Roommates", path: "/roomates" },
  { icon: TfiBell, label: "Notifications", path: "/notification" },
  { icon: LuMessageCircle, label: "Messages", path: "/message" },
  { icon: PiGearSix, label: "Settings", path: "/setting" },
];

export default Menu;
