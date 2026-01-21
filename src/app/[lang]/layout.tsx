import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "@/app/globals.css";
import { i18n } from "@/lib/i18n-config";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

// إعداد الخط Barlow
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code Zeen",
  description: "Innovative Software Solutions",
};

// هذه الدالة مهمة لبناء الصفحات بشكل Static وقت الـ Build
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang} dir={params.lang === "ar" ? "rtl" : "ltr"}>
      <body className={barlow.className}>
        {/* Navbar */}
        <Navbar lang={params.lang} />
        
        {/* Main Content */}
        <main className="min-h-screen bg-neutral-800">
            {children}
        </main>
        
        {/* Footer */}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}