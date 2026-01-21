import Link from "next/link";
import { 
  Facebook, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

// بيانات التواصل والروابط
const socialLinks = [
    { icon: <Facebook size={24} />, href: "https://www.facebook.com/profile.php?id=61586909601864&rdid=17HdZd6YP0ZdzNC0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AttktKnQ8%2F#", label: "Facebook" },
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/codezeen1?igsh=Zjdrb2p2bzM0dXZq", label: "Instagram" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/code-zeen-7a08b73a6/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" }
];

const contactInfo = {
    email: "hello@codezeen.com",
    phone: "+91 91813 23 2309",
    // رابط جوجل ماب (يمكنك وضع الإحداثيات الدقيقة لاحقاً)
    address: "Somewhere in the World",
    mapLink: "https://www.google.com/maps/search/?api=1&query=Somewhere+in+the+World" 
};

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="w-full bg-neutral-800 border-t border-neutral-700">
      
      {/* ---------------- Section 1: Navigation & Socials ---------------- */}
      <div className="w-full px-4 lg:px-[162px] py-[50px] flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 border-b border-neutral-700">
        
        {/* 1. Logo & Links Section */}
        <div className="flex flex-col lg:flex-row items-center gap-[30px]">
           {/* Logo */}
           <div className="flex items-center gap-2 mb-4 lg:mb-0">
             <div className="w-8 h-8 bg-brand-700 rounded flex items-center justify-center">
               <span className="font-bold text-neutral-800">C</span>
             </div>
             <span className="text-white font-barlow font-semibold text-xl">Code Zeen</span>
           </div>

           {/* Navigation Links */}
           <nav className="flex flex-wrap justify-center gap-[30px]">
             {navLinks.map((link) => (
               <Link
                 key={link.name}
                 href={`/${lang}${link.href}`}
                 className="text-neutral-100 font-barlow text-lg font-medium leading-[150%] hover:text-brand-700 transition-colors"
               >
                 {link.name}
               </Link>
             ))}
           </nav>
        </div>

        {/* 2. Stay Connected Box */}
        <div className="flex items-center gap-5 p-[14px] pl-6 rounded-xl border border-neutral-700 bg-neutral-800">
            <span className="text-neutral-100 font-barlow text-lg font-medium leading-[150%]">
                Stay Connected
            </span>

            {/* Social Icons Links */}
            <div className="flex gap-[10px]">
                {socialLinks.map((social, index) => (
                    <a 
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex p-5 flex-col items-start gap-[10px] rounded-lg border border-[#2E2E2E] bg-gradient-to-b from-[#242424] to-transparent cursor-pointer hover:border-brand-700 transition-all group"
                        aria-label={social.label}
                    >
                        <div className="text-white group-hover:text-brand-700">
                            {social.icon}
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </div>

      {/* ---------------- Section 2: Contact Info & Copyright ---------------- */}
      <div className="w-full px-4 lg:px-[162px] py-[50px] flex flex-col gap-[50px]">
        
        {/* Contact Details Grid */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-[30px] w-full border-b border-neutral-700 pb-[50px] lg:border-none lg:pb-0">
            
            {/* Contact Item 1: Email (mailto) */}
            <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center gap-[10px] pb-4 border-b border-neutral-700 w-full lg:w-auto hover:opacity-80 transition-opacity"
            >
                <div className="text-brand-400">
                    <Mail size={24} />
                </div>
                <span className="text-neutral-100 font-barlow text-lg font-normal leading-[150%]">
                    {contactInfo.email}
                </span>
            </a>

            {/* Contact Item 2: Phone (tel) */}
            <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                className="flex items-center gap-[10px] pb-4 border-b border-neutral-700 w-full lg:w-auto hover:opacity-80 transition-opacity"
            >
                <div className="text-brand-400">
                    <Phone size={24} />
                </div>
                <span className="text-neutral-100 font-barlow text-lg font-normal leading-[150%]">
                    {contactInfo.phone}
                </span>
            </a>

             {/* Contact Item 3: Location (Google Maps) */}
             <a 
                href={contactInfo.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[10px] pb-4 border-b border-neutral-700 w-full lg:w-auto hover:opacity-80 transition-opacity"
            >
                <div className="text-brand-400">
                    <MapPin size={24} />
                </div>
                <span className="text-neutral-100 font-barlow text-lg font-normal leading-[150%]">
                    {contactInfo.address}
                </span>
            </a>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-center lg:justify-between items-center w-full pt-6 lg:pt-0 lg:border-t lg:border-neutral-700">
            <span className="text-neutral-200 font-barlow text-lg font-normal leading-[150%]">
                © {new Date().getFullYear()} Code Zeen. All rights reserved.
            </span>
        </div>

      </div>
    </footer>
  );
}