import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact"; // Import Section 7

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <div className="flex flex-col items-center w-full px-0">
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Trusted By Section */}
      <TrustedBy />
      
      {/* 3. Services Section */}
      <Services />
      
      {/* 4. Why Choose Us */}
      <WhyChooseUs />
      
      {/* 5. Testimonials */}
      <Testimonials />
      
      {/* 6. FAQ Section */}
      <FAQ />
      
      {/* 7. Contact Section */}
      <Contact />
      
    </div>
  );
}