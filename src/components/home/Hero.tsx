import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center w-full">
      {/* Layout: display: flex; width: 1596px (max-w for responsive); 
         padding-top: 112px; gap: -174px;
         Borders: Right, Bottom, Left solid Grey-15
      */}
      <div 
        className="relative flex flex-col items-center gap-[50px] w-full max-w-[1596px] pt-28 pb-40 border-l border-r border-b border-neutral-700 mx-auto bg-neutral-800"
        style={{
          // تم تعديل الخلفية لتظهر مرة واحدة وتغطي المساحة
          backgroundImage: "url('/images/Abstract Design.png')", // تأكد من اسم الملف
          backgroundSize: "cover",      // تجعل الصورة تغطي كامل العنصر
          backgroundRepeat: "no-repeat", // تمنع تكرار الصورة
          backgroundPosition: "center",  // تضع الصورة في المنتصف
        }}
      >
        {/* Container & Sub Container Wrapper */}
        <div className="flex flex-col items-center gap-10 px-4 w-full z-10">
            
          {/* 1. Heading */}
          <h1 className="text-white text-center font-barlow text-[40px] md:text-[68px] font-semibold leading-tight">
            A Digital Product Studio
            <br />
            that will Work
          </h1>

          {/* 2. Sub Container (The "For Startups..." Box) */}
          <div className="flex flex-col md:flex-row items-center gap-[6px] px-10 py-6 rounded-xl border border-neutral-700 bg-[#242424]/20 backdrop-blur-sm text-center md:text-left">
            
            <span className="text-neutral-200 font-barlow text-[22px] font-normal">
              For
            </span>

            {/* Tags Wrapper */}
            <div className="flex flex-wrap justify-center items-center gap-2">
                
                <span className="flex px-[14px] py-[12px] justify-center items-center gap-[10px] rounded-lg bg-neutral-700 text-white font-barlow text-[22px] font-normal">
                Startups
                </span>
                <span className="text-neutral-200 font-barlow text-[22px] font-normal">,</span>

                <span className="flex px-[14px] py-[12px] justify-center items-center gap-[10px] rounded-lg bg-neutral-700 text-white font-barlow text-[22px] font-normal">
                Enterprise leaders
                </span>
                <span className="text-neutral-200 font-barlow text-[22px] font-normal">,</span>

                <span className="flex px-[14px] py-[12px] justify-center items-center gap-[10px] rounded-lg bg-neutral-700 text-white font-barlow text-[22px] font-normal">
                Media & Publishers
                </span>
                
                <span className="text-neutral-200 font-barlow text-[22px] font-normal">and</span>

                <span className="flex px-[14px] py-[12px] justify-center items-center gap-[10px] rounded-lg bg-neutral-700 text-white font-barlow text-[22px] font-normal">
                Social Good
                </span>

            </div>
          </div>

          {/* 3. Action Buttons */}
          <div className="flex items-center gap-[13px] mt-2">
            
            <Link
              href="/work"
              className="flex px-7 py-[18px] justify-center items-center gap-[10px] rounded-[10px] border border-neutral-600 bg-[#242424]/20 backdrop-blur-sm text-white font-barlow text-lg font-medium hover:bg-neutral-700 transition-colors"
            >
              Our Works
            </Link>

            <Link
              href="/contact"
              className="flex px-7 py-[18px] justify-center items-center gap-[10px] rounded-[10px] bg-brand-700 text-neutral-700 font-barlow text-lg font-medium hover:bg-brand-400 transition-colors"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}