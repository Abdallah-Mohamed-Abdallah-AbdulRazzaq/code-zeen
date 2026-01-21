"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; // تأكد من وجود هذه الأيقونة أو استبدالها
import { workProjects } from "./workData";

export default function WorkList() {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // سنعرض 4 مشاريع في الصفحة كما هو معتاد

  // Calculate Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = workProjects.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(workProjects.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of list smoothly (Optional)
    document.getElementById("work-list-top")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="work-list-top" className="w-full flex justify-center px-4 md:px-0">
      <div className="flex flex-col w-full max-w-[1596px] mt-20 border-l border-r border-t border-neutral-700 bg-neutral-800">
        
        {/* ---------------- Header Section ---------------- */}
        <div className="flex flex-col gap-[50px] p-4 md:p-[50px] lg:px-[100px] lg:py-[80px] border-b border-neutral-700">
          <div className="flex flex-col gap-5">
             <h2 className="text-white font-barlow text-4xl lg:text-[48px] font-semibold">
               At Code Zeen
             </h2>
             <p className="text-neutral-100 font-barlow text-lg font-normal leading-[150%] max-w-4xl">
               We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
             </p>
          </div>
          
          {/* Badge */}
          <div className="inline-flex px-[14px] py-[12px] justify-center items-center gap-[10px] rounded-lg bg-[#262626] self-start">
             <span className="text-white font-barlow text-[20px] md:text-[22px] font-normal">
               Here are ten examples of our notable works:
             </span>
          </div>
        </div>

        {/* ---------------- Projects Grid ---------------- */}
        {/* Grid: 2 Columns on Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {currentItems.map((project, index) => (
            <div 
              key={project.id} 
              className={`
                flex flex-col w-full
                ${/* إضافة حدود (Borders) ذكية للشبكة */ ""}
                border-b border-neutral-700
                ${index % 2 === 0 ? "lg:border-r" : ""} 
              `}
            >
              {/* Card Header (Category) */}
              <div className="flex p-[30px] md:px-[50px] md:py-[30px] bg-neutral-800 border-b border-neutral-700">
                 <h3 className="text-[#98989A] font-barlow text-[22px] md:text-[26px] font-medium">
                   {project.category}
                 </h3>
              </div>

              {/* Card Content */}
              <div className="flex flex-col p-[30px] md:p-[50px] gap-[30px]">
                
                {/* Project Image */}
                <div className="relative w-full h-[300px] md:h-[423px] rounded-xl overflow-hidden bg-neutral-700 group cursor-pointer">
                {/* التعديل: إضافة Link حول الصورة */}
                <Link href={`/work/${project.id}`}>
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay text on hover (Optional hint) */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white font-barlow text-lg font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">
                            View Case Study
                        </span>
                    </div>
                </Link>
                </div>

                {/* Info & Link Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-neutral-100 font-barlow text-2xl font-medium">
                            {project.title}
                        </h4>
                        {/* URL Badge */}
                        <div className="inline-flex px-[14px] py-[6px] rounded-lg bg-[#262626] border border-neutral-700 mt-2">
                             <span className="text-[#98989A] font-barlow text-lg">
                                {project.link.replace('https://', '')}
                             </span>
                        </div>
                    </div>
                    
                    {/* Arrow Button */}
                    <Link 
                        href={project.link}
                        target="_blank"
                        className="p-4 rounded-lg bg-[#262626] border border-neutral-700 text-brand-700 hover:bg-brand-700 hover:text-neutral-800 transition-colors"
                    >
                        <ArrowUpRight size={24} />
                    </Link>
                </div>

                {/* Description */}
                <p className="text-[#98989A] font-barlow text-lg font-normal leading-[150%]">
                    {project.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* ---------------- Pagination ---------------- */}
        {totalPages > 1 && (
             <div className="flex justify-center items-center gap-4 py-10 border-t border-neutral-700">
             
             {/* Previous Button */}
             <button
               onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
               disabled={currentPage === 1}
               className="p-3 rounded-lg bg-[#262626] text-white hover:bg-brand-700 hover:text-neutral-800 disabled:opacity-50 disabled:hover:bg-[#262626] disabled:hover:text-white transition-colors"
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
                     w-10 h-10 rounded-lg font-barlow font-medium transition-colors
                     ${currentPage === number 
                       ? "bg-brand-700 text-neutral-800" 
                       : "bg-[#262626] text-white hover:bg-neutral-700"}
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
               className="p-3 rounded-lg bg-[#262626] text-white hover:bg-brand-700 hover:text-neutral-800 disabled:opacity-50 disabled:hover:bg-[#262626] disabled:hover:text-white transition-colors"
             >
               &gt;
             </button>
           </div>
        )}
       
      </div>
    </section>
  );
}