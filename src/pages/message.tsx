import DashboardNavbar from "@/components/ui/dashboard/dashboardNavbar";
import Menu from "@/components/ui/dashboard/menu";

import { SEO } from "../components/global";
import Messagelanding from "@/components/message/messagelanding";
const Message = () => {
  return (
    <>
      <SEO title="AccomX | Message" />
      <div className=" flex flex-col gap-4 bg-white">
        <DashboardNavbar />
        <Messagelanding>Abdullahi Olaiwon</Messagelanding>
        <Messagelanding>Ismail Olaiwon</Messagelanding>
        <Messagelanding>John Doe</Messagelanding>
        <Menu />
      </div>
    </>
  );
};

export default Message;
