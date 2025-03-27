//import { useState } from "react";
import { FaCalendarAlt, FaInfoCircle } from "react-icons/fa";
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

import type { FormData } from "@/components/signup-form";

interface StepOneProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export default function StepOne({ formData, updateFormData }: StepOneProps) {
  /* const [date, setDate] = useState<Date | null>(
    formData.dateOfBirth ? new Date(formData.dateOfBirth) : null
  );

  // Handle date selection
  const handleDateSelect = (date: Date | null) => {
    setDate(date);
    if (date) {
      updateFormData({ dateOfBirth: date.toISOString() });
    }
  };*/

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Personal Information
        </h2>
        <p className="text-gray-500">
          Tell us about yourself so we can personalize your experience
        </p>
      </div>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => updateFormData({ fullName: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => updateFormData({ email: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          />
          <p className="text-xs text-gray-500">
            We'll send your confirmation details here
          </p>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => updateFormData({ phone: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          />
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            {/* <DatePicker
              selected={date}
              onChange={handleDateSelect}
              maxDate={new Date()}
              minDate={new Date("1940-01-01")}
              showYearDropdown
              dropdownMode="select"
              placeholderText="Select your date of birth"
              className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
            />*/}
            <FaCalendarAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <p className="text-xs text-gray-500">
            You must be at least 16 years old
          </p>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <label className="block text-sm font-medium text-gray-700">
              Gender <span className="text-red-500">*</span>
            </label>
            <div className="group relative">
              <FaInfoCircle className="h-4 w-4 cursor-help text-gray-400" />
              <div className="absolute left-0 top-6 z-10 hidden w-48 rounded-md bg-gray-800 p-2 text-xs text-white shadow-lg group-hover:block">
                This helps us with roommate matching and accommodation
                recommendations
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {["Male", "Female", "Non-binary", "Prefer not to say"].map(
              (gender) => (
                <div key={gender} className="flex items-center">
                  <input
                    type="radio"
                    id={`gender-${gender}`}
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={() => updateFormData({ gender })}
                    className="h-4 w-4 border-gray-300 text-[#8C52FF] focus:ring-[#8C52FF]"
                  />
                  <label
                    htmlFor={`gender-${gender}`}
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {gender}
                  </label>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
