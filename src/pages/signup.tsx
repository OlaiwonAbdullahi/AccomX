import SignupForm from "@/components/signup-form";

export default function Signup() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Find Your Perfect Student Accommodation
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
          Join thousands of students who have found their ideal living space
          through our platform. Complete your profile in just 3 simple steps.
        </p>
        <SignupForm />
      </div>
    </main>
  );
}
