import { useState } from "react";
import { LuLayoutGrid } from "react-icons/lu";
import { FaHome, FaBell, FaEnvelope, FaCog } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

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
              <Icon className="text-gray-700" />
              <span className="text-gray-800">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating Button */}
      <button
        className="bg-[#8C52FF] w-12 h-12 flex items-center justify-center rounded-full shadow-md text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <LiaTimesSolid className="size-6" />
        ) : (
          <LuLayoutGrid className="size-6" />
        )}
      </button>
    </div>
  );
};

const menuItems = [
  { icon: FaHome, label: "Home" },
  { icon: FaBell, label: "Notifications" },
  { icon: FaEnvelope, label: "Messages" },
  { icon: FaCog, label: "Settings" },
];

export default Menu;
