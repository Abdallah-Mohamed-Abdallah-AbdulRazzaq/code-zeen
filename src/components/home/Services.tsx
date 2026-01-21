import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    title: "Design",
    description:
      "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    icon: "/images/logos/Services-1.svg", // تأكد من وضع الأيقونة هنا
  },
  {
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    icon: "/images/logos/Services-2.svg",
  },
  {
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication tools.",
    icon: "/images/logos/Services-3.svg",
  },
];

export default function Services() {
  return (
    <section className="flex justify-center w-full px-4 md:px-0">
      {/* Main Container
        Width: 1596px (Matches Hero)
        Borders: Left, Right, Bottom (Continuing the box style)
      */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-b border-neutral-700 bg-neutral-800">
        
        {/* ---------------- 1. Header Section ---------------- */}
        {/* Layout: padding 120px 300px (Desktop), gap 14px */}
        <div
          className="flex flex-col items-center justify-center text-center px-4 py-20 lg:py-[120px] lg:px-[300px] gap-[14px] border-b border-neutral-700 w-full relative"
          style={{
            background: `
              linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
              url('/images/Our Services Section.png')
            `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "color, normal, overlay",
          }}
        >
          {/* استخدمنا [text-shadow:...] لعمل ظل أسود قوي ومحدد */}
          <h2 className="text-white font-barlow text-3xl md:text-[48px] font-semibold leading-normal [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
            Our Services
          </h2>
          
          <p className="text-neutral-100 font-barlow text-lg font-normal leading-6 tracking-[-0.108px] [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]">
            Transform your brand with our innovative digital solutions that captivate and engage your audience.
          </p>
        </div>

        {/* ---------------- 2. Cards Grid ---------------- */}
        {/* Desktop: Row with dividers | Mobile: Col with dividers */}
        <div className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 lg:divide-x divide-neutral-700">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-start flex-1 p-8 lg:p-[50px] gap-[40px]"
            >
              {/* Top Content (Icon + Text) */}
              <div className="flex flex-col items-start gap-[40px] w-full">
                
                {/* Icon Box */}
                {/* Style: rounded-10px, border-[#2E2E2E], double gradient */}
                <div
                  className="flex flex-col items-start p-6 gap-[10px] rounded-[10px] border border-[#2E2E2E]"
                  style={{
                    background: `
                      linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%),
                      linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)
                    `,
                  }}
                >
                  <div className="relative w-10 h-10">
                    {/* Placeholder for Icon Image */}
                     <Image 
                        src={service.icon} 
                        alt={service.title} 
                        fill 
                        className="object-contain"
                        // في حالة عدم وجود الصورة حالياً، سيظهر مربع فارغ يحجز المكان
                     />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="text-white font-barlow text-[30px] font-semibold leading-[150%] tracking-[-0.18px]">
                    {service.title}
                  </h3>
                  <p className="text-neutral-100 font-barlow text-lg font-normal leading-6 tracking-[-0.108px]">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Bottom: Button */}
              {/* Style: bg-Grey-15 (#262626), text-white */}
              <Link
                href="/services"
                className="flex w-full py-[18px] px-4 justify-center items-center gap-[10px] rounded-lg bg-neutral-700 hover:bg-brand-700 hover:text-neutral-800 transition-colors text-white font-barlow text-lg font-medium leading-6 tracking-[-0.108px]"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}