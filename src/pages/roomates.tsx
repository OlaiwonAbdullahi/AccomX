import DashboardNavbar from "@/components/ui/dashboard/dashboardNavbar";
import Menu from "@/components/ui/dashboard/menu";

import { SEO } from "../components/global";
import Roomatecard from "@/components/roomates/roomatecard";

const Roomates = () => {
  return (
    <>
      <SEO title="AccomX | Roomates" />
      <div className=" flex flex-col gap-4 bg-white">
        <DashboardNavbar />
        <Roomatecard />
        <Menu />
      </div>
    </>
  );
};

export default Roomates;
