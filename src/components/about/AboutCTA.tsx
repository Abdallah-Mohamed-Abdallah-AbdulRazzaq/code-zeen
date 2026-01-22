import React from "react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="w-full flex justify-center px-4 md:px-0 mt-20 mb-20">
      {/* Main Container 
          Layout: padding: 80px (Desktop) | gap: 50px
          Style: border: 1px solid Grey-15
      */}
      <div className="flex flex-col w-full max-w-[1596px] p-6 md:p-10 lg:p-20 gap-10 lg:gap-[50px] border border-neutral-700 bg-neutral-800 rounded-xl relative overflow-hidden">
        
        {/* Top Section: Logo & Story */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
            
            {/* Logo Placeholder */}
            {/* Layout: 150px x 150px */}
            <div className="flex-shrink-0 w-[150px] h-[150px] bg-brand-700 rounded-2xl flex items-center justify-center shadow-[0px_0px_30px_0px_rgba(158,255,0,0.30)]">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-neutral-900">
                    <path d="M21 16V8L12 3L3 8V16L12 21L21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 text-center lg:text-left">
                <h2 className="text-[#98989A] font-barlow text-2xl md:text-[30px] font-medium leading-normal">
                    Today, Code Zeen Continues to Thrive as a Leading Digital Product Agency...
                </h2>
                <p className="text-[#98989A] font-barlow text-lg font-normal leading-[150%]">
                    Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.
                </p>
            </div>
        </div>

        {/* Bottom Section: Floating Bar */}
        {/* Style: bg-opacity-20, backdrop-blur */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 lg:px-10 lg:py-6 rounded-xl border border-neutral-700 bg-[#242424]/20 backdrop-blur-md w-full">
            
            {/* Sub Container (Text) */}
            <div className="flex flex-col lg:flex-row items-center gap-5 flex-1 w-full lg:w-auto">
                
                {/* Label */}
                <span className="text-[#98989A] font-barlow text-xl font-normal whitespace-nowrap">
                    Welcome to Code Zeen
                </span>

                {/* Text Box */}
                <div className="flex justify-center items-center py-[14px] px-5 rounded-lg bg-neutral-700 w-full lg:w-auto text-center lg:text-left">
                    <span className="text-white font-barlow text-lg md:text-xl font-normal leading-[150%]">
                        Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                    </span>
                </div>
            </div>

            {/* Button */}
            <Link 
                href="/contact"
                className="flex flex-shrink-0 px-[34px] py-[18px] items-center gap-2 rounded-lg bg-brand-700 hover:bg-brand-500 transition-colors text-neutral-900 font-barlow text-lg font-medium"
            >
                Start Project
            </Link>

        </div>

      </div>
    </section>
  );
}