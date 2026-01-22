import React from "react";
import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="w-full flex justify-center px-4 md:px-0">
      {/* Container 
          Border: 1px solid Grey-15
      */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1596px] border-l border-r border-b border-neutral-700 bg-neutral-800">
        
        {/* Wrapper for Padding & Gap
            Layout: padding: 100px 150px (Desktop) | gap: 100px
            Mobile Adjustment: padding: 40px 20px | gap: 40px | flex-col
        */}
        <div className="flex flex-col lg:flex-row items-center w-full p-6 py-10 lg:p-[100px] lg:px-[150px] gap-10 lg:gap-[100px]">
            
            {/* 1. Text Content (Left Side) */}
            <div className="flex flex-col items-start gap-[14px] flex-1">
                <h2 className="text-white font-barlow text-3xl md:text-[48px] font-semibold leading-normal">
                    About Code Zeen
                </h2>
                <p className="text-neutral-100 font-barlow text-lg md:text-[20px] font-normal leading-[150%] tracking-[-0.12px]">
                    Code Zeen is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At Code Zeen, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
                </p>
            </div>

            {/* 2. Image / Visual (Right Side) */}
            {/* Layout: height: 571px
               Style: border-radius: 16px; border: 1px solid Grey-15
               Background: Complex blend modes as requested
            */}
            <div 
                className="flex flex-1 w-full h-[400px] lg:h-[571px] justify-center items-center rounded-2xl border border-neutral-700 relative overflow-hidden"
                style={{
                    // تجميع الخلفيات المتعددة (Layers)
                    background: `
                        linear-gradient(256deg, rgba(255, 255, 255, 0.00) 79.27%, rgba(255, 255, 255, 0.30) 100%),
                        linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
                        url('/images/Abstract Design.png'),
                        linear-gradient(180deg, rgba(25, 25, 25, 0.00) 0%, #191919 89.62%),
                        url('/images/about-intro-bg.jpg')
                    `,
                    /* ملاحظة: قمت بتبسيط ترتيب الخلفيات قليلاً لضمان عملها في CSS. 
                       يرجى التأكد من وجود صورة باسم about-intro-bg.jpg أو استبدالها بالصورة المتاحة لديك.
                       Abstract Design.png هي النقش المتكرر.
                    */
                    backgroundSize: "cover, cover, 100px 100px, cover, cover",
                    backgroundRepeat: "no-repeat, no-repeat, repeat, no-repeat, no-repeat",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay, color, overlay, normal, normal",
                }}
            >
                {/* Center Icon (Green Box Logo) */}
                <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-brand-700 rounded-2xl flex items-center justify-center shadow-[0px_0px_30px_0px_rgba(158,255,0,0.30)] z-10">
                     {/* Icon Placeholder - Cube */}
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-12 md:h-12 text-neutral-900">
                        <path d="M21 16V8L12 3L3 8V16L12 21L21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                {/* Crosshair Lines Effect (Optional decoration based on image) */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-700/30"></div>
                    <div className="absolute left-1/2 top-0 h-full w-[1px] bg-brand-700/30"></div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}