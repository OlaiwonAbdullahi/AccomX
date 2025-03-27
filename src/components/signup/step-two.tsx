import { FaInfoCircle } from "react-icons/fa";
import type { FormData } from "@/components/signup-form";

interface StepTwoProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export default function StepTwo({ formData, updateFormData }: StepTwoProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Academic & Accommodation Preferences
        </h2>
        <p className="text-gray-500">
          Help us find the perfect accommodation that matches your needs
        </p>
      </div>

      <div className="space-y-4">
        {/* Institution */}
        <div className="space-y-2">
          <label
            htmlFor="institution"
            className="block text-sm font-medium text-gray-700"
          >
            Name of Institution <span className="text-red-500">*</span>
          </label>
          <input
            id="institution"
            type="text"
            placeholder="Enter your university or college name"
            value={formData.institution}
            onChange={(e) => updateFormData({ institution: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          />
        </div>

        {/* Study Level */}
        <div className="space-y-2">
          <label
            htmlFor="studyLevel"
            className="block text-sm font-medium text-gray-700"
          >
            Level of Study <span className="text-red-500">*</span>
          </label>
          <select
            id="studyLevel"
            value={formData.studyLevel}
            onChange={(e) => updateFormData({ studyLevel: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select your level of study
            </option>
            {[
              "100L",
              "200L",
              "300L",
              "400L",
              "500L",
              "Postgraduate",
              "PhD",
            ].map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Department */}
        <div className="space-y-2">
          <label
            htmlFor="department"
            className="block text-sm font-medium text-gray-700"
          >
            Faculty/Department
          </label>
          <input
            id="department"
            type="text"
            placeholder="E.g., Engineering, Medicine, Arts"
            value={formData.department}
            onChange={(e) => updateFormData({ department: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          />
          <p className="text-xs text-gray-500">
            This helps with roommate matching
          </p>
        </div>

        {/* Accommodation Type */}
        <div className="space-y-2">
          <div className="flex items-center gap-1">
            <label
              htmlFor="accommodationType"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Accommodation Type{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="group relative">
              <FaInfoCircle className="h-4 w-4 cursor-help text-gray-400" />
              <div className="absolute left-0 top-6 z-10 hidden w-48 rounded-md bg-gray-800 p-2 text-xs text-white shadow-lg group-hover:block">
                This determines the type of listings we'll show you
              </div>
            </div>
          </div>
          <select
            id="accommodationType"
            value={formData.accommodationType}
            onChange={(e) =>
              updateFormData({ accommodationType: e.target.value })
            }
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select accommodation type
            </option>
            {[
              "Self-contained",
              "Shared Apartment",
              "Hostel (Single Room)",
              "Hostel (Shared Room)",
              "Off-campus Housing",
            ].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Range */}
        <div className="space-y-2">
          <label
            htmlFor="budgetRange"
            className="block text-sm font-medium text-gray-700"
          >
            Budget Range (per year) <span className="text-red-500">*</span>
          </label>
          <select
            id="budgetRange"
            value={formData.budgetRange}
            onChange={(e) => updateFormData({ budgetRange: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select your budget range
            </option>
            {[
              "Under ₦100,000",
              "₦100,000 - ₦200,000",
              "₦200,000 - ₦300,000",
              "₦300,000 - ₦500,000",
              "₦500,000 - ₦800,000",
              "Above ₦800,000",
            ].map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Location */}
        <div className="space-y-2">
          <label
            htmlFor="preferredLocation"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Location
          </label>
          <select
            id="preferredLocation"
            value={formData.preferredLocation}
            onChange={(e) =>
              updateFormData({ preferredLocation: e.target.value })
            }
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select your preferred location
            </option>
            {[
              "On Campus",
              "Close to Campus (< 1km)",
              "Near Campus (1-3km)",
              "Town Area",
              "Quiet Residential Area",
              "No Preference",
            ].map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500">
            This helps us filter accommodations by location
          </p>
        </div>
      </div>
    </div>
  );
}
