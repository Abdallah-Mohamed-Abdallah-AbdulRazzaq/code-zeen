import React from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function MapSection() {
  return (
    <section className="w-full flex justify-center px-4 md:px-0 mt-20 mb-20">
      <div className="flex flex-col w-full max-w-[1596px] border border-neutral-700 bg-neutral-800 rounded-xl relative overflow-hidden h-[500px] md:h-[600px]">
        
        {/* 1. Interactive Map (Iframe) */}
        {/* يمكنك تغيير src برابط Embed الخاص بموقعك من Google Maps */}
        <iframe
          width="100%"
          height="100%"
          title="Code Zeen Location"
          style={{ border: 0, filter: "grayscale(100%) invert(90%)" }} // فلتر لجعل الخريطة داكنة لتتناسب مع الموقع
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.163777724644!2d31.2357!3d30.0444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAyJzQwLjAiTiAzMcKwMTQnMDguNSJF!5e0!3m2!1sen!2seg!4v1638367200000!5m2!1sen!2seg"
        ></iframe>

        {/* 2. Floating Location Card */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-[#1A1A1A]/90 backdrop-blur-md border border-neutral-700 p-6 md:p-8 rounded-xl shadow-2xl max-w-sm">
            <div className="flex flex-col gap-6">
                
                {/* Header */}
                <div className="flex flex-col gap-2">
                    <div className="inline-flex px-3 py-1 rounded bg-brand-700/20 text-brand-700 text-xs font-medium w-fit border border-brand-700/30">
                        Headquarters
                    </div>
                    <h3 className="text-white font-barlow text-2xl font-semibold">
                        Visit Our Office
                    </h3>
                </div>

                {/* Details List */}
                <div className="flex flex-col gap-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                        <MapPin className="text-brand-700 mt-1" size={20} />
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            99 Street, Downtown,<br />
                            Cairo, Egypt
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <Mail className="text-brand-700" size={20} />
                        <a href="mailto:hello@codezeen.com" className="text-neutral-300 text-sm hover:text-white transition-colors">
                            hello@codezeen.com
                        </a>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <Phone className="text-brand-700" size={20} />
                        <a href="tel:+201000000000" className="text-neutral-300 text-sm hover:text-white transition-colors">
                            +20 100 000 0000
                        </a>
                    </div>
                </div>

                {/* Direction Button */}
                <a 
                    href="https://maps.google.com" 
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-brand-700 text-neutral-900 rounded-lg font-medium hover:bg-brand-500 transition-colors"
                >
                    <span>Get Directions</span>
                    <ArrowUpRight size={18} />
                </a>

            </div>
        </div>

      </div>
    </section>
  );
}