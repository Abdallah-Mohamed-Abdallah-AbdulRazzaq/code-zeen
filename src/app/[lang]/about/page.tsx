import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutValues from "@/components/about/AboutValues";
import TeamSection from "@/components/about/TeamSection";
import AboutCTA from "@/components/about/AboutCTA"; // Import Final Section

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full bg-neutral-800 pb-0">
      
      {/* 1. About Hero */}
      <AboutHero />

      {/* 2. About Intro */}
      <AboutIntro />

      {/* 3. About Values */}
      <AboutValues />

      {/* 4. Team Section */}
      <TeamSection />

      {/* 5. About CTA (Final Section) */}
      <AboutCTA />

    </div>
  );
}