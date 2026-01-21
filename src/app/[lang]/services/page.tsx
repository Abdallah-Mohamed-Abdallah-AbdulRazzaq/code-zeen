import ServicesHero from "@/components/services/ServicesHero";
import ServiceSection from "@/components/services/ServiceSection";
import ServicesCTA from "@/components/services/ServicesCTA"; // Import Section 5
import { servicesData } from "@/components/services/servicesData";

export default function ServicesPage() {
  return (
    <div className="flex flex-col items-center w-full bg-neutral-800">
      
      {/* 1. Services Hero */}
      <ServicesHero />

      {/* 2. Design Section */}
      <ServiceSection 
        title={servicesData[0].title}
        description={servicesData[0].description}
        subText={servicesData[0].subText}
        categories={servicesData[0].categories}
      />

      {/* 3. Engineering Section */}
      <ServiceSection 
        title={servicesData[1].title}
        description={servicesData[1].description}
        subText={servicesData[1].subText}
        categories={servicesData[1].categories}
      />

      {/* 4. Project Management Section */}
      <ServiceSection 
        title={servicesData[2].title}
        description={servicesData[2].description}
        subText={servicesData[2].subText}
        categories={servicesData[2].categories}
      />

      {/* 5. CTA Section (Last One) */}
      <ServicesCTA />

    </div>
  );
}