import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // إعداد الخط Barlow
      fontFamily: {
        barlow: ['var(--font-barlow)'], 
      },
      colors: {
        // Absolute Colors
        white: "#FFFFFF",
        black: "#000000",

        // Green Shades (Code Zeen Brand)
        // قمت بترتيبها من الأفتح للأغمق أو العكس حسب الاستخدام، 
        // هنا جعلت الـ Main هو الـ 500 (اللون الأساسي #9EFF00)
        brand: {
          50:  "#FDFFFA", // Lightest
          100: "#F9FFF0",
          200: "#F5FFE5",
          300: "#ECFFCC",
          400: "#D8FF99",
          500: "#C5FF66",
          600: "#B1FF33",
          700: "#9EFF00", // The Main Green (Vibrant)
        },

        // Grey Shades
        // ترتيب معياري للرماديات
        neutral: {
          100: "#E6E6E6", // Lightest Grey
          200: "#98989A",
          300: "#656567",
          400: "#59595A",
          500: "#4C4C4D",
          600: "#333333",
          700: "#262626",
          800: "#191919", // Darkest Grey
        },
      },
// أضف إعدادات الأنيميشن هنا 👇
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;



// black: "#0023153c",
// 800: "#0023153c",
                  