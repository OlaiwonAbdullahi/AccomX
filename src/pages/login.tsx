import Navbar from "@/components/ui/Navbar";
import { SEO } from "../components/global";
import { Input } from "@/components/ui";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <SEO title="AccomX | Login" />
      <div className="min-h-[100dvh] flex flex-col">
        <Navbar />

        {/* Centering the form */}
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col gap-6 items-center border border-gray-200 rounded-lg p-6 w-96 shadow-lg">
            {/* Logo */}
            <div className="text-2xl font-Sora">
              Accom<span className="text-[#8C52FF]">X</span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-medium">Login to your account</h2>

            {/* Login Form */}
            <form className="flex flex-col gap-4 w-full">
              {/* Email Input */}
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

              {/* Password Input */}
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

              {/* Forgot Password */}
              <h3 className="text-[#8C52FF] self-start text-sm cursor-pointer hover:underline">
                Forgot Password?
              </h3>

              {/* Login Button */}
              <div className="mt-2">
                <Link to="/dashboard">
                  <button
                    type="submit"
                    className="bg-[#8C52FF] text-white font-medium rounded-md hover:bg-[#7b3de8] px-4 py-2 w-full"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
