"use client";

import { useState } from "react";

// بيانات الأسئلة الشائعة
const faqs = [
  {
    id: 1,
    question: "What services does SquareUp provide?",
    answer:
      "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.",
  },
  {
    id: 2,
    question: "How can SquareUp help my business?",
    answer:
      "We help businesses by providing tailored digital solutions that streamline operations, enhance user engagement, and drive growth through cutting-edge technology and design.",
  },
  {
    id: 3,
    question: "What industries does SquareUp work with?",
    answer:
      "We work with a diverse range of industries including healthcare, finance, e-commerce, education, and logistics, adapting our strategies to meet specific industry standards and needs.",
  },
  {
    id: 4,
    question: "How long does it take to complete a project with SquareUp?",
    answer:
      "Project timelines vary based on complexity and scope. Typically, a standard project can take anywhere from 4 to 12 weeks. We provide a detailed timeline during the initial consultation.",
  },
  {
    id: 5,
    question: "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your digital product remains secure, up-to-date, and performs optimally.",
  },
  {
    id: 6,
    question: "Can you work with existing design or development frameworks?",
    answer:
      "Absolutely. Our team is proficient in a wide array of modern frameworks and technologies. We can integrate with your existing systems or build upon current foundations seamlessly.",
  },
  {
    id: 7,
    question: "How involved will I be in the project development process?",
    answer:
      "We believe in collaborative partnerships. You will be involved at every key stage, from planning and design approvals to regular progress updates and testing phases.",
  },
  {
    id: 8,
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we provide dedicated maintenance services to handle updates, bug fixes, and feature enhancements, allowing you to focus on your core business operations.",
  },
];

export default function FAQ() {
  // حالة لتخزين معرف السؤال المفتوح حالياً
  const [openId, setOpenId] = useState<number | null>(1); // جعلنا الأول مفتوحاً افتراضياً

  // دالة لتبديل الحالة
  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="flex justify-center w-full px-4 md:px-0">
      {/* Main Container */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-b border-neutral-700 bg-neutral-800">
        
        {/* ---------------- 1. Header Section ---------------- */}
        <div
          className="flex flex-col items-center justify-center text-center px-4 py-20 lg:py-[120px] lg:px-[350px] gap-[10px] border-b border-neutral-700 w-full relative"
          style={{
            background: `
              linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
              url('/images/FAQ Section.png')
            `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "color, normal, overlay",
          }}
        >
          <h2 className="text-white font-barlow text-3xl md:text-[48px] font-semibold leading-normal">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-100 font-barlow text-lg font-normal leading-[150%] tracking-[-0.108px]">
            Still you have any questions? Contact our Team via hello@squareup.com
          </p>
        </div>

        {/* ---------------- 2. Items Container (Grid) ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {faqs.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`
                  flex flex-col w-full transition-all duration-300
                  ${/* Border Logic: Same as previous sections */ ""}
                  ${index < faqs.length - 2 ? "lg:border-b border-neutral-700" : ""}
                  ${index % 2 === 0 ? "lg:border-r border-neutral-700" : ""}
                  ${index !== faqs.length - 1 ? "max-lg:border-b max-lg:border-neutral-700" : ""}
                `}
              >
                {/* Clickable Area */}
                <div 
                    onClick={() => toggleFAQ(item.id)}
                    className={`
                        flex items-start gap-[30px] cursor-pointer
                        ${isOpen ? "p-[34px] lg:px-[50px]" : "p-[30px] lg:px-[50px] items-center"}
                    `}
                >
                    
                    {/* Number Box (Container) */}
                    <div 
                        className="flex flex-col justify-center items-center w-[50px] h-[50px] md:w-[60px] md:h-[60px] p-5 rounded-xl border border-[#2E2E2E] shrink-0"
                        style={{
                            background: `linear-gradient(180deg, #242424 0%, rgba(36, 36, 36, 0.00) 100%)`
                        }}
                    >
                        <span className={`font-barlow text-[24px] md:text-[28px] font-semibold leading-[150%] ${isOpen ? "text-brand-700" : "text-white"}`}>
                            {item.id < 10 ? `0${item.id}` : item.id}
                        </span>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-col gap-[30px] flex-1">
                        
                        {/* Heading & Icon Row */}
                        <div className="flex justify-between items-center gap-4 w-full">
                            <h3 className={`font-barlow text-[18px] md:text-[22px] font-medium leading-normal ${isOpen ? "text-brand-500" : "text-white"}`}>
                                {item.question}
                            </h3>
                            
                            {/* Icon Toggle */}
                            <div className="w-[34px] h-[34px] shrink-0">
                                {isOpen ? (
                                    // SVG: Close (X) - Color #C5FF66 (brand-500)
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                        <path d="M10.6766 8.87344C10.1786 8.37552 9.37136 8.37552 8.87344 8.87344C8.37552 9.37136 8.37552 10.1786 8.87344 10.6766L15.1969 17L8.87344 23.3234C8.37552 23.8214 8.37552 24.6286 8.87344 25.1266C9.37136 25.6245 10.1786 25.6245 10.6766 25.1266L17 18.8031L23.3234 25.1266C23.8214 25.6245 24.6286 25.6245 25.1266 25.1266C25.6245 24.6286 25.6245 23.8214 25.1266 23.3234L18.8031 17L25.1266 10.6766C25.6245 10.1786 25.6245 9.37136 25.1266 8.87344C24.6286 8.37552 23.8214 8.37552 23.3234 8.87344L17 15.1969L10.6766 8.87344Z" fill="#C5FF66"/>
                                    </svg>
                                ) : (
                                    // SVG: Open (+) - Color White
                                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                        <path d="M18.275 8.0748C18.275 7.37064 17.7042 6.7998 17 6.7998C16.2959 6.7998 15.725 7.37064 15.725 8.0748V15.7248H8.07505C7.37089 15.7248 6.80005 16.2956 6.80005 16.9998C6.80005 17.704 7.37089 18.2748 8.07505 18.2748L15.725 18.2748V25.9248C15.725 26.629 16.2959 27.1998 17 27.1998C17.7042 27.1998 18.275 26.629 18.275 25.9248V18.2748L25.925 18.2748C26.6292 18.2748 27.2 17.704 27.2 16.9998C27.2 16.2956 26.6292 15.7248 25.925 15.7248H18.275V8.0748Z" fill="white"/>
                                    </svg>
                                )}
                            </div>
                        </div>

                        {/* Paragraph (Conditional Render) */}
                        {isOpen && (
                             <p className="text-neutral-100 font-barlow text-lg font-normal leading-[150%] animate-fadeIn">
                                {item.answer}
                             </p>
                        )}
                    </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}