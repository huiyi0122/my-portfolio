export const projectsData = {
  "hr-dashboard": {
    id: "hr-dashboard",
    title: "HR Dashboard",
    subtitle: "Interview & Candidate Management System",
    year: "2025",
    type: "Professional Project",
    role: "Full-Stack Developer",
    duration: "3 months",
    techStack: ["Next.js", "TypeScript", "Cloudflare", "Tailwind CSS"],
    mainImage: "/images/light_mode/project/hr-dashboard-main.png",
    slides: [
      {
        url: "/images/light_mode/project/hr-dashboard-main.png",
        caption: "Login Page",
      },
      {
        url: "/images/light_mode/project/dashboard.png",
        caption: "Dashoboard Overview",
      },
      {
        url: "/images/light_mode/project/hr-dashboard-form.png",
        caption: "Form Integration",
      },
    ],

    goal: {
      title: "PROJECT GOAL",
      description:
        "To streamline interview management workflows by providing HR teams with a centralized, efficient platform for managing candidates, forms, and submissions.",
      details:
        "The system integrates with MS Forms API to enable seamless template management, real-time status tracking, and comprehensive audit trails—empowering HR professionals to make faster, more informed hiring decisions while maintaining complete transparency throughout the interview process.",
    },

    audience: [
      {
        title: "HR Team",
        icon: "/images/light_mode/project/hr-team.png",
        description:
          "Human resources professionals who need to manage interview processes, track candidates, and organize submission forms efficiently",
      },
      {
        title: "Hiring Managers",
        icon: "/images/light_mode/project/managers.png",
        description:
          "Managers who want to review candidate submissions, monitor interview progress, and make data-driven hiring decisions",
      },
      {
        title: "System Administrators",
        icon: "/images/light_mode/project/admin.png",
        description:
          "IT administrators who need to manage user access, configure form templates, and maintain system integrity",
      },
    ],

    responsive: {
      description:
        "Fully responsive web app with optimized UX both desktop and tablet experiences, ensuring HR teams can manage workflows on any device.",
      desktop: "/images/light_mode/project/hrDashboard_responsive(1).png",
      tablet: "/images/light_mode/project/hrDashboard_responsive.png",
    },

    overview: {
      description:
        "A full-stack web application that streamlines interview management. Integrates with MS Forms for automated data collection and provides real-time updates.",
      details:
        "The system features MS Forms integration via dynamic real-time candidate dashboard with advanced search and filtering capabilities. Built with Next.js and TypeScript for type-safe, scalable codebase. PostgreSQL database for secure interview data and user tracking.",
    },

    features: [
      {
        number: "01",
        title: "MS Form template management with full CRUD operations",
        icon: "📋",
        sticker: "/images/light_mode/project/hr-f1.png",
      },
      {
        number: "02",
        title: "Status tracking system with pending/submitted filters",
        icon: "🔍",
        sticker: "/images/light_mode/project/hr-f2.png",
      },
      {
        number: "03",
        title: "Pagination with customizable page size options",
        icon: "⚙️",
        sticker: "/images/light_mode/project/hr-f3.png",
      },
      {
        number: "04",
        title: "Activity history log for comprehensive audit tracking",
        icon: "📊",
        sticker: "/images/light_mode/project/hr-f4.png",
      },
      {
        number: "05",
        title: "Fully responsive design across all devices",
        icon: "💻",
        sticker: "/images/light_mode/project/hr-f5.png",
      },
    ],

    timeline: [
      {
        phase: "Planning Phase",
        date: "June 2025",
        status: "Completed",
        emoji: "🎨",
      },
      {
        phase: "Development",
        date: "July - Aug 2025",
        status: "Completed",
        emoji: "⚙️",
      },
      {
        phase: "Testing",
        date: "Sep 2025",
        status: "Completed",
        emoji: "🧪",
      },
    ],
  },

  "company-wiki": {
    id: "company-wiki",
    title: "Company Wiki",
    subtitle: "Internal Knowledge Management System",
    year: "2025",
    type: "Professional Project",
    role: "Full-Stack Developer",
    duration: "2 months",
    techStack: ["Next.js", "TypeScript", "Docker", "Tailwind CSS"],
    mainImage: "/images/light_mode/project/wiki-main.png",
    slides: [
      {
        url: "/images/light_mode/project/wiki-main.png",
        caption: "Company Wiki Login",
      },
      {
        url: "/images/light_mode/project/wiki-dashboard.png",
        caption: "Article Dashboard",
      },
      {
        url: "/images/light_mode/project/wiki-editor.png",
        caption: "Article Editor",
      },
    ],

    goal: {
      title: "PROJECT GOAL",
      description:
        "To create a centralized, efficient knowledge management platform that enables teams to organize, access, and collaborate on company documentation seamlessly.",
      details:
        "The system provides role-based access control for secure information sharing, powerful search capabilities for quick information retrieval, and version control for tracking document evolution. Built with a Dockerized architecture, it ensures consistent deployment across environments while maintaining scalability and reliability for growing organizational needs.",
    },

    audience: [
      {
        title: "Internal Teams",
        icon: "/images/light_mode/project/internal.png",
        description:
          "Employees across departments who need to access, create, and maintain company documentation, procedures, and knowledge bases",
      },
      {
        title: "Project Managers",
        icon: "/images/light_mode/project/Project_manager.png",
        description:
          "Managers who need to organize project documentation, track changes, and ensure team members have access to the right information",
      },
      {
        title: "IT Administrators",
        icon: "/images/light_mode/project/IT_admin.png",
        description:
          "System administrators who manage user permissions, deploy containers, and maintain the knowledge management infrastructure",
      },
    ],

    responsive: {
      description:
        "Fully responsive interface designed for seamless knowledge access across desktop and mobile devices, ensuring teams can reference documentation anywhere.",
      desktop: "/images/light_mode/project/company_wiki.png",
      tablet: "/images/light_mode/project/company-wiki_responsive.png",
    },

    overview: {
      description:
        "An internal knowledge management system designed to help teams organize and access company documentation efficiently.",
      details:
        "Features role-based access control for secure information sharing, collaborative editing capabilities for team contribution, and comprehensive version history for tracking document evolution. The entire application runs in Docker containers for consistent deployment across environments, ensuring reliable performance and easy scalability as organizational needs grow.",
    },

    features: [
      {
        number: "01",
        title: "Role-based access control with granular permission management",
        icon: "🔐",
        sticker: "/images/light_mode/project/company-f1.png",
      },
      {
        number: "02",
        title: "Full CRUD operations for pages and categories",
        icon: "🔐",
        sticker: "/images/light_mode/project/company-f2.png",
      },
      {
        number: "03",
        title: "Fast search and advanced filter system",
        icon: "🔐",
        sticker: "/images/light_mode/project/company-f3.png",
      },
      {
        number: "04",
        title:
          "Dockerized multi-container architecture for consistent deployment",
        icon: "🔐",
        sticker: "/images/light_mode/project/company-f4.png",
      },
      {
        number: "05",
        title: "Fully responsive design across all devices",
        icon: "🔐",
        sticker: "/images/light_mode/project/company-f5.png",
      },
      {
        number: "06",
        title: "Collaborative editing with real-time updates",
        icon: "🔐",
        sticker: "/images/light_mode/project/company-f6.png",
      },
    ],

    timeline: [
      {
        phase: "Planning",
        date: "Sep 2025",
        status: "Completed",
        emoji: "📝",
      },
    ],
  },

  farmhub: {
    id: "farmhub",
    title: "FarmHub",
    subtitle: "E-commerce & Booking Platform",
    year: "2025",
    type: "Academic Project",
    role: "Full-Stack Developer",
    duration: "2 months",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    mainImage: "/images/light_mode/project/farmhub-main.png",
    slides: [
      {
        url: "/images/light_mode/project/farmhub-main.png",
        caption: "FarmHub Admin System",
      },
      {
        url: "/images/light_mode/project/farmhub-product.png",
        caption: "Product Page",
      },
      {
        url: "/images/light_mode/project/farmhub-booking.png",
        caption: "Booking System",
      },
    ],

    goal: {
      title: "PROJECT GOAL",
      description:
        "To streamline farm tour ticket booking and fresh vegetable purchases by providing an intuitive, reliable platform that connects consumers directly with local farms.",
      details:
        "The system aims to simplify the booking process, enhance user experience through secure checkout, and empower farm owners with efficient management tools—all while promoting sustainable agriculture and local food systems.",
    },

    audience: [
      {
        title: "Consumers",
        icon: "/images/light_mode/project/consumer.png",
        description:
          "Individuals looking to book farm tours and purchase fresh organic products directly from farms",
      },
      {
        title: "Farm Owner",
        icon: "/images/light_mode/project/farmer.png",
        description:
          "Local farmers wanting to expand their reach and manage bookings efficiently",
      },
      {
        title: "Administrator",
        icon: "/images/light_mode/project/administrator.png",
        description:
          "System managers who need to oversee products, orders, and user accounts",
      },
    ],

    overview: {
      description: "E-commerce and booking platform.",
      details: "Built with PHP and MySQL.",
    },

    features: [
      {
        number: "01",
        title: "User registration and authentication system",
        icon: "🛒",
        sticker: "/images/light_mode/project/farm-f1.png",
      },
      {
        number: "02",
        title: "Ticket booking with type selection and membership options",
        icon: "🎟️",
        sticker: "/images/light_mode/project/farm-f2.png",
      },
      {
        number: "03",
        title: "Shopping cart with instant 'Buy Now' checkout",
        icon: "🎟️",
        sticker: "/images/light_mode/project/farm-f3.png",
      },
      {
        number: "04",
        title: "Order management and history",
        icon: "🎟️",
        sticker: "/images/light_mode/project/farm-f4.png",
      },
      {
        number: "05",
        title: "Admin panel for product and booking management",
        icon: "🎟️",
        sticker: "/images/light_mode/project/farm-f5.png",
      },
    ],

    timeline: [
      {
        phase: "Development",
        date: "Jan 2025",
        status: "Completed",
        emoji: "💻",
      },
    ],
  },
};

// 更新类型定义，使 responsive 成为可选
export type ProjectData = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  type: string;
  role: string;
  duration: string;
  techStack: string[];
  mainImage: string;
  slides: Array<{
    url: string;
    caption: string;
  }>;
  goal: {
    title: string;
    description: string;
    details: string;
  };
  audience: Array<{
    title: string;
    icon: string;
    description: string;
  }>;
  responsive?: {
    description: string;
    desktop: string;
    tablet: string;
  };
  overview: {
    description: string;
    details: string;
  };
  features: Array<{
    number: string;
    title: string;
    icon: string;
    sticker?: string;
  }>;
  timeline: Array<{
    phase: string;
    date: string;
    status: string;
    emoji: string;
  }>;
};
