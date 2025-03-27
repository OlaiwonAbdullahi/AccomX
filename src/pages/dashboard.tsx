import DashboardNavbar from "@/components/ui/dashboard/dashboardNavbar";
import NotFound from "./not-found";
import Menu from "@/components/ui/dashboard/menu";

import { SEO } from "../components/global";

const Dashboard = () => {
  return (
    <>
      <SEO title="AccomX | Dashboard" />
      <div>
        <DashboardNavbar />
        <NotFound />
        <Menu />
      </div>
    </>
  );
};

export default Dashboard;
