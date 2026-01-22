import CareersHero from "@/components/careers/CareersHero";
import CareersBenefits from "@/components/careers/CareersBenefits";
import CareersOpenings from "@/components/careers/CareersOpenings"; // Import Section 3
import AboutCTA from "@/components/about/AboutCTA";

export default function CareersPage() {
  return (
    <div className="flex flex-col items-center w-full bg-neutral-800 pb-0">
      
      {/* 1. Careers Hero */}
      <CareersHero />

      {/* 2. Benefits Section */}
      <CareersBenefits />

      {/* 3. Job Openings Section */}
      <CareersOpenings />

      {/* 4. CTA Section */}
      <AboutCTA />

    </div>
  );
}