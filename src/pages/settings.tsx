import { SEO } from "@/components/global";
import DashboardNavbar from "@/components/ui/dashboard/dashboardNavbar";
import Menu from "@/components/ui/dashboard/menu";

const Settings = () => {
  return (
    <div>
      <SEO title="AccomX | Settings" />
      <DashboardNavbar />
      <div className=" ">
        <div className="flex flex-col gap-4 bg-white shadow-sm rounded-lg mt-4 mx-4 p-4 justify-center items-center w-full md:w-3/5">
          <div className="flex flex-row gap-2 px-4 py-2 justify-between items-center w-full">
            <span className="text-lg font-Sora font-bold">Profile Details</span>
            <span className="text-sm text-gray-500 font-Sora font-normal">
              Manage your account details
            </span>
          </div>
          <div className="w-full">
            <form action="">
              <div className="flex flex-col">
                <div className="flex flex-col gap-1 py-1 justify-between items-center w-1/3">
                  <label
                    htmlFor="name"
                    className="text-sm font-Sora font-bold self-start"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 py-1 justify-between items-center w-1/3">
                  <label
                    htmlFor="email"
                    className="text-sm font-Sora font-bold self-start"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 py-1 justify-between items-center w-1/3">
                  <label
                    htmlFor="phone"
                    className="text-sm font-Sora font-bold self-start"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="border border-gray-300 rounded-md p-2 w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#8C52FF] text-white rounded-md p-2 w-full"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Settings;
