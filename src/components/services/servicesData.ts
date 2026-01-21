// هذا الملف يحتوي على بيانات الأقسام الثلاثة (Design, Engineering, Project Management)
export const servicesData = [
  // ---------------- Section 2: Design ----------------
  {
    id: "design",
    title: "Design",
    description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.",
    subText: "Our design services include:",
    categories: [
      {
        title: "User Experience (UX) Design",
        items: [
          { icon: "/images/icons/design-1.svg", text: "User Research and Persona Development" },
          { icon: "/images/icons/design-2.svg", text: "Information Architecture and Wireframing" },
          { icon: "/images/icons/design-3.svg", text: "Interactive Prototyping and User Testing" },
          { icon: "/images/icons/design-4.svg", text: "UI Design and Visual Branding" },
        ]
      },
      {
        title: "User Interface (UI) Design",
        items: [
          { icon: "/images/icons/design-5.svg", text: "Intuitive and Visually Appealing Interface Design" },
          { icon: "/images/icons/design-6.svg", text: "Custom Iconography and Illustration" },
          { icon: "/images/icons/design-7.svg", text: "Typography and Color Palette Selection" },
          { icon: "/images/icons/design-8.svg", text: "Responsive Design for Various Devices" },
        ]
      },
      {
        title: "Branding and Identity",
        items: [
          { icon: "/images/icons/design-9.svg", text: "Logo Design and Visual Identity Development" },
          { icon: "/images/icons/design-10.svg", text: "Brand Strategy and Positioning" },
          { icon: "/images/icons/design-11.svg", text: "Brand Guidelines and Style Guides" },
          { icon: "/images/icons/design-12.svg", text: "Marketing Collateral Design (Brochures, Business Cards, etc.)" },
        ]
      }
    ]
  },
  // ---------------- Section 3: Engineering ----------------
  {
    id: "engineering",
    title: "Engineering",
    description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    subText: "Our engineering services include:",
    categories: [
      {
        title: "Web Development",
        items: [
          { icon: "/images/icons/eng-1.svg", text: "Front-End Development (HTML, CSS, JavaScript)" },
          { icon: "/images/icons/eng-2.svg", text: "Back-End Development (PHP, Python, Ruby)" },
          { icon: "/images/icons/eng-3.svg", text: "Content Management System (CMS) Development" },
          { icon: "/images/icons/eng-4.svg", text: "E-Commerce Platform Development" },
        ]
      },
      {
        title: "Mobile App Development",
        items: [
          { icon: "/images/icons/eng-5.svg", text: "Native iOS and Android App Development" },
          { icon: "/images/icons/eng-6.svg", text: "Cross-Platform App Development (React Native, Flutter)" },
          { icon: "/images/icons/eng-7.svg", text: "App Prototyping and UI/UX Design Integration" },
          { icon: "/images/icons/eng-8.svg", text: "App Testing, Deployment, and Maintenance" },
        ]
      },
      {
        title: "Custom Software Development",
        items: [
          { icon: "/images/icons/eng-9.svg", text: "Enterprise Software Development" },
          { icon: "/images/icons/eng-10.svg", text: "Custom Web Application Development" },
          { icon: "/images/icons/eng-11.svg", text: "Integration with Third-Party APIs and Systems" },
          { icon: "/images/icons/eng-12.svg", text: "Legacy System Modernization and Migration" },
        ]
      }
    ]
  },
  // ---------------- Section 4: Project Management ----------------
  {
    id: "project-management",
    title: "Project Management",
    description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools.",
    subText: "Our project management services include:",
    categories: [
      {
        title: "Project Planning and Scoping",
        items: [
          { icon: "/images/icons/pm-1.svg", text: "Requirements Gathering and Analysis" },
          { icon: "/images/icons/pm-2.svg", text: "Project Roadmap and Timeline Development" },
          { icon: "/images/icons/pm-3.svg", text: "Resource Allocation and Task Assignment" },
          { icon: "/images/icons/pm-4.svg", text: "Risk Assessment and Mitigation Strategies" },
        ]
      },
      {
        title: "Agile Development",
        items: [
          { icon: "/images/icons/pm-5.svg", text: "Iterative Development and Sprints" },
          { icon: "/images/icons/pm-6.svg", text: "Scrum or Kanban Methodology Implementation" },
          { icon: "/images/icons/pm-7.svg", text: "Regular Progress Updates and Demos" },
          { icon: "/images/icons/pm-8.svg", text: "Continuous Improvement and Feedback Incorporation" },
        ]
      },
      {
        title: "Quality Assurance and Testing",
        items: [
          { icon: "/images/icons/pm-9.svg", text: "Test Planning and Execution" },
          { icon: "/images/icons/pm-10.svg", text: "Functional and Usability Testing" },
          { icon: "/images/icons/pm-11.svg", text: "Performance and Security Testing" },
          { icon: "/images/icons/pm-12.svg", text: "Bug Tracking and Issue Resolution" },
        ]
      }
    ]
  }
];