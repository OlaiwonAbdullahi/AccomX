import Navbar from "@/components/ui/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [role, setRole] = useState<"student" | "landlord" | "">("");
  const navigate = useNavigate();

  // Handle selection and navigation
  const handleSelection = (selectedRole: "student" | "landlord") => {
    setRole(selectedRole);
    if (selectedRole === "student") {
      navigate("/studentsignup");
    } else {
      navigate("/landlordsignup"); // Ensure this route exists
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-7">
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 w-9/12 py-8 flex flex-col items-center border border-gray-200 rounded shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl font-Sora">
              Sign up on AccomX
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-gray-600">
              Join thousands of students who have found their ideal living space
              through our platform. Complete your profile in just 3 simple
              steps.
            </p>
          </div>

          {/* Role Selection */}
          <div className="flex flex-col gap-6 w-3/4">
            <p className="text-lg font-medium text-gray-700">Sign up as:</p>

            {/* Student Selection */}
            <div
              onClick={() => handleSelection("student")}
              className={`cursor-pointer border border-[#8C52FF] rounded-lg text-lg font-medium bg-transparent hover:bg-[#8c52ff4d] font-Sora p-6 flex items-center gap-4 transition ${
                role === "student" ? "bg-[#8c52ff4d]" : ""
              }`}
            >
              <input
                type="radio"
                id="student"
                name="signupRole"
                checked={role === "student"}
                onChange={() => handleSelection("student")}
                className="hidden"
              />
              <label htmlFor="student" className="cursor-pointer">
                Student
              </label>
            </div>

            {/* Landlord Selection */}
            <div
              onClick={() => handleSelection("landlord")}
              className={`cursor-pointer border border-[#8C52FF] rounded-lg text-lg font-medium bg-transparent hover:bg-[#8c52ff4d] font-Sora p-6 flex items-center gap-4 transition ${
                role === "landlord" ? "bg-[#8c52ff4d]" : ""
              }`}
            >
              <input
                type="radio"
                id="landlord"
                name="signupRole"
                checked={role === "landlord"}
                onChange={() => handleSelection("landlord")}
                className="hidden"
              />
              <label htmlFor="landlord" className="cursor-pointer">
                Landlord
              </label>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
