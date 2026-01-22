import Contact from "@/components/home/Contact"; // Section 1
import FAQ from "@/components/home/FAQ";         // Section 2
import AboutCTA from "@/components/about/AboutCTA"; // Section 3
import MapSection from "@/components/contact/MapSection"; // Section 4 (New)

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center w-full bg-neutral-800 pb-0 pt-10">
      
      {/* 1. Contact Form Section (Reused) */}
      {/* ملاحظة: هذا السكشن يحتوي بالفعل على Hero بداخله حسب تصميمك السابق */}
      <div className="w-full">
        <Contact />
      </div>

      {/* 2. Map Section (New) */}
      {/* وضعنا الخريطة هنا لتكون قريبة من معلومات التواصل */}
      <MapSection />

      {/* 3. FAQ Section (Reused) */}
      <div className="w-full bg-[#242424]/20 py-10"> {/* خلفية خفيفة لتمييز السكشن */}
         <FAQ />
      </div>

      {/* 4. About CTA (Reused - Final Call to Action) */}
      <AboutCTA />
      
    </div>
  );
}