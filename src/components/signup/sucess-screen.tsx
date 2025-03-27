import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import type { FormData } from "@/components/signup-form";
import { Link } from "react-router-dom";

interface SuccessScreenProps {
  formData: FormData;
}

export default function SuccessScreen({ formData }: SuccessScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-md rounded-lg border bg-white p-8 text-center shadow-lg"
    >
      <div className="mb-6 flex justify-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <FaCheckCircle className="h-12 w-12 text-green-600" />
        </div>
      </div>

      <h2 className="mb-2 text-2xl font-bold text-gray-900">
        Registration Complete!
      </h2>
      <p className="mb-6 text-gray-600">
        Thank you for signing up, {formData.fullName.split(" ")[0]}! We're
        excited to help you find your perfect accommodation.
      </p>

      <div className="mb-8 rounded-lg bg-purple-50 p-4 text-left">
        <h3 className="mb-2 font-medium text-purple-800">What happens next?</h3>
        <ul className="space-y-2 text-sm text-purple-700">
          <li className="flex items-start">
            <span className="mr-2 text-[#8C52FF]">•</span>
            We'll send a confirmation email to <strong>{formData.email}</strong>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[#8C52FF]">•</span>
            You'll get access to our accommodation listings based on your
            preferences
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-[#8C52FF]">•</span>
            Our matching algorithm will suggest compatible roommates
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <button className="w-full rounded-md bg-[#8C52FF] px-4 py-2 font-medium text-white transition-colors hover:bg-[#7B45E8] focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:ring-offset-2">
          Browse Accommodations
        </button>
        <Link to="/" className="block">
          <button className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:ring-offset-2">
            Return to Home
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
