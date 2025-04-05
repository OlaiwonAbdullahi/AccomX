import { SEO } from "@/components/global";
import { Button } from "@/components/ui";
import DashboardNavbar from "@/components/ui/dashboard/dashboardNavbar";
import Menu from "@/components/ui/dashboard/menu";
import { GoCheckCircle } from "react-icons/go";

const Notification = () => {
  return (
    <div className=" bg-white">
      <SEO title="AccomX | Notifications" />
      <DashboardNavbar />
      <div className=" border p-2 flex gap-2 items-center justify-between hover:bg-[#8c52ff2a]">
        <div className=" flex gap-2 items-center">
          <div className="">
            <GoCheckCircle className=" text-[#8C52FF] size-6" />
          </div>
          <span className=" text-lg">You got a new Apartment🎉🎊</span>
        </div>
        <div className="">
          <Button className=" border-2 border-[#8C52FF] rounded-xl flex items-center justify-center font-thin text-sm">
            View
          </Button>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Notification;
