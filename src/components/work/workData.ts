export const workProjects = [
  {
    id: 1,
    category: "E-Commerce Platform for Fashion Hub",
    title: "Chic Boutique",
    description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique. The platform featured seamless product browsing, secure payment integration, and personalized recommendations.",
    link: "https://www.chicboutique.com",
    image: "/images/works/work-1.png",
    // --- بيانات إضافية لصفحة التفاصيل ---
    images: [
      "/images/works/work-1.png",
      "/images/works/work-2.png", // صور إضافية (مؤقتة للتجربة)
      "/images/works/work-3.png",
    ],
    client: "Chic Boutique Inc.",
    timeline: "3 Months",
    techStack: ["Next.js", "Shopify API", "Tailwind CSS", "Redux"],
    challenge: "The main challenge was to integrate a complex inventory system with the frontend in real-time while maintaining high performance and a smooth UX.",
    solution: "We utilized Next.js for server-side rendering to ensure fast load times and implemented a custom middleware to sync inventory data instantly."
  },
  {
    id: 2,
    category: "Mobile App for Food Delivery Service",
    title: "HungryBites",
    description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking and easy menu customization.",
    link: "https://www.hungrybites.com",
    image: "/images/works/work-2.png",
    images: [
      "/images/works/work-2.png",
      "/images/works/work-4.png",
      "/images/works/work-5.png",
    ],
    client: "HungryBites Ltd.",
    timeline: "4 Months",
    techStack: ["React Native", "Firebase", "Node.js", "Google Maps API"],
    challenge: "Tracking drivers in real-time with minimal latency and battery consumption for the user app.",
    solution: "Optimized WebSocket connections and implemented efficient background location tracking algorithms."
  },
  // ... يمكنك إضافة باقي البيانات لبقية المشاريع بنفس النمط
  {
    id: 3,
    category: "Booking System",
    title: "EventMasters",
    description: "EventMasters required a comprehensive booking and reservation system.",
    link: "https://www.eventmasters.com",
    image: "/images/works/work-3.png",
    images: ["/images/works/work-3.png", "/images/works/work-1.png"],
    client: "EventMasters",
    timeline: "2 Months",
    techStack: ["Vue.js", "Laravel", "MySQL"],
    challenge: "Handling high traffic spikes during ticket launches.",
    solution: "Implemented a queue system and load balancing."
  },
  {
    id: 4,
    category: "Custom Software for Workflow Automation",
    title: "ProTech Solutions",
    description: "ProTech Solutions turned to SquareUp to automate their workflow. We engineered a custom software solution that integrated with their existing systems, reducing manual data entry and errors significantly.",
    link: "https://www.protechsolutions.com",
      image: "/images/works/work-4.png",
    images: [
      "/images/works/work-2.png",
      "/images/works/work-4.png",
      "/images/works/work-5.png",
    ],
    client: "HungryBites Ltd.",
    timeline: "4 Months",
    techStack: ["React Native", "Firebase", "Node.js", "Google Maps API"],
    challenge: "Tracking drivers in real-time with minimal latency and battery consumption for the user app.",
    solution: "Optimized WebSocket connections and implemented efficient background location tracking algorithms."
  },
  {
    id: 5,
    category: "Web Portal for Real Estate Listings",
    title: "Dream Homes Realty",
    description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.",
    link: "https://www.dreamhomesrealty.com",
      image: "/images/works/work-5.png",
    images: [
      "/images/works/work-2.png",
      "/images/works/work-4.png",
      "/images/works/work-5.png",
    ],
    client: "HungryBites Ltd.",
    timeline: "4 Months",
    techStack: ["React Native", "Firebase", "Node.js", "Google Maps API"],
    challenge: "Tracking drivers in real-time with minimal latency and battery consumption for the user app.",
    solution: "Optimized WebSocket connections and implemented efficient background location tracking algorithms."
  },
  {
    id: 6,
    category: "Mobile App for Fitness Tracking",
    title: "FitLife Tracker",
    description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.",
    link: "https://www.fitlifetracker.com",
      image: "/images/works/work-6.png",
    images: [
      "/images/works/work-2.png",
      "/images/works/work-4.png",
      "/images/works/work-5.png",
    ],
    client: "HungryBites Ltd.",
    timeline: "4 Months",
    techStack: ["React Native", "Firebase", "Node.js", "Google Maps API"],
    challenge: "Tracking drivers in real-time with minimal latency and battery consumption for the user app.",
    solution: "Optimized WebSocket connections and implemented efficient background location tracking algorithms."
  },
];