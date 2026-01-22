import React from "react";
import JobApplicationForm from "@/components/careers/JobApplicationForm";

export default function ApplyPage() {
  return (
    <div className="w-full min-h-screen bg-neutral-800 flex flex-col items-center py-20 px-4">
      
      {/* Page Introduction */}
      <div className="text-center max-w-2xl mb-12 flex flex-col gap-4">
         <div className="inline-flex mx-auto px-4 py-2 rounded-lg bg-neutral-700/50 border border-neutral-600">
            <span className="text-brand-400 font-barlow text-sm font-medium uppercase tracking-wider">
                Career Application
            </span>
         </div>
         <h1 className="text-white font-barlow text-4xl md:text-5xl font-bold">
            Take the Next Step
         </h1>
         <p className="text-neutral-200 font-barlow text-lg">
            Complete the form below to join the Code Zeen team. We value your time and interest in working with us.
         </p>
      </div>

      {/* The Advanced Form Component */}
      <JobApplicationForm />

    </div>
  );
}