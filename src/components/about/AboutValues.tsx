import React from "react";
import { Target, Lightbulb, Users, ShieldCheck, Zap, Globe } from "lucide-react";

export default function AboutValues() {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: "Innovation First",
      desc: "We don't just follow trends; we set them. Constantly exploring new tech to keep you ahead.",
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      desc: "Your success is our success. We build relationships, not just software.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Transparency",
      desc: "No hidden fees, no surprises. Just honest communication and clear processes.",
    },
    {
      icon: <Zap size={32} />,
      title: "Excellence",
      desc: "We obsess over details. From pixel-perfect designs to bug-free code.",
    },
  ];

  return (
    <section className="w-full flex justify-center px-4 md:px-0 mt-20">
      {/* Main Container */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-b border-neutral-700 bg-neutral-800">
        
        {/* 1. Header Section */}
        <div className="flex flex-col items-center text-center px-4 py-16 gap-6 border-b border-neutral-700 bg-[#242424]/20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-800 via-brand-700 to-neutral-800 opacity-50"></div>
            
            <h2 className="text-white font-barlow text-3xl md:text-5xl font-semibold">
                Driven by Passion, <span className="text-brand-700">Defined by Results.</span>
            </h2>
            <p className="text-neutral-200 font-barlow text-lg max-w-3xl leading-relaxed">
                At Code Zeen, our culture is built on a foundation of unyielding values. 
                We believe that great software is born from great principles.
            </p>
        </div>

        {/* 2. The Bento Grid Layout */}
        <div className="flex flex-col lg:flex-row w-full">
            
            {/* Left Column: The Big Mission Statement */}
            <div className="flex flex-col justify-center p-10 lg:p-16 gap-8 lg:w-2/5 border-b lg:border-b-0 lg:border-r border-neutral-700 bg-gradient-to-b from-neutral-800 to-[#1A1A1A]">
                <div className="w-16 h-16 rounded-2xl bg-brand-700 flex items-center justify-center text-neutral-900 mb-2 shadow-[0_0_20px_rgba(158,255,0,0.3)]">
                    <Target size={40} />
                </div>
                <h3 className="text-white font-barlow text-3xl font-bold leading-tight">
                    Our Mission
                </h3>
                <p className="text-neutral-300 font-barlow text-xl leading-relaxed">
                    "To empower businesses worldwide by bridging the gap between complex technology and intuitive user experiences, creating digital products that are not only functional but transformative."
                </p>
                
                {/* Visual Stat */}
                <div className="mt-6 pt-8 border-t border-neutral-700 flex gap-8">
                    <div>
                        <span className="block text-brand-700 text-3xl font-bold font-barlow">5+</span>
                        <span className="text-neutral-400 text-sm">Years Experience</span>
                    </div>
                    <div>
                        <span className="block text-brand-700 text-3xl font-bold font-barlow">100%</span>
                        <span className="text-neutral-400 text-sm">Client Satisfaction</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Values Grid (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:w-3/5">
                {values.map((item, index) => (
                    <div 
                        key={index}
                        className={`
                            flex flex-col p-10 gap-5 hover:bg-[#242424] transition-colors duration-300 group
                            border-b border-neutral-700
                            ${index % 2 === 0 ? "md:border-r" : ""}
                            ${index >= 2 ? "border-b-0" : ""}
                        `}
                    >
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-lg bg-neutral-700/50 flex items-center justify-center text-neutral-300 group-hover:text-brand-700 group-hover:bg-brand-700/10 transition-all">
                            {item.icon}
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <h4 className="text-white font-barlow text-2xl font-semibold group-hover:text-brand-400 transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-neutral-400 font-barlow text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

      </div>
    </section>
  );
}