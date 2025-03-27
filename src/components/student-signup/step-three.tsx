import type React from "react";

import { useState } from "react";
import { FaUpload, FaTimes } from "react-icons/fa";
import type { FormData } from "@/components/signup-form";

interface StepThreeProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

export default function StepThree({
  formData,
  updateFormData,
}: StepThreeProps) {
  const [dragActive, setDragActive] = useState(false);

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      updateFormData({ studentIdFile: e.target.files[0] });
    }
  };

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      updateFormData({ studentIdFile: e.dataTransfer.files[0] });
    }
  };

  // Remove uploaded file
  const removeFile = () => {
    updateFormData({ studentIdFile: null });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-900">
          Lifestyle & Verification
        </h2>
        <p className="text-gray-500">
          Help us match you with compatible roommates and verify your student
          status
        </p>
      </div>

      <div className="space-y-4">
        {/* Personality Type */}
        <div className="space-y-2">
          <label
            htmlFor="personalityType"
            className="block text-sm font-medium text-gray-700"
          >
            Personality Type <span className="text-red-500">*</span>
          </label>
          <select
            id="personalityType"
            value={formData.personalityType}
            onChange={(e) =>
              updateFormData({ personalityType: e.target.value })
            }
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select your personality type
            </option>
            {["Introvert", "Extrovert", "Ambivert"].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500">
            This helps with roommate matching
          </p>
        </div>

        {/* Sleeping Habits */}
        <div className="space-y-2">
          <label
            htmlFor="sleepingHabits"
            className="block text-sm font-medium text-gray-700"
          >
            Sleeping Habits <span className="text-red-500">*</span>
          </label>
          <select
            id="sleepingHabits"
            value={formData.sleepingHabits}
            onChange={(e) => updateFormData({ sleepingHabits: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select your sleeping habits
            </option>
            {[
              "Early Sleeper (Before 10PM)",
              "Average (10PM-12AM)",
              "Night Owl (After 12AM)",
              "Irregular",
            ].map((habit) => (
              <option key={habit} value={habit}>
                {habit}
              </option>
            ))}
          </select>
        </div>

        {/* Study Habits */}
        <div className="space-y-2">
          <label
            htmlFor="studyHabits"
            className="block text-sm font-medium text-gray-700"
          >
            Study Habits
          </label>
          <select
            id="studyHabits"
            value={formData.studyHabits}
            onChange={(e) => updateFormData({ studyHabits: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select your study habits
            </option>
            {[
              "Prefers Quiet",
              "Moderate Noise OK",
              "Studies with Music/TV",
              "Studies in Library/Outside",
            ].map((habit) => (
              <option key={habit} value={habit}>
                {habit}
              </option>
            ))}
          </select>
        </div>

        {/* Roommate Gender Preference */}
        <div className="space-y-2">
          <label
            htmlFor="roommateGender"
            className="block text-sm font-medium text-gray-700"
          >
            Preferred Roommate Gender
          </label>
          <select
            id="roommateGender"
            value={formData.roommateGender}
            onChange={(e) => updateFormData({ roommateGender: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select preferred roommate gender
            </option>
            {["Same as mine", "Any gender", "Male only", "Female only"].map(
              (gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              )
            )}
          </select>
        </div>

        {/* Pet Tolerance */}
        <div className="space-y-2">
          <label
            htmlFor="petTolerance"
            className="block text-sm font-medium text-gray-700"
          >
            Pet Tolerance
          </label>
          <select
            id="petTolerance"
            value={formData.petTolerance}
            onChange={(e) => updateFormData({ petTolerance: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select your pet tolerance
            </option>
            {[
              "Love pets",
              "Okay with pets",
              "Prefer no pets",
              "Allergic to pets",
            ].map((tolerance) => (
              <option key={tolerance} value={tolerance}>
                {tolerance}
              </option>
            ))}
          </select>
        </div>

        {/* Religion */}
        <div className="space-y-2">
          <label
            htmlFor="religion"
            className="block text-sm font-medium text-gray-700"
          >
            Religion (Optional)
          </label>
          <select
            id="religion"
            value={formData.religion}
            onChange={(e) => updateFormData({ religion: e.target.value })}
            className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          >
            <option value="" disabled>
              Select your religion (if relevant)
            </option>
            {[
              "Christianity",
              "Islam",
              "Traditional",
              "Other",
              "Prefer not to say",
            ].map((religion) => (
              <option key={religion} value={religion}>
                {religion}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-500">
            Only if it matters for roommate matching
          </p>
        </div>

        {/* Hobbies */}
        <div className="space-y-2">
          <label
            htmlFor="hobbies"
            className="block text-sm font-medium text-gray-700"
          >
            Hobbies & Interests
          </label>
          <textarea
            id="hobbies"
            placeholder="Share your hobbies and interests (e.g., sports, music, reading)"
            value={formData.hobbies}
            onChange={(e) => updateFormData({ hobbies: e.target.value })}
            className="min-h-[80px] w-full resize-none rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
          />
        </div>

        {/* Student ID Upload */}
        <div className="space-y-2">
          <label
            htmlFor="studentIdFile"
            className="block text-sm font-medium text-gray-700"
          >
            Student ID Upload (Optional)
          </label>
          <div
            className={`relative flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 transition-all ${
              dragActive ? "border-[#8C52FF] bg-purple-50" : "border-gray-300"
            } ${formData.studentIdFile ? "bg-purple-50" : ""}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              id="studentIdFile"
              type="file"
              className="absolute inset-0 cursor-pointer opacity-0"
              accept="image/*,.pdf"
              onChange={handleFileChange}
            />

            {formData.studentIdFile ? (
              <div className="flex flex-col items-center">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <FaUpload className="h-6 w-6 text-[#8C52FF]" />
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {formData.studentIdFile.name}
                </p>
                <p className="text-xs text-gray-500">
                  {(formData.studentIdFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="mt-2 flex items-center gap-1 text-xs text-red-500 hover:text-red-700"
                >
                  <FaTimes className="h-3 w-3" /> Remove file
                </button>
              </div>
            ) : (
              <>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                  <FaUpload className="h-6 w-6 text-[#8C52FF]" />
                </div>
                <p className="mb-1 text-sm font-medium text-gray-900">
                  Drag and drop or click to upload
                </p>
                <p className="text-xs text-gray-500">
                  Upload your student ID for verification (JPG, PNG or PDF)
                </p>
              </>
            )}
          </div>
          <p className="text-xs text-gray-500">
            Verified students get priority access to premium listings
          </p>
        </div>
      </div>
    </div>
  );
}
