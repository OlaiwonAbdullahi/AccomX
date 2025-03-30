import { User } from "../svgs";

const Messagelanding = ({ children }) => {
  return (
    <div>
      <div className=" flex justify-between items-center border-b p-1 mx-2 hover:bg-[#8c52ff42] rounded-lg">
        <div className=" flex flex-row gap-3 items-center">
          <div className=" size-10 border-2 border-[#8C52FF] flex items-center rounded-full">
            <User className=" size-10" />
          </div>
          <div className=" flex flex-col">
            <span className="font-semibold text-sm font-Sora">{children}</span>
            <p className=" text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className=" bg-[#8C52FF]  flex p-1 text-white rounded-full px-2 text-xs ">
          <span>2</span>
        </div>
      </div>
    </div>
  );
};

export default Messagelanding;
