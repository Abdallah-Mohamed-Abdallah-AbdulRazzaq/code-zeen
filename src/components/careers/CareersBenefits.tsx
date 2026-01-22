import React from "react";

const benefits = [
  {
    title: "Innovative and Impactful Projects",
    description:
      "At Code Zeen, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
  },
  {
    title: "Supportive Environment",
    description:
      "We foster a supportive and inclusive work environment where every team member is valued and respected. We believe in the power of collaboration and teamwork, and we encourage open communication and idea sharing to help everyone succeed together.",
  },
  {
    title: "Continuous Learning and Growth",
    description:
      "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At Code Zeen, you'll have the chance to expand your skill set and stay up-to-date with the latest trends.",
  },
  {
    title: "Challenging and Rewarding Work",
    description:
      "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
  },
];

export default function CareersBenefits() {
  return (
    <section className="w-full flex justify-center px-4 md:px-0 mt-20">
      {/* Main Container */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-t border-b border-neutral-700 bg-neutral-800">
        
        {/* ---------------- Header Section ---------------- */}
        <div className="flex flex-col gap-[50px] px-4 py-10 md:px-[50px] lg:pt-[80px] lg:pb-[80px] border-b border-neutral-700 bg-[#242424]/20">
          <div className="flex flex-col gap-[14px] lg:pr-[300px]">
             <h2 className="text-white font-barlow text-3xl md:text-[48px] font-semibold leading-normal">
               Welcome to Code Zeen, where talent meets opportunity!
             </h2>
             <p className="text-neutral-200 font-barlow text-lg font-normal leading-[150%]">
               At Code Zeen, we believe that the success of our agency lies in the talent, passion, and dedication of our team members. We are a digital product agency that thrives on innovation, creativity, and collaboration. If you're ready to make a difference and contribute to cutting-edge projects, we invite you to explore career opportunities with us.
             </p>
          </div>
          
          {/* Badge */}
          <div className="inline-flex px-[14px] py-[12px] justify-center items-center gap-[10px] rounded-lg bg-[#262626] self-start border border-neutral-700">
             <span className="text-white font-barlow text-[20px] md:text-[22px] font-normal">
               Why Work at Code Zeen?
             </span>
          </div>
        </div>

        {/* ---------------- Benefits Grid ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            {benefits.map((benefit, index) => (
                <div 
                    key={index}
                    className={`
                        flex flex-col p-8 md:p-[50px] gap-[30px]
                        border-neutral-700 hover:bg-[#1A1A1A] transition-colors duration-300
                        ${/* إضافة Border Bottom لكل العناصر ما عدا الصف الأخير */ ""}
                        border-b
                        ${/* إضافة Border Right للعناصر الفردية في الديسكتوب */ ""}
                        ${index % 2 === 0 ? "lg:border-r" : ""}
                    `}
                >
                    {/* Title */}
                    <h3 className="text-brand-400 font-barlow text-2xl md:text-[28px] font-semibold leading-normal">
                        {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-200 font-barlow text-lg font-normal leading-[150%]">
                        {benefit.description}
                    </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}