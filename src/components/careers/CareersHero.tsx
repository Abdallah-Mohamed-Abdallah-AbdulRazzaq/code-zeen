import React from "react";

export default function CareersHero() {
  return (
    <section className="w-full flex justify-center px-4 md:px-0">
      {/* Container */}
      <div
        className="flex flex-col items-center justify-center text-center w-full max-w-[1596px] py-20 lg:py-[120px] lg:px-[300px] gap-[14px] border border-neutral-700 rounded-b-xl relative overflow-hidden"
        style={{
          // الخلفية المركبة
          // يمكنك تخصيص صورة خلفية لهذا القسم (مثلاً careers-bg.png)
          background: `
            linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
            url('/images/abstract-design.png'), 
            url('/images/Our Services Section.png') 
          `,
          backgroundSize: "auto, 100px 100px, cover",
          backgroundRepeat: "no-repeat, repeat, no-repeat",
          backgroundPosition: "center, 0 0, center",
          backgroundBlendMode: "color, normal, overlay",
        }}
      >
        {/* Heading */}
        <h1 className="text-white text-center font-barlow text-4xl md:text-[48px] font-semibold leading-normal [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
          Join Our Team at Code Zeen
        </h1>

        {/* Paragraph */}
        <p className="text-neutral-100 text-center font-barlow text-lg md:text-[20px] font-normal leading-[150%] tracking-[-0.12px] [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]">
          Unlock your potential and join our team of innovators and problem solvers.
        </p>
      </div>
    </section>
  );
}