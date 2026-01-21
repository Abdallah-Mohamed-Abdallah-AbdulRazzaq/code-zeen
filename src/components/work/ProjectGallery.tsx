"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(0);

  // حماية في حالة عدم وجود صور
  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      
      {/* 1. Thumbnails Strip (Top) */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`relative w-24 h-16 md:w-32 md:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
              activeImage === idx ? "border-brand-700 opacity-100" : "border-transparent opacity-50 hover:opacity-100"
            }`}
          >
            <Image src={img} alt="thumbnail" fill className="object-cover" />
          </button>
        ))}
      </div>

      {/* 2. Main Image View (Active) */}
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-700 group">
        <Image
          src={images[activeImage]}
          alt="Active Project View"
          fill
          className="object-cover transition-transform duration-700"
        />
        
        {/* Navigation Arrows */}
        <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-brand-700 hover:text-black transition-colors backdrop-blur-sm"
        >
            <ChevronLeft size={24} />
        </button>
        <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-brand-700 hover:text-black transition-colors backdrop-blur-sm"
        >
            <ChevronRight size={24} />
        </button>

        {/* Counter Badge */}
        <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-barlow text-sm">
            {activeImage + 1} / {images.length}
        </div>
      </div>

    </div>
  );
}