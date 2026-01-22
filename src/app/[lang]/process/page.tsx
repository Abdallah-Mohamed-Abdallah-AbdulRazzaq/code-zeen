import ProcessHero from "@/components/process/ProcessHero";
import ProcessSteps from "@/components/process/ProcessSteps"; // Import New Component
import Contact from "@/components/home/Contact";

export default function ProcessPage() {
  return (
    <div className="flex flex-col items-center w-full bg-neutral-800 pb-0">
      
      {/* 1. Process Hero */}
      <ProcessHero />

      {/* 2. Process Steps */}
      <ProcessSteps />

      {/* 3. CTA Section */}
      <div className="w-full mt-20 mb-20">
         <Contact />
      </div>

    </div>
  );
}