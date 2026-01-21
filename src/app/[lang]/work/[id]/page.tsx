import { workProjects } from "@/components/work/workData";
import ProjectGallery from "@/components/work/ProjectGallery";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers, Clock, User } from "lucide-react";
import WorkCTA from "@/components/work/WorkCTA"; // سنعيد استخدامه هنا

// هذه الدالة تولد المسارات الثابتة للمشاريع (لتحسين الـ SEO والأداء)
export async function generateStaticParams() {
  return workProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function ProjectDetailsPage({ params }: { params: { id: string, lang: string } }) {
  // البحث عن المشروع باستخدام الـ ID
  const project = workProjects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return <div className="text-white text-center py-20">Project not found</div>;
  }

  // استخدام الصور من المصفوفة الجديدة، أو استخدام الصورة الرئيسية كبديل
  const galleryImages = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <div className="flex flex-col items-center w-full bg-neutral-800">
      
      {/* Container */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-neutral-700 bg-neutral-800">
        
        {/* ---------------- 1. Project Header ---------------- */}
        <div className="flex flex-col items-center text-center px-4 py-16 md:py-24 gap-6 border-b border-neutral-700 bg-[#242424]/20">
             <div className="inline-flex px-4 py-2 rounded-lg bg-neutral-700/50 border border-neutral-600">
                <span className="text-brand-400 font-barlow text-sm md:text-base font-medium uppercase tracking-wider">
                    {project.category}
                </span>
             </div>
             <h1 className="text-white font-barlow text-4xl md:text-6xl font-bold [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                {project.title}
             </h1>
             
             {/* Visit Live Site Button */}
             {project.link && (
                 <Link 
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 mt-4 rounded-lg bg-brand-700 hover:bg-brand-400 text-neutral-900 font-medium transition-all"
                 >
                    <span>Visit Live Site</span>
                    <ArrowUpRight size={20} />
                 </Link>
             )}
        </div>

        {/* ---------------- 2. Gallery Section ---------------- */}
        <div className="w-full p-4 md:p-10 lg:p-20 border-b border-neutral-700">
            <ProjectGallery images={galleryImages} />
        </div>

        {/* ---------------- 3. Info Grid (Details & Tech) ---------------- */}
        {/* تصميم مشابه للصورة image_ab8a18.jpg: وصف يسار، مميزات يمين */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full divide-y lg:divide-y-0 lg:divide-x divide-neutral-700">
            
            {/* Left Column: Overview & Challenge */}
            <div className="flex flex-col p-6 md:p-12 gap-10">
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-barlow text-2xl font-semibold flex items-center gap-3">
                        <span className="w-2 h-8 bg-brand-700 rounded-full"></span>
                        Project Overview
                    </h3>
                    <p className="text-neutral-200 font-barlow text-lg leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {project.challenge && (
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-barlow text-2xl font-semibold flex items-center gap-3">
                            <span className="w-2 h-8 bg-red-500 rounded-full"></span>
                            The Challenge
                        </h3>
                        <p className="text-neutral-200 font-barlow text-lg leading-relaxed">
                            {project.challenge}
                        </p>
                    </div>
                )}

                 {project.solution && (
                    <div className="flex flex-col gap-4">
                        <h3 className="text-white font-barlow text-2xl font-semibold flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                            The Solution
                        </h3>
                        <p className="text-neutral-200 font-barlow text-lg leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                )}
            </div>

            {/* Right Column: Tech Stack & Key Info */}
            <div className="flex flex-col p-6 md:p-12 gap-10 bg-[#242424]/10">
                
                {/* Tech Stack */}
                <div className="flex flex-col gap-5">
                    <h3 className="text-white font-barlow text-xl font-semibold flex items-center gap-2">
                        <Layers size={24} className="text-brand-700" />
                        Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                        {project.techStack?.map((tech, idx) => (
                            <span key={idx} className="px-4 py-2 rounded-lg border border-neutral-600 bg-neutral-800 text-neutral-200 font-barlow text-sm">
                                {tech}
                            </span>
                        )) || <span className="text-neutral-400">Not specified</span>}
                    </div>
                </div>

                {/* Key Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Client */}
                    <div className="p-5 rounded-xl bg-neutral-800 border border-neutral-700 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-brand-400">
                            <User size={20} />
                            <span className="text-sm font-medium">Client</span>
                        </div>
                        <span className="text-white font-barlow text-lg">{project.client || "Confidential"}</span>
                    </div>

                    {/* Timeline */}
                    <div className="p-5 rounded-xl bg-neutral-800 border border-neutral-700 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-brand-400">
                            <Clock size={20} />
                            <span className="text-sm font-medium">Timeline</span>
                        </div>
                        <span className="text-white font-barlow text-lg">{project.timeline || "Ongoing"}</span>
                    </div>
                </div>

                {/* Features List (Static for now, can be dynamic) */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-barlow text-xl font-semibold">Key Features</h3>
                    <ul className="flex flex-col gap-3">
                        {["Responsive Design", "SEO Optimized", "High Performance", "Secure Architecture"].map((feat, i) => (
                            <li key={i} className="flex items-center gap-3 text-neutral-300 font-barlow">
                                <CheckCircle2 size={18} className="text-brand-700" />
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>

        {/* 4. CTA (Reused) */}
        <WorkCTA />
        
      </div>
    </div>
  );
}