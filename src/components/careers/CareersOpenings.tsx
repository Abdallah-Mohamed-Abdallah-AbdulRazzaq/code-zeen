import React from "react";
import Image from "next/image";
import Link from "next/link";
import { jobOpenings } from "../careers/careersData";

export default function CareersOpenings() {
  return (
    <section className="w-full flex justify-center px-4 md:px-0 mt-20">
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-t border-b border-neutral-700 bg-neutral-800">
        
        {/* ---------------- Main Header ---------------- */}
        <div className="flex flex-col gap-[14px] px-4 py-10 md:px-[50px] lg:pt-[80px] lg:pb-[80px] border-b border-neutral-700 bg-[#242424]/20">
            <h2 className="text-white font-barlow text-3xl md:text-[48px] font-semibold leading-normal">
               Current Openings
            </h2>
            <p className="text-neutral-200 font-barlow text-lg font-normal leading-[150%] max-w-5xl">
               We are always on the lookout for talented individuals who are passionate about creating exceptional digital experiences. Whether you're a designer, engineer, project manager, or have skills that align with our agency's mission, we encourage you to explore our open positions.
            </p>
        </div>

        {/* ---------------- Job Categories Loop ---------------- */}
        {jobOpenings.map((category, catIndex) => (
            <div key={catIndex} className="flex flex-col w-full">
                
                {/* Category Title Header */}
                <div className="flex px-4 py-8 md:px-[50px] border-b border-neutral-700 bg-neutral-800">
                    <h3 className="text-neutral-200 font-barlow text-2xl md:text-[28px] font-medium leading-normal">
                        {category.category}
                    </h3>
                </div>

                {/* Jobs Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                    {category.jobs.map((job, jobIndex) => (
                        <div 
                            key={jobIndex}
                            className={`
                                flex flex-col p-8 md:p-[50px] gap-[30px]
                                bg-[#242424]/10 hover:bg-[#242424]/30 transition-colors duration-300
                                border-b border-neutral-700
                                ${/* Border Right logic for 3 columns */ ""}
                                ${jobIndex % 3 !== 2 ? "lg:border-r" : ""}
                                ${/* Tablet: Border right for odd items */ ""}
                                ${jobIndex % 2 === 0 ? "md:border-r lg:border-r-0" : ""}
                            `}
                        >
                            {/* Title & Icon */}
                            <div className="flex flex-col items-start gap-6">
                                {/* Icon Box */}
                                <div 
                                    className="flex items-center justify-center w-[60px] h-[60px] md:w-[70px] md:h-[70px] p-4 rounded-xl border border-[#262626] relative"
                                    style={{
                                        background: "linear-gradient(131deg, rgba(158, 255, 0, 0.20) -66.81%, rgba(158, 255, 0, 0.00) 37.19%)"
                                    }}
                                >
                                    {/* Icon Placeholder */}
                                    {/* سيظهر مربع فارغ إذا لم تكن الصورة موجودة، قمت بوضع Image للتعامل مع المسار الذي ستضيفه */}
                                    <div className="relative w-8 h-8 md:w-9 md:h-9">
                                        <Image 
                                            src={job.icon} 
                                            alt={job.title} 
                                            fill 
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                
                                <h4 className="text-white font-barlow text-xl md:text-2xl font-medium">
                                    {job.title}
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="text-neutral-200 font-barlow text-base md:text-lg font-normal leading-[150%] flex-grow">
                                {job.description}
                            </p>

                            {/* Apply Button */}
                            <Link 
                                href="/careers/apply" 
                                className="w-full mt-4 py-[14px] px-6 rounded-lg bg-[#262626] border border-neutral-700 text-white text-center font-barlow text-lg font-medium hover:bg-brand-700 hover:text-neutral-900 transition-all"
                            >
                                Apply Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        ))}

      </div>
    </section>
  );
}