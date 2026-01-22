"use client";

import { useState } from "react";
import Link from "next/link";
export default function Contact() {
  // State for form interactions
  const [budget, setBudget] = useState(5000); // Default budget value
  const [selectedReasons, setSelectedReasons] = useState<string[]>(["Web Design"]); // Default selection

  const reasons = [
    "Web Design",
    "Collaboration",
    "Mobile App Design",
    "Others"
  ];

  const toggleReason = (reason: string) => {
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter((r) => r !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  return (
    <section className="flex justify-center w-full px-4 md:px-0 pb-20">
      {/* Main Container */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-neutral-700 bg-neutral-800">
        
        {/* ---------------- 1. Top Hero/CTA Section ---------------- */}
        <div
        className="flex flex-col items-center justify-center text-center px-4 py-20 lg:py-[120px] lg:px-[350px] gap-[50px] w-full relative"
        style={{
            background: `
            linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
            url('/images/Contact Section.png')
            `, 
            // ملاحظة: تأكد من اسم الصورة لديك، إذا كان "Contact Section.png" ضعه كما هو، 
            // ولكن يفضل تجنب المسافات في الأسماء
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
                {/* Logo Icon */}
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L3.5 7.5V16.5L12 21L20.5 16.5V7.5L12 3Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12V21" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L20.5 7.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12L3.5 7.5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            {/* Text Content - تمت إضافة الشادو هنا 👇 */}
            <div className="flex flex-col gap-[10px] w-full">
                <h2 className="text-white font-barlow text-3xl md:text-[38px] font-semibold leading-normal [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                    Thank you for your Interest in Code Zeen.
                </h2>
                <p className="text-neutral-100 font-barlow text-lg font-normal leading-[150%] tracking-[-0.108px] [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]">
                    We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.
                </p>
            </div>

            {/* Start Project Button */}
            {/* 2. استبدال button بـ Link وإضافة href */}
            <Link 
                href="/contact" 
                className="flex px-[34px] py-[18px] items-center gap-2 rounded-lg bg-brand-700 hover:bg-brand-400 transition-colors shadow-lg"
            >
                <span className="text-neutral-800 font-barlow text-lg font-medium leading-[150%]">
                    Start Project
                </span>
            </Link>
        </div>

        {/* ---------------- 2. Form Container ---------------- */}
        {/* Layout: padding: 0 268px (Desktop), border-top */}
        <div className="flex flex-col items-center w-full px-4 lg:px-[268px] pt-10 pb-20 border-t border-neutral-700 bg-neutral-800">
            
            {/* Form Wrapper */}
            <form className="flex flex-col p-6 lg:p-[80px] gap-[40px] w-full border border-neutral-700 bg-neutral-800/50 rounded-xl relative">
                
                {/* Row 1: Name & Email */}
                <div className="flex flex-col lg:flex-row gap-[50px] w-full">
                    
                    {/* Full Name Input */}
                    <div className="flex flex-col p-6 lg:px-10 lg:py-6 gap-5 flex-1 rounded-lg border border-neutral-700 bg-[#242424]/50 focus-within:border-brand-700 transition-colors">
                        <label className="text-white font-barlow text-[22px] font-medium leading-[150%]">
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            placeholder="Type here"
                            className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder-neutral-300 font-barlow text-lg focus:outline-none focus:border-brand-700 transition-colors"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col p-6 lg:px-10 lg:py-6 gap-5 flex-1 rounded-lg border border-neutral-700 bg-[#242424]/50 focus-within:border-brand-700 transition-colors">
                        <label className="text-white font-barlow text-[22px] font-medium leading-[150%]">
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder="Type here"
                            className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder-neutral-300 font-barlow text-lg focus:outline-none focus:border-brand-700 transition-colors"
                        />
                    </div>
                </div>

                {/* Row 2: Why Contacting (Checkboxes) */}
                <div className="flex flex-col p-6 lg:p-10 gap-10 rounded-xl border border-neutral-700 bg-[#242424]/50">
                    <h3 className="text-white font-barlow text-[22px] font-medium leading-[150%]">
                        Why are you contacting us?
                    </h3>
                    
                    {/* Checkboxes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {reasons.map((reason) => {
                            const isSelected = selectedReasons.includes(reason);
                            return (
                                <div 
                                    key={reason}
                                    onClick={() => toggleReason(reason)}
                                    className="flex items-center gap-[10px] cursor-pointer group"
                                >
                                    {/* Custom Checkbox Box */}
                                    <div className={`
                                        flex items-center justify-center w-[28px] h-[28px] rounded border transition-all
                                        ${isSelected ? 'bg-neutral-700 border-[#333]' : 'bg-neutral-800 border-[#333] group-hover:border-brand-700'}
                                    `}>
                                        {isSelected && (
                                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                             <path fillRule="evenodd" clipRule="evenodd" d="M15.5972 5.08403C15.8409 5.2372 15.9068 5.54764 15.7443 5.7774L9.38069 14.7773C9.29256 14.902 9.14981 14.9828 8.99171 14.9976C8.83361 15.0123 8.67682 14.9595 8.56447 14.8536L4.32207 10.8536C4.11497 10.6583 4.11497 10.3417 4.32207 10.1465C4.52916 9.95121 4.86493 9.95121 5.07203 10.1465L8.85703 13.7152L14.8618 5.2227C15.0243 4.99294 15.3535 4.93085 15.5972 5.08403Z" fill="#9EFF00"/>
                                           </svg>
                                        )}
                                    </div>
                                    <span className="text-white font-barlow text-lg font-normal">
                                        {reason}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Row 3: Budget Range Slider */}
                <div className="flex flex-col p-6 lg:p-10 gap-10 rounded-xl border border-neutral-700 bg-[#242424]/50">
                     <h3 className="text-white font-barlow text-[22px] font-medium leading-[150%]">
                        Your Budget
                    </h3>
                    <p className="text-neutral-100 font-barlow text-lg font-normal -mt-6">
                        Slide to indicate your budget range
                    </p>

                    {/* Custom Slider Component */}
                    <div className="relative w-full h-10 flex items-center pt-6 pb-2">
                        <input 
                            type="range" 
                            min="1000" 
                            max="10000" 
                            step="500"
                            value={budget}
                            onChange={(e) => setBudget(Number(e.target.value))}
                            className="w-full h-1 bg-[#333] rounded-lg appearance-none cursor-pointer accent-brand-700 z-20 relative"
                        />
                        {/* Custom visual track overlay to ensure green color fill on left */}
                        <div 
                            className="absolute top-1/2 left-0 h-[4px] bg-brand-700 rounded-l-lg z-10 pointer-events-none transform -translate-y-[2px]"
                            style={{ width: `${((budget - 1000) / 9000) * 100}%` }}
                        ></div>
                        
                        {/* Value Label following the thumb */}
                        <div 
                            className="absolute -top-4 transform -translate-x-1/2 bg-neutral-800 px-2 py-1 rounded text-white text-sm font-medium border border-neutral-700 pointer-events-none transition-all"
                            style={{ left: `${((budget - 1000) / 9000) * 100}%` }}
                        >
                            ${budget}
                        </div>
                    </div>
                </div>

                {/* Row 4: Message */}
                <div className="flex flex-col p-6 lg:px-10 lg:py-6 gap-5 rounded-lg border border-neutral-700 bg-[#242424]/50 focus-within:border-brand-700 transition-colors">
                    <label className="text-white font-barlow text-[22px] font-medium leading-[150%]">
                        Your Message
                    </label>
                    <textarea 
                        rows={4}
                        placeholder="Type here"
                        className="w-full bg-transparent border-b border-[#333] pb-2 text-white placeholder-neutral-300 font-barlow text-lg focus:outline-none focus:border-brand-700 transition-colors resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-5">
                    <button type="submit" className="flex px-11 py-[18px] items-center gap-2 rounded-lg bg-brand-700 hover:bg-brand-400 transition-colors">
                        <span className="text-neutral-800 font-barlow text-lg font-medium leading-[150%]">
                            Submit
                        </span>
                    </button>
                </div>

            </form>
        </div>

      </div>
    </section>
  );
}