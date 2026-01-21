"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

// تعريف الروابط
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar({ lang }: { lang: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // منطق تغيير اللغة
  const switchLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <header className="w-full bg-neutral-800 border-b border-neutral-700 sticky top-0 z-50">
      {/* ---------------- Desktop View ---------------- */}
      {/* Layout: padding: 20px 162px | justify-between */}
      <div className="hidden lg:flex w-full items-center justify-between px-[162px] py-5 relative">
        
        {/* 1. Logo Section */}
        <Link href={`/${lang}`} className="flex items-center gap-2">
           {/* يمكنك استبدال هذا بصورة اللوجو لاحقاً */}
           <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-brand-700 rounded flex items-center justify-center">
               <span className="font-bold text-neutral-800">C</span>
             </div>
             <span className="text-white font-barlow font-semibold text-xl">Code Zeen</span>
           </div>
        </Link>

        {/* 2. Navigation Links (Absolute Center as requested logic) */}
        {/* استخدمنا absolute center لضمان توسطها بغض النظر عن عرض العناصر الجانبية */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden xl:flex items-center gap-[30px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={`/${lang}${link.href}`}
              className="flex px-7 py-[14px] items-start gap-[10px] rounded-lg bg-neutral-700 text-white font-barlow text-lg font-semibold leading-[150%] transition-colors hover:bg-brand-700 hover:text-neutral-800"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* 3. Action Buttons (Contact + Lang) */}
        <div className="flex items-center gap-4">
            {/* Contact Us Button */}
            <Link
                href={`/${lang}/contact`}
                className="flex px-6 py-4 items-center gap-2 rounded-lg bg-brand-700 text-neutral-700 font-barlow text-lg font-medium leading-[150%] hover:opacity-90 transition-opacity"
            >
                Contact Us
            </Link>

            {/* Language Switcher */}
            <button
                onClick={switchLanguage}
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-700 text-white font-barlow font-medium border border-transparent hover:border-brand-700 transition-colors"
            >
                {lang === "en" ? "AR" : "EN"}
            </button>
        </div>
      </div>

      {/* ---------------- Mobile View ---------------- */}
      {/* Layout: padding: 40px 16px 20px 16px */}
      <div className="flex lg:hidden justify-between items-center pt-10 pb-5 px-4">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-2">
            <span className="text-white font-barlow font-semibold text-lg">Code Zeen</span>
        </Link>

        <div className="flex items-center gap-4">
            {/* Mobile Lang Switcher (Optional for Mobile) */}
            <button onClick={switchLanguage} className="text-white text-sm font-barlow">
                {lang === "en" ? "AR" : "EN"}
            </button>

            {/* Hamburger Button */}
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center p-1.5 gap-2 rounded-md bg-neutral-700 w-[34px] h-[34px]"
            >
            {/* The SVG provided */}
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" className="w-full h-full">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.25 9.5625C4.25 8.9757 4.7257 8.5 5.3125 8.5H28.6875C29.2743 8.5 29.75 8.9757 29.75 9.5625C29.75 10.1493 29.2743 10.625 28.6875 10.625H5.3125C4.7257 10.625 4.25 10.1493 4.25 9.5625ZM4.25 17C4.25 16.4132 4.7257 15.9375 5.3125 15.9375H28.6875C29.2743 15.9375 29.75 16.4132 29.75 17C29.75 17.5868 29.2743 18.0625 28.6875 18.0625H5.3125C4.7257 18.0625 4.25 17.5868 4.25 17ZM15.9375 24.4375C15.9375 23.8507 16.4132 23.375 17 23.375H28.6875C29.2743 23.375 29.75 23.8507 29.75 24.4375C29.75 25.0243 29.2743 25.5 28.6875 25.5H17C16.4132 25.5 15.9375 25.0243 15.9375 24.4375Z" fill="#D8FF99"/>
            </svg>
            </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Simple implementation) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-neutral-800 px-4 pb-6 border-b border-neutral-700">
            <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                    <Link
                    key={link.name}
                    href={`/${lang}${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white text-lg font-barlow font-medium py-2 border-b border-neutral-700 hover:text-brand-700"
                    >
                    {link.name}
                    </Link>
                ))}
                 <Link
                    href={`/${lang}/contact`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-2 text-center rounded-lg bg-brand-700 text-neutral-700 font-barlow text-lg font-medium py-3"
                >
                    Contact Us
                </Link>
            </nav>
        </div>
      )}
    </header>
  );
}