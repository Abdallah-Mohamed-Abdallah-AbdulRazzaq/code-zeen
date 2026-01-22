"use client"; // ضروري لاستخدام الـ State

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Dribbble, Github } from "lucide-react";

// بيانات وهمية للفريق (قمنا بمضاعفتها لتجربة التصفح)
const teamMembers = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in digital transformation. Sarah drives the strategic direction of Code Zeen with a focus on innovation.",
    image: "/images/avatars/Profile-1.png",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: 2,
    name: "David Ross",
    role: "Chief Technology Officer",
    bio: "A full-stack architect obsessed with scalable code. David ensures that every product we build is robust, secure, and future-proof.",
    image: "/images/avatars/Profile-2.png",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 3,
    name: "Emily Tao",
    role: "Head of Design",
    bio: "Award-winning UI/UX designer who believes that beauty and functionality must coexist. She crafts the visual soul of our projects.",
    image: "/images/avatars/Profile-3.png",
    socials: { linkedin: "#", dribbble: "#" }
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Lead Frontend Dev",
    bio: "Pixel-perfectionist and React wizard. Michael brings designs to life with smooth animations and responsive layouts.",
    image: "/images/avatars/Profile-4.png",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 5,
    name: "Jessica Alverez",
    role: "Project Manager",
    bio: "The bridge between clients and code. Jessica ensures projects are delivered on time, within budget, and beyond expectations.",
    image: "/images/avatars/Profile-5.png",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: 6,
    name: "Robert Fox",
    role: "Backend Specialist",
    bio: "Expert in cloud infrastructure and database optimization. Robert handles the heavy lifting behind the scenes.",
    image: "/images/avatars/Profile-6.png",
    socials: { linkedin: "#", github: "#" }
  },
  // --- تكرار البيانات لتجربة الصفحة الثانية ---
  {
    id: 7,
    name: "Sarah Jenkins",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in digital transformation. Sarah drives the strategic direction of Code Zeen with a focus on innovation.",
    image: "/images/avatars/Profile-1.png",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: 8,
    name: "David Ross",
    role: "Chief Technology Officer",
    bio: "A full-stack architect obsessed with scalable code. David ensures that every product we build is robust, secure, and future-proof.",
    image: "/images/avatars/Profile-2.png",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 9,
    name: "Emily Tao",
    role: "Head of Design",
    bio: "Award-winning UI/UX designer who believes that beauty and functionality must coexist. She crafts the visual soul of our projects.",
    image: "/images/avatars/Profile-3.png",
    socials: { linkedin: "#", dribbble: "#" }
  },
  {
    id: 10,
    name: "Michael Chen",
    role: "Lead Frontend Dev",
    bio: "Pixel-perfectionist and React wizard. Michael brings designs to life with smooth animations and responsive layouts.",
    image: "/images/avatars/Profile-4.png",
    socials: { linkedin: "#", github: "#" }
  },
  {
    id: 11,
    name: "Jessica Alverez",
    role: "Project Manager",
    bio: "The bridge between clients and code. Jessica ensures projects are delivered on time, within budget, and beyond expectations.",
    image: "/images/avatars/Profile-5.png",
    socials: { linkedin: "#", twitter: "#" }
  },
  {
    id: 12,
    name: "Robert Fox",
    role: "Backend Specialist",
    bio: "Expert in cloud infrastructure and database optimization. Robert handles the heavy lifting behind the scenes.",
    image: "/images/avatars/Profile-6.png",
    socials: { linkedin: "#", github: "#" }
  },
];

export default function TeamSection() {
  // --- Pagination State ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // عرض 6 أعضاء في الصفحة الواحدة (3 أعمدة × 2 صفوف)

  // --- Calculations ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = teamMembers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // سكرول ناعم لأعلى السكشن عند تغيير الصفحة
    document.getElementById("team-section-top")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="team-section-top" className="w-full flex justify-center px-4 md:px-0 mt-20">
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-b border-neutral-700 bg-neutral-800">
        
        {/* 1. Header Section */}
        <div className="flex flex-col items-center text-center px-4 py-16 gap-4 border-b border-neutral-700 bg-[#242424]/20">
            <div className="inline-flex px-4 py-2 rounded-lg bg-neutral-700/50 border border-neutral-600 mb-2">
                <span className="text-brand-400 font-barlow text-sm font-medium uppercase tracking-wider">
                    Our Experts
                </span>
            </div>
            <h2 className="text-white font-barlow text-3xl md:text-5xl font-semibold">
                Meet the Minds Behind <span className="text-brand-700">Code Zeen</span>
            </h2>
            <p className="text-neutral-200 font-barlow text-lg max-w-2xl leading-relaxed">
                A diverse team of designers, developers, and strategists united by a passion for creating exceptional digital products.
            </p>
        </div>

        {/* 2. Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
            {currentMembers.map((member, index) => (
                <div 
                    key={member.id}
                    className={`
                        group relative flex flex-col p-8 gap-6
                        bg-neutral-800 hover:bg-[#1A1A1A] transition-colors duration-500
                        border-b border-neutral-700
                        ${index % 3 !== 2 ? "lg:border-r" : ""} /* Border right except last col on desktop */
                        ${index % 2 === 0 ? "md:border-r lg:border-r-0" : ""} /* Tablet borders logic */
                    `}
                >
                    {/* Image Container */}
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-neutral-700 mb-2">
                        {/* Image: Grayscale by default, Color on Hover */}
                        <Image 
                            src={member.image} 
                            alt={member.name} 
                            fill 
                            className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                        />
                        
                        {/* Social Overlay (Slides up on hover) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {/* Social Icons Mapping */}
                                {member.socials.linkedin && (
                                    <Link href={member.socials.linkedin} className="p-2 bg-white/10 hover:bg-brand-700 hover:text-neutral-900 text-white rounded-full backdrop-blur-md transition-colors">
                                        <Linkedin size={20} />
                                    </Link>
                                )}
                                {member.socials.twitter && (
                                    <Link href={member.socials.twitter} className="p-2 bg-white/10 hover:bg-brand-700 hover:text-neutral-900 text-white rounded-full backdrop-blur-md transition-colors">
                                        <Twitter size={20} />
                                    </Link>
                                )}
                                {'dribbble' in member.socials && (
                                    <Link href={member.socials.dribbble!} className="p-2 bg-white/10 hover:bg-brand-700 hover:text-neutral-900 text-white rounded-full backdrop-blur-md transition-colors">
                                        <Dribbble size={20} />
                                    </Link>
                                )}
                                {'github' in member.socials && (
                                    <Link href={member.socials.github!} className="p-2 bg-white/10 hover:bg-brand-700 hover:text-neutral-900 text-white rounded-full backdrop-blur-md transition-colors">
                                        <Github size={20} />
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <h3 className="text-white font-barlow text-2xl font-semibold group-hover:text-brand-400 transition-colors">
                                {member.name}
                            </h3>
                            <span className="text-brand-700 font-barlow text-lg font-medium">
                                {member.role}
                            </span>
                        </div>
                        <p className="text-neutral-400 font-barlow text-base leading-relaxed line-clamp-3">
                            {member.bio}
                        </p>
                    </div>

                    {/* Interactive Bottom Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-700 group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </div>
            ))}
        </div>

        {/* 3. Pagination Controls (Only show if pages > 1) */}
        {totalPages > 1 && (
             <div className="flex justify-center items-center gap-4 py-10 border-t border-neutral-700 bg-[#242424]/20">
             
             {/* Previous Button */}
             <button
               onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
               disabled={currentPage === 1}
               className="p-3 rounded-lg bg-[#262626] border border-neutral-700 text-white hover:bg-brand-700 hover:text-neutral-800 disabled:opacity-50 disabled:hover:bg-[#262626] disabled:hover:text-white transition-colors"
             >
               &lt;
             </button>
 
             {/* Page Numbers */}
             <div className="flex gap-2">
               {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                 <button
                   key={number}
                   onClick={() => handlePageChange(number)}
                   className={`
                     w-10 h-10 rounded-lg font-barlow font-medium transition-colors border
                     ${currentPage === number 
                       ? "bg-brand-700 text-neutral-800 border-brand-700" 
                       : "bg-[#262626] text-white border-neutral-700 hover:bg-neutral-700"}
                   `}
                 >
                   {number}
                 </button>
               ))}
             </div>
 
             {/* Next Button */}
             <button
               onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
               disabled={currentPage === totalPages}
               className="p-3 rounded-lg bg-[#262626] border border-neutral-700 text-white hover:bg-brand-700 hover:text-neutral-800 disabled:opacity-50 disabled:hover:bg-[#262626] disabled:hover:text-white transition-colors"
             >
               &gt;
             </button>
           </div>
        )}

      </div>
    </section>
  );
}