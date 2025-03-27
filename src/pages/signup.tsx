import Navbar from "@/components/ui/navbar";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-7 ">
        <main className="min-h-screen bg-gradient-to-b from-white w-9/12 to-gray-50 py-2 flex justify-center flex-col items-center border border-gray-200 rounded shadow-lg">
          <div className="container mx-auto px-4">
            <h1 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl font-Sora">
              Sign up on AccomX
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
              Join thousands of students who have found their ideal living space
              through our platform. Complete your profile in just 3 simple
              steps.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <label htmlFor="as" className=" self-start">
              Sign up as
            </label>
            <Link to="/studentsignup">
              <div
                id="as"
                className=" border whitespace-nowrap border-[#8C52FF] rounded text-sm font-extralight bg-transparent hover:bg-[#8c52ff4d] font-Sora w-full p-20 py-4 self-start"
              >
                <input type="radio" name="" id="Student" /> Student
              </div>
            </Link>
            <div className=" border whitespace-nowrap border-[#8C52FF] rounded text-sm font-extralight bg-transparent hover:bg-[#8c52ff4d] font-Sora w-full p-20 py-4 self-start">
              <input type="radio" name="" id="Landloard" /> LandLord
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
