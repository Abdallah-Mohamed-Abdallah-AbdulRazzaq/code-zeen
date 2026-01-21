import Image from "next/image";

const reasons = [
  {
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    icon: "/images/logos/WhyChooseUs-1.svg",
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
    icon: "/images/logos/WhyChooseUs-2.svg",
  },
  {
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    icon: "/images/logos/WhyChooseUs-3.svg",
  },
  {
    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    icon: "/images/logos/WhyChooseUs-4.svg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="flex justify-center w-full px-4 md:px-0">
      {/* Main Container */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-b border-neutral-700 bg-neutral-800">
        
        {/* ---------------- 1. Header Section ---------------- */}
        {/* Same styling as Services Header */}
        <div
          className="flex flex-col items-center justify-center text-center px-4 py-20 lg:py-[120px] lg:px-[300px] gap-[14px] border-b border-neutral-700 w-full relative"
          style={{
            background: `
              linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
              url('/images/Why Choose US Section.png')
            `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "color, normal, overlay",
          }}
        >
          <h2 className="text-white font-barlow text-3xl md:text-[48px] font-semibold leading-normal">
            Why Choose Code Zeen?
          </h2>
          <p className="text-neutral-100 font-barlow text-lg font-normal leading-6 tracking-[-0.108px]">
            Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
          </p>
        </div>

        {/* ---------------- 2. Cards Grid (2x2) ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-start gap-10 p-8 lg:p-[80px]
                ${/* Logic for borders in 2x2 Grid */ ""}
                ${
                  /* Add bottom border to the first 2 items (Row 1) only */
                  index < 2 ? "border-b border-neutral-700" : ""
                }
                ${
                  /* Add right border to odd items (Column 1) only on Desktop */
                  index % 2 === 0 ? "lg:border-r border-neutral-700" : ""
                }
                ${
                   /* Mobile: All items need bottom border except the last one */
                   index !== reasons.length - 1 ? "max-lg:border-b max-lg:border-neutral-700" : ""
                }
              `}
            >
              {/* Top: Icon + Title */}
              <div className="flex items-center gap-5 w-full">
                {/* Icon Box */}
                <div
                  className="flex flex-col items-start p-6 gap-[10px] rounded-[10px] border border-[#2E2E2E]"
                  style={{
                    background: `
                      linear-gradient(229deg, rgba(158, 255, 0, 0.20) -68.25%, rgba(158, 255, 0, 0.00) 32.16%),
                      linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)
                    `,
                  }}
                >
                  <div className="relative w-[30px] h-[30px]">
                     <Image 
                        src={item.icon} 
                        alt={item.title} 
                        fill 
                        className="object-contain"
                     />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-barlow text-[26px] font-medium leading-[150%] tracking-[-0.156px]">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-neutral-100 font-barlow text-[20px] font-normal leading-[150%] tracking-[-0.12px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}