import DashboardNavbar from "@/components/ui/dashboard/dashboardNavbar";
import Menu from "@/components/ui/dashboard/menu";

import { SEO } from "../components/global";
import Listing from "@/components/ui/dashboard/listing";

const Dashboard = () => {
  return (
    <>
      <SEO title="AccomX | Dashboard" />
      <div className=" flex flex-col gap-4">
        <DashboardNavbar />
        <Listing />
        <Menu />
      </div>
    </>
  );
};

export default Dashboard;
