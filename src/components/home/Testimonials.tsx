import Image from "next/image";
import Link from "next/link";

// بيانات العملاء (يمكنك تغيير الصور والنصوص لاحقاً)
const testimonials = [
  {
    title: "SquareUp has been Instrumental in Transforming our Online Presence.",
    text: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    name: "John Smith",
    position: "CEO of Chic Boutique",
    image: "/images/avatars/Profile-1.png", // ضع صور الأشخاص هنا
    website: "#",
  },
  {
    title: "Working with SquareUp was a breeze.",
    text: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.",
    name: "Sarah Johnson",
    position: "Founder of HungryBites",
    image: "/images/avatars/Profile-2.png",
    website: "#",
  },
  {
    title: "SquareUp developed a comprehensive booking and reservation system.",
    text: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
    name: "Mark Thompson",
    position: "CEO of EventMasters",
    image: "/images/avatars/Profile-3.png",
    website: "#",
  },
  {
    title: "ProTech Solutions turned to SquareUp to automate our workflow.",
    text: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.",
    name: "Laura Adams",
    position: "COO of ProTech Solutions",
    image: "/images/avatars/Profile-4.png",
    website: "#",
  },
  {
    title: "SquareUp designed and developed a captivating web portal.",
    text: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
    name: "Michael Anderson",
    position: "Founder of Dream Homes Realty",
    image: "/images/avatars/Profile-5.png",
    website: "#",
  },
  {
    title: "FitLife Tracker wanted a mobile app that tracked fitness activities.",
    text: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
    name: "Emily Turner",
    position: "CEO of FitLife Tracker",
    image: "/images/avatars/Profile-6.png",
    website: "#",
  },
];

export default function Testimonials() {
  return (
    <section className="flex justify-center w-full px-4 md:px-0">
      {/* Main Container */}
      <div className="flex flex-col w-full max-w-[1596px] border-l border-r border-b border-neutral-700 bg-neutral-800">
        
        {/* ---------------- 1. Header Section ---------------- */}
        <div
          className="flex flex-col items-center justify-center text-center px-4 py-20 lg:py-[120px] lg:px-[300px] gap-[14px] border-b border-neutral-700 w-full relative"
          style={{
            background: `
              linear-gradient(0deg, rgba(172, 255, 36, 0.20) 0%, rgba(172, 255, 36, 0.20) 100%),
              url('/images/Testimonials Section.png')
            `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundBlendMode: "color, normal, overlay",
          }}
        >
          <h2 className="text-white font-barlow text-3xl md:text-[48px] font-semibold leading-normal">
            What our Clients say About us
          </h2>
          <p className="text-neutral-100 font-barlow text-lg font-normal leading-[150%] tracking-[-0.108px]">
            At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* ---------------- 2. Cards Grid (2 Columns) ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-start gap-10 p-6 lg:p-[100px] lg:px-[80px]
                ${/* Border Logic:
                    - Border Bottom: For all except the last 2 items (in desktop view)
                    - Border Right: For even items (index % 2 === 0) 
                 */ ""}
                ${index < testimonials.length - 2 ? "lg:border-b border-neutral-700" : ""}
                ${index % 2 === 0 ? "lg:border-r border-neutral-700" : ""}
                ${/* Mobile Borders: Bottom border for all except last one */ ""}
                ${index !== testimonials.length - 1 ? "max-lg:border-b max-lg:border-neutral-700" : ""}
              `}
            >
              
              {/* Top Text Content */}
              <div className="flex flex-col gap-[40px] w-full">
                {/* Heading */}
                <h3 className="text-brand-400 font-barlow text-[28px] font-medium leading-[150%]">
                  {item.title}
                </h3>
                {/* Paragraph */}
                <p className="text-neutral-100 font-barlow text-lg font-normal leading-[150%]">
                  {item.text}
                </p>
              </div>

              {/* Bottom Profile Container */}
              {/* Style: bg rgba(36,36,36, 0.20), border Grey-15, radius 8px */}
              <div className="flex flex-col sm:flex-row justify-between items-center w-full p-5 gap-[10px] rounded-lg border border-neutral-700 bg-[#242424]/20 mt-auto">
                
                {/* User Info Wrapper */}
                <div className="flex items-center gap-[10px] w-full sm:w-auto">
                  
                  {/* Profile Image */}
                  <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden border border-transparent">
                     {/* Image with overlay effect if needed, simpler to just use Next/Image directly */}
                     <Image 
                        src={item.image} 
                        alt={item.name} 
                        fill 
                        className="object-cover"
                     />
                  </div>

                  {/* Name & Position */}
                  <div className="flex flex-col">
                    <span className="text-white font-barlow text-xl font-medium leading-[150%]">
                        {item.name}
                    </span>
                    <span className="text-neutral-100 font-barlow text-lg font-normal leading-[150%]">
                        {item.position}
                    </span>
                  </div>
                </div>

                {/* Open Website Button */}
                <Link
                  href={item.website}
                  className="flex px-5 py-[18px] items-center justify-center gap-[10px] rounded-lg bg-neutral-700 text-white font-barlow text-lg font-medium hover:bg-brand-700 hover:text-neutral-800 transition-colors w-full sm:w-auto mt-4 sm:mt-0"
                >
                  Open Website
                </Link>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}