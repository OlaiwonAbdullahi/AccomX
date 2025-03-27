import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaSpinner,
} from "react-icons/fa";

import StepOne from "@/components/signup/step-one";
import SuccessScreen from "./signup/sucess-screen";
import StepTwo from "./signup/step-two";
import StepThree from "./signup/step-three";
//import StepTwo from "@/components/signup/step-two";
//import StepThree from "@/components/signup/step-three";
//import SuccessScreen from "@/components/signup/success-screen";

// Define our form data structure
export type FormData = {
  // Step 1: Basic Personal Information
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;

  // Step 2: Academic & Accommodation Preferences
  institution: string;
  studyLevel: string;
  department: string;
  accommodationType: string;
  budgetRange: string;
  preferredLocation: string;

  // Step 3: Lifestyle & Verification
  roommateGender: string;
  personalityType: string;
  sleepingHabits: string;
  studyHabits: string;
  petTolerance: string;
  religion: string;
  hobbies: string;
  studentIdFile: File | null;
};

export default function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Initialize form data with empty values
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    institution: "",
    studyLevel: "",
    department: "",
    accommodationType: "",
    budgetRange: "",
    preferredLocation: "",
    roommateGender: "",
    personalityType: "",
    sleepingHabits: "",
    studyHabits: "",
    petTolerance: "",
    religion: "",
    hobbies: "",
    studentIdFile: null,
  });

  // Step validation functions
  const isStepOneValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.dateOfBirth !== "" &&
      formData.gender !== ""
    );
  };

  const isStepTwoValid = () => {
    return (
      formData.institution.trim() !== "" &&
      formData.studyLevel !== "" &&
      formData.accommodationType !== "" &&
      formData.budgetRange !== ""
    );
  };

  const isStepThreeValid = () => {
    // Only require essential fields for step 3
    return formData.personalityType !== "" && formData.sleepingHabits !== "";
  };

  // Handle form data changes
  const updateFormData = (newData: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep === 1 && isStepOneValid()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && isStepTwoValid()) {
      setCurrentStep(3);
    } else if (currentStep === 3 && isStepThreeValid()) {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Form submission
  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsComplete(true);
      // In a real app, you would send the formData to your backend here
      console.log("Form submitted:", formData);
    }, 1500);
  };

  // Value propositions for each step
  const stepValueProps = [
    "Find compatible roommates and personalized recommendations",
    "Get matched with accommodations that fit your budget and location needs",
    "Complete your profile to increase your chances of finding the perfect match",
  ];

  // If form is complete, show success screen
  if (isComplete) {
    return <SuccessScreen formData={formData} />;
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex justify-between">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  step < currentStep
                    ? "border-[#8C52FF] bg-[#8C52FF] text-white"
                    : step === currentStep
                    ? "border-[#8C52FF] bg-white text-[#8C52FF]"
                    : "border-gray-300 bg-white text-gray-400"
                }`}
              >
                {step < currentStep ? (
                  <FaCheckCircle className="h-5 w-5" />
                ) : (
                  <span>{step}</span>
                )}
              </div>
              <span
                className={`mt-2 text-sm ${
                  step <= currentStep
                    ? "text-[#8C52FF] font-medium"
                    : "text-gray-500"
                }`}
              >
                {step === 1
                  ? "Personal Info"
                  : step === 2
                  ? "Academic & Housing"
                  : "Lifestyle"}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-4">
          <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>
          <div
            className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-[#8C52FF] transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="mb-6">
        <div className="rounded-lg bg-purple-50 p-4 text-center">
          <p className="text-purple-800">
            <span className="font-medium">Step {currentStep}:</span>{" "}
            {stepValueProps[currentStep - 1]}
          </p>
        </div>
      </div>

      {/* Form Card */}
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <StepOne formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 2 && (
              <StepTwo formData={formData} updateFormData={updateFormData} />
            )}
            {currentStep === 3 && (
              <StepThree formData={formData} updateFormData={updateFormData} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center gap-1 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:ring-offset-2 ${
              currentStep === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <FaChevronLeft className="h-3 w-3" /> Back
          </button>

          <button
            onClick={nextStep}
            disabled={
              (currentStep === 1 && !isStepOneValid()) ||
              (currentStep === 2 && !isStepTwoValid()) ||
              (currentStep === 3 && !isStepThreeValid()) ||
              isSubmitting
            }
            className={`flex items-center gap-1 rounded-md bg-[#8C52FF] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#7B45E8] focus:outline-none focus:ring-2 focus:ring-[#8C52FF] focus:ring-offset-2 ${
              (currentStep === 1 && !isStepOneValid()) ||
              (currentStep === 2 && !isStepTwoValid()) ||
              (currentStep === 3 && !isStepThreeValid()) ||
              isSubmitting
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : currentStep === 3 ? (
              "Complete Sign Up"
            ) : (
              <>
                Continue <FaChevronRight className="h-3 w-3" />
              </>
            )}
          </button>
        </div>

        {/* Save Progress Link */}
        <div className="mt-4 text-center">
          <button className="text-sm text-gray-500 hover:text-[#8C52FF] hover:underline">
            Save progress and continue later
          </button>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>
          Your information is secure and will never be shared without your
          permission.
        </p>
        <p className="mt-1">
          Join 10,000+ students who found their perfect accommodation through
          our platform.
        </p>
      </div>
    </div>
  );
}
