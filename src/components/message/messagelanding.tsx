import { Link } from "react-router-dom";
import { User } from "../svgs";

const MessageLanding = ({ children }) => {
  return (
    <Link to="/messaging">
      <div className="flex justify-between items-center border-b p-2 mx-2 hover:bg-[#8c52ff1a] rounded-lg transition cursor-pointer">
        {/* User Profile Section */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="size-10 border-2 border-[#8C52FF] rounded-full flex items-center justify-center">
            <User className="size-8" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-semibold text-sm font-Sora truncate">
              {children}
            </span>
            <p className="text-xs text-gray-600 truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* Unread Message Badge */}
        <div className="bg-[#8C52FF] flex items-center justify-center text-white rounded-full px-2 py-1 text-xs font-medium">
          <span>2</span>
        </div>
      </div>
    </Link>
  );
};

export default MessageLanding;
