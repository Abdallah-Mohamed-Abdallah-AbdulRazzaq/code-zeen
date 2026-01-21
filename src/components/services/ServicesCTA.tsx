import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="flex justify-center w-full px-4 md:px-0 mt-10 lg:mt-[50px] mb-20">
      {/* Main Container 
          نضيف rounded-b-xl لأن هذا هو آخر سكشن في الصفحة
      */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-b border-neutral-700 bg-neutral-800 rounded-b-xl overflow-hidden">
        
        <div
            className="flex flex-col items-center justify-center text-center px-4 py-20 lg:py-[120px] lg:px-[350px] gap-[50px] w-full relative"
            style={{
                background: `
                linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
                url('/images/Contact Section.png')
                `, 
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundBlendMode: "color, normal, overlay",
            }}
        >
            {/* Logo with Glow Effect */}
            <div 
                className="w-[80px] h-[80px] rounded-2xl bg-brand-700 flex items-center justify-center shadow-[inset_0_0_14px_6px_rgba(255,255,255,0.50)]"
            >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L3.5 7.5V16.5L12 21L20.5 16.5V7.5L12 3Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L20.5 7.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L3.5 7.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {/* Text Content */}
            <div className="flex flex-col gap-[10px] w-full">
                <h2 className="text-white font-barlow text-3xl md:text-[38px] font-semibold leading-normal [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    Let us Bring your Ideas to Life in the Digital World.
                </h2>
                <p className="text-neutral-100 font-barlow text-lg font-normal leading-[150%] tracking-[-0.108px] [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]">
                    No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
                </p>
            </div>

            {/* Start Project Button */}
            <Link href="/contact" className="flex px-[34px] py-[18px] items-center gap-2 rounded-lg bg-brand-700 hover:bg-brand-400 transition-colors shadow-lg">
                <span className="text-neutral-800 font-barlow text-lg font-medium leading-[150%]">
                    Start Project
                </span>
            </Link>
        </div>

      </div>
    </section>
  );
}