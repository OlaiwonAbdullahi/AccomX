import Navbar from "@/components/ui/Navbar";
import { SEO } from "../components/global";
import { Input } from "@/components/ui";

export default function Login() {
  return (
    <>
      <SEO title="AccomX | Login" />
      <div className="min-h-[100dvh] flex flex-col">
        <Navbar />

        {/* Centering the form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col gap-4 items-center border border-gray-200 rounded p-6 w-96 shadow-lg">
            <div className="text-2xl font-Sora">
              Accom<span className="text-[#8C52FF]">X</span>
            </div>
            <h2 className="text-lg font-medium">Login to your account</h2>

            <form className="flex flex-col gap-3 w-full">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="border-violet-400 border placeholder:text-violet-700 rounded-md h-9 w-full"
                  placeholder="Your Email"
                  autoComplete="email"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  className="border-violet-400 border placeholder:text-[#A9A9A9] rounded-md h-9 w-full"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>

              <h3 className="text-[#8C52FF] self-start text-sm cursor-pointer hover:underline">
                Forgot Password?
              </h3>

              <button
                type="submit"
                className="bg-[#8C52FF] text-white font-medium py-2 rounded-md mt-2 hover:bg-[#7b3de8]"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
