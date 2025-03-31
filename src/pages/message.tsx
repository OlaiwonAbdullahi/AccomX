import DashboardNavbar from "@/components/ui/dashboard/dashboardNavbar";
import Menu from "@/components/ui/dashboard/menu";

import { SEO } from "../components/global";
import Messaging from "@/components/message/messaging";
const Message = () => {
  return (
    <>
      <SEO title="AccomX | Message" />
      <div className=" flex flex-col bg-white">
        <DashboardNavbar />
        <Messaging />
        <Menu />
      </div>
    </>
  );
};

export default Message;
