import Image from "next/image";

// سنستخدم مصفوفة للشركات لتسهيل التكرار والصيانة
const companies = [
  { name: "Zapier", logo: "/images/logos/Zapier.svg" },
  { name: "Spotify", logo: "/images/logos/Spotify.svg" },
  { name: "Zoom", logo: "/images/logos/Zoom.svg" },
  { name: "Slack", logo: "/images/logos/Slack.svg" },
  { name: "Amazon", logo: "/images/logos/Amazon.svg" },
  { name: "Adobe", logo: "/images/logos/Adobe.svg" },
];

export default function TrustedBy() {
  return (
    <section className="w-full flex justify-center px-4 md:px-0">
      {/* Container
         Layout: width: match Hero (max-w-[1596px]), padding: 40px 0
         Style: Border Right, Bottom, Left (Grey-15) | Bg: rgba(36,36,36, 0.20)
         Note: We add 'relative' and 'mt-0' to connect it perfectly with Hero
      */}
      <div className="relative w-full max-w-[1596px] flex flex-col items-center border-l border-r border-b border-neutral-700 bg-[#242424]/20 py-10">
        
        {/* 1. Sub Container (The Badge) 
           Position: Absolute, Top -31px (Calculated to overlap border)
           Layout: padding: 20px 34px, rounded-full (100px)
           Style: Border Grey-15, Bg Grey-10 (#1A1A1A -> neutral-800 or neutral-900 based on config)
        */}
        <div className="absolute -top-[34px] left-1/2 -translate-x-1/2 flex items-center justify-center px-[34px] py-5 rounded-full border border-neutral-700 bg-neutral-800 z-20">
          {/* Typography: Green-99 (#FDFFFA -> brand-50), Barlow, 18px, Medium */}
          <span className="text-brand-50 font-barlow text-lg font-medium text-center whitespace-nowrap">
            Trusted By 250+ Companies
          </span>
        </div>

        {/* 2. Logos Grid 
           Layout: Flex row (gap 20px in design), justify-center
           We wrap on mobile for responsiveness
        */}
        <div className="flex flex-wrap justify-center items-center gap-5 w-full px-10">
          {companies.map((company, index) => (
            /* Card Layout: padding 20px 40px, flex: 1 0 0 */
            <div 
                key={index} 
                className="flex flex-1 min-w-[150px] md:min-w-0 py-5 px-10 justify-center items-center gap-[30px]"
            >
              {/* Logo Placeholder 
                 Layout: w 100px, h 50px
                 Since we don't have actual SVGs yet, I'll put a text placeholder 
                 that behaves like the image.
              */}
              <div className="relative w-[100px] h-[50px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                 {/* Uncomment this when you have images in public/images/logos/  */}
                    <Image src={company.logo} alt={company.name} fill className="object-contain" />
                
                 {/* <span className="text-white font-barlow text-xl font-bold">{company.name}</span> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}