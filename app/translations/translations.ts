import { header } from "framer-motion/client";
import { Subtitles } from "lucide-react";
import ProjectCTA from "../components/project/ProjectCTA";
import { title } from "process";
import ProjectStats from "../components/project/ProjectStats";
import ProjectList from "../components/project/ProjectList";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      project: "Project",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Chai Hui Yi",
      description:
        "A full-stack developer eager to build scalable, user-focused applications while continuously learning and improving.",
      viewProject: "View My Project",
      aboutMe: "About Me",
    },
    traits: {
      list: [
        {
          key: "creative",
          title: "CREATIVE",
          subtitle:
            "I enjoy thinking outside the box and designing unique solutions that improve user experience and functionality.",
        },
        {
          key: "teamPlayer",
          title: "Team Player",
          subtitle:
            "I enjoy collaborating with others and contributing positively in a team environment.",
        },
        {
          key: "problemSolver",
          title: "Problem-Solver",
          subtitle:
            "I enjoy breaking down complex problems and finding effective solutions.",
        },
        {
          key: "adaptable",
          title: "Adaptable",
          subtitle:
            "I adapt quickly to new environments, tools, and challenges.",
        },
      ],
    },

    contact: {
      title: "Get in Touch !",
      name: "CHAI HUI YI",
      role: "Web Developer & UI Designer",
      location: "Kuching, Sarawak, Malaysia",
    },
    about: {
      title: "Chai Hui Yi",
      subtitle: "FULL-STACK DEVELOPER",
      introduction: {
        header: "ABOUT ME",
        title: "INTRODUCTION",
        paragraph1:
          "Hi, I'm Chai Hui Yi – a developer exploring the full-stack path. I enjoy building things that are practical and user-focused with applications, from UI to back-end logic.",
        paragraph2:
          "I've recently completed an internship where I worked across both front-end and back-end, and that experience strengthened my interest in becoming a well-rounded full-stack engineer. I'm currently focusing on improving my full-stack fundamentals... writing cleaner, more maintainable code, understanding scalability and learning better design practices.",
      },
      experience: {
        title: "EXPERIENCE",
        job: {
          title: "Software Engineering Intern",
          company: "MEO Studio Design",
          duration: "Sep 2024 - Feb 2025",
          tasks: [
            "Developed full-stack using Next.js, TypeScript and PostgreSQL",
            "Built internal tools including knowledge management and HR systems",
            "Implemented authentication, CRUD operations and Docker deployment",
          ],
        },
      },
      focus: {
        header: "CURRENT FOCUS",
        title: "Building with purpose",
        principles: [
          "Clean Code",
          "Scalability",
          "Design Patterns",
          "API Design",
          "Database Optimization",
          "User Experience",
        ],
      },
      skill: {
        header: "SKILLS & TECHNOLOGIES",
        title: "An Interactive Showcase of My Technical Abilities.",
      },
      resume: {
        header: "GET IN TOUCH",
        title: "Interested in working together ?",
        button: "Download Resume",
      },
    },

    project: {
      title: "Projects",
      Subtitle: "A selection of my recent work",
      Paragraph:
        "A collection of full-stack projects showcasing my expertise in modern web technologies, from conception to deployment.",

      ProjectStats: {
        title: "BY THE NUMBERS",
        Label: [
          { label: "Total Projects", value: "03" },
          { label: "Technologies", value: "12+" },
          { label: "Live Projects", value: "01" },
          { label: "Lines of Code", value: "8K+" },
        ],
      },

      Labels: {
        techStack: "Tech Stack",
      },

      Status: {
        live: "Live",
        private: "Private",
        completed: "Completed",
      },

      Type: {
        professional: "Professional",
        academic: "Academic",
      },

      Buttons: {
        viewProject: "View Project",
        liveDemo: "Live Demo",
      },
      Responsive: {
        title: "RESPONSIVE DESIGN",
        description:
          "The application is fully responsive, ensuring a seamless experience across desktops, tablets, and mobile devices. The layout adapts to different screen sizes while maintaining full functionality.",
        desktop: "DESKTOP",
        mobile: "MOBILE",
      },

      ProjectList: {
        "hr-dashboard": {
          title: "HR Dashboard",
          subtitle: "Interview & Candidate Management System",
          description:
            "Full-stack dashboard with MS Forms integration, real-time candidate tracking, and comprehensive admin controls.",
          type: "Professional",
          status: "Live",
          details: {
            overview: {
              title: "OVERVIEW",
              description:
                "The HR Dashboard is a full-stack web application designed to streamline the candidate interview and management process. It integrates with Microsoft Forms to automatically pull in new candidate data, providing HR managers with a real-time, centralized platform for tracking applicant progress, scheduling interviews, and managing feedback.",
              details:
                "Built with Next.js and a PostgreSQL backend, the system features secure authentication, comprehensive CRUD functionalities for candidate and interview management, and is deployed via Docker for scalability and consistency.",
            },
            goal: {
              title: "PROJECT GOAL",
              description:
                "To create an efficient, automated, and user-friendly internal tool that reduces manual data entry for the HR team, improves the accuracy of candidate tracking, and provides a clear overview of the entire recruitment pipeline.",
              details:
                "The primary objective was to replace a manual, spreadsheet-based system with a dynamic web application, enabling quicker decision-making and a more organized workflow.",
            },
            audience: {
              title: "TARGET AUDIENCE",
              items: [
                {
                  icon: "/images/light_mode/project/audience-1.png",
                  title: "HR Managers",
                  description:
                    "Primary users who need a centralized dashboard to manage candidates, schedule interviews, and view feedback.",
                },
                {
                  icon: "/images/light_mode/project/audience-2.png",
                  title: "Interviewers",
                  description:
                    "Team members who need access to candidate information and a simple way to submit interview feedback.",
                },
                {
                  icon: "/images/light_mode/project/audience-3.png",
                  title: "System Administrators",
                  description:
                    "Technical staff responsible for maintaining the application and managing user access.",
                },
              ],
            },
            timeline: {
              title: "PROJECT DETAILS",
              type: "Professional",
              year: "2025",
              role: "Full-Stack Developer",
            },
          },
        },
        "company-wiki": {
          title: "Company Wiki",
          subtitle: "Internal Knowledge Management System",
          description:
            "Centralized knowledge platform with role-based access control, collaborative editing and Dockerized deployment.",
          type: "Professional",
          status: "Private",
          details: {
            overview: {
              title: "OVERVIEW",
              description:
                "The Company Wiki is an internal knowledge management system designed to centralize company information, documentation, and procedures. It provides a secure, collaborative environment where employees can easily create, share, and find the information they need.",
              details:
                "Featuring role-based access control and a rich text editor for collaborative content creation, the application is built with Next.js and deployed using Docker, ensuring a reliable and scalable solution for internal knowledge sharing.",
            },
            goal: {
              title: "PROJECT GOAL",
              description:
                "To build a single source of truth for all company-related information, reducing knowledge silos and improving the onboarding process for new employees. The platform aims to be intuitive, secure, and easy to maintain.",
              details:
                "Key objectives included creating a permission system to control access to sensitive information and providing a powerful yet simple editor for non-technical users.",
            },
            audience: {
              title: "TARGET AUDIENCE",
              items: [
                {
                  icon: "/images/light_mode/project/audience-4.png",
                  title: "All Employees",
                  description:
                    "Users who need to access company policies, project documentation, and team information.",
                },
                {
                  icon: "/images/light_mode/project/audience-5.png",
                  title: "Content Creators",
                  description:
                    "Designated team members from various departments responsible for creating and maintaining knowledge articles.",
                },
                {
                  icon: "/images/light_mode/project/audience-6.png",
                  title: "Administrators",
                  description:
                    "Users who manage the platform, control user permissions, and oversee the content structure.",
                },
              ],
            },
            timeline: {
              title: "PROJECT DETAILS",
              type: "Professional",
              year: "2025",
              role: "Full-Stack Developer",
            },
          },
        },
        farmhub: {
          title: "FarmHub",
          subtitle: "E-commerce & Booking Platform",
          description:
            "Web platform for farm tour ticket booking and fresh product purchases with integrated payment system.",
          type: "Academic",
          status: "Completed",
          details: {
            overview: {
              title: "OVERVIEW",
              description:
                "FarmHub is an academic project that serves as an e-commerce and booking platform for a local farm. It allows customers to book farm tours, purchase fresh produce, and learn more about the farm's activities. The platform includes a complete shopping cart and checkout process with payment integration.",
              details:
                "Developed using PHP and MySQL, this project demonstrates foundational web development skills, including database management, server-side logic, and front-end user interface creation.",
            },
            goal: {
              title: "PROJECT GOAL",
              description:
                "The main goal was to apply and showcase web development fundamentals by creating a functional, real-world application. The project aimed to provide a seamless online experience for customers wanting to engage with a local farm.",
              details:
                "Objectives included implementing a secure user authentication system, a product and booking management system for the farm owner, and an intuitive shopping experience for customers.",
            },
            audience: {
              title: "TARGET AUDIENCE",
              items: [
                {
                  icon: "/images/light_mode/project/audience-7.png",
                  title: "Local Customers",
                  description:
                    "People in the community looking to buy fresh, local produce and participate in farm activities.",
                },
                {
                  icon: "/images/light_mode/project/audience-8.png",
                  title: "Families & Tourists",
                  description:
                    "Individuals and groups interested in educational and recreational farm tours.",
                },
                {
                  icon: "/images/light_mode/project/audience-9.png",
                  title: "Farm Owner",
                  description:
                    "The administrator who manages products, bookings, and content on the platform.",
                },
              ],
            },
            timeline: {
              title: "PROJECT DETAILS",
              type: "Academic",
              year: "2025",
              role: "Developer",
            },
          },
        },
      },
    },

    Contact: {
      title: "Get in Touch !",
      subtitle: "I'd like to hear from you!",
      paragraph:
        "If you have any inquiries or just want to say hi, please use the contact form. I'll get back to you as soon as possible!",
      connect: "Connect with me on",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      message: "Your Message",
      sendMessage: "Send Message",
      content: "Tell me about your project, or just say hi...",
    },
  },
  zh: {
    nav: {
      home: "主页",
      about: "关于",
      project: "项目",
      contact: "联系",
    },
    hero: {
      greeting: "嗨，我是",
      name: "蔡慧仪",
      description:
        "一位全栈开发者，致力于构建可扩展、以用户为中心的应用程序，同时不断学习和进步。",
      viewProject: "查看我的项目",
      aboutMe: "关于我",
    },
    traits: {
      list: [
        {
          key: "creative",
          title: "创意思维",
          subtitle:
            "我喜欢跳出框框思考，设计独特的解决方案来改善用户体验和功能。",
        },
        {
          key: "teamPlayer",
          title: "团队合作",
          subtitle: "我乐于与他人协作，在团队中积极贡献自己的力量。",
        },
        {
          key: "problemSolver",
          title: "问题解决者",
          subtitle: "我善于拆解复杂问题，并寻找有效的解决方案。",
        },
        {
          key: "adaptable",
          title: "适应能力强",
          subtitle: "我能够快速适应新的环境、工具和挑战。",
        },
      ],
    },

    contact: {
      title: "联系我 !",
      name: "蔡慧仪",
      role: "网页开发者 & UI 设计师",
      location: "马来西亚，砂拉越，古晋",
    },
    about: {
      title: "蔡慧仪",
      subtitle: "全栈开发者",
      introduction: {
        header: "关于我",
        title: "简介",
        paragraph1:
          "嗨，我是 蔡慧仪，是一位探索全栈开发道路的开发者。我喜欢构建实用且以用户为中心的应用程序，从 UI 到后端逻辑。",
        paragraph2:
          "我最近完成了一次实习，在前端和后端都有工作经验，这段经历加强了我成为全面的全栈工程师的兴趣。我目前专注于提升全栈基础... 编写更清晰、更易维护的代码，理解可扩展性并学习更好的设计实践。",
      },
      experience: {
        title: "工作经验",
        job: {
          title: "软件工程实习生",
          company: "MEO Studio Design",
          duration: "2024年9月 - 2025年2月",
          tasks: [
            "使用 Next.js、TypeScript 和 PostgreSQL 开发全栈应用",
            "构建内部工具，包括知识管理和人力资源系统",
            "实现身份验证、CRUD 操作和 Docker 部署",
          ],
        },
      },
      focus: {
        header: "当前关注点",
        title: "有目的的建设",
        principles: [
          "简洁代码",
          "可扩展性",
          "设计模式",
          "API 设计",
          "数据库优化",
          "用户体验",
        ],
      },
      skill: {
        header: "技能与技术",
        title: "我的技术能力互动展示。",
      },
      resume: {
        header: "快来联系我吧",
        title: "有兴趣一起合作吗？",
        button: "下载简历",
      },
    },
    project: {
      title: "项目",
      Subtitle: "近期作品精选",
      Paragraph:
        "一系列全端项目，展示我从构思、设计到开发与部署的现代 Web 技术实践经验。",

      ProjectStats: {
        title: "数据一览",
        Label: [
          { label: "项目总数", value: "03" },
          { label: "使用技术", value: "12+" },
          { label: "上线项目", value: "01" },
          { label: "代码行数", value: "8K+" },
        ],
      },

      Labels: {
        techStack: "技术栈",
      },

      Status: {
        live: "已上线",
        private: "未公开",
        completed: "已完成",
      },

      Type: {
        professional: "专业项目",
        academic: "学术项目",
      },

      Buttons: {
        viewProject: "查看项目",
        liveDemo: "在线演示",
      },
      Responsive: {
        title: "响应式设计",
        description:
          "该应用程序完全响应式，确保在台式机、平板电脑和移动设备上都能获得无缝体验。布局适应不同的屏幕尺寸，同时保持完整的功能。",
        desktop: "桌面端",
        mobile: "移动端",
      },

      ProjectList: {
        "hr-dashboard": {
          title: "人资管理后台",
          subtitle: "面试与候选人管理系统",
          description:
            "全端人资管理后台，整合 Microsoft Forms，实现候选人实时追踪与完整的管理员控制功能。",
          type: "专业项目",
          status: "已上线",
          details: {
            overview: {
              title: "总览",
              description:
                "人资管理后台是一个全栈 Web 应用，旨在简化候选人面试和管理流程。它与 Microsoft Forms 集成，可自动提取新的候选人数据，为人力资源经理提供一个实时的集中式平台，用于跟踪申请人进度、安排面试和管理反馈。",
              details:
                "该系统采用 Next.js 和 PostgreSQL 后端构建，具有安全身份验证、全面的候选人和面试管理 CRUD 功能，并通过 Docker 进行部署，以实现可扩展性和一致性。",
            },
            goal: {
              title: "项目目标",
              description:
                "创建一个高效、自动化且用户友好的内部工具，以减少人力资源团队的手动数据输入，提高候选人跟踪的准确性，并提供整个招聘流程的清晰概览。",
              details:
                "主要目标是用动态 Web 应用程序取代手动的、基于电子表格的系统，从而实现更快的决策和更有条理的工作流程。",
            },
            audience: {
              title: "目标受众",
              items: [
                {
                  icon: "/images/light_mode/project/audience-1.png",
                  title: "人力资源经理",
                  description:
                    "需要一个集中式仪表板来管理候选人、安排面试和查看反馈的主要用户。",
                },
                {
                  icon: "/images/light_mode/project/audience-2.png",
                  title: "面试官",
                  description:
                    "需要访问候选人信息并以简单方式提交面试反馈的团队成员。",
                },
                {
                  icon: "/images/light_mode/project/audience-3.png",
                  title: "系统管理员",
                  description: "负责维护应用程序和管理用户访问权限的技术人员。",
                },
              ],
            },
            timeline: {
              title: "项目详情",
              type: "专业项目",
              year: "2025",
              role: "全栈开发者",
            },
          },
        },

        "company-wiki": {
          title: "企业知识库",
          subtitle: "内部知识管理系统",
          description:
            "集中式企业知识平台，具备角色权限控管、协作编辑功能，并以 Docker 进行部署。",
          type: "专业项目",
          status: "未公开",
          details: {
            overview: {
              title: "总览",
              description:
                "企业知识库是一个内部知识管理系统，旨在集中管理公司信息、文档和流程。它提供了一个安全的协作环境，员工可以轻松创建、共享和查找所需信息。",
              details:
                "该应用具有基于角色的访问控制和用于协作创建内容的富文本编辑器，采用 Next.js 构建并使用 Docker 部署，确保了内部知识共享的可靠和可扩展解决方案。",
            },
            goal: {
              title: "项目目标",
              description:
                "为所有公司相关信息建立一个单一的真实来源，减少知识孤岛，并改善新员工的入职流程。该平台旨在做到直观、安全且易于维护。",
              details:
                "关键目标包括创建一个权限系统来控制对敏感信息的访问，并为非技术用户提供一个功能强大且简单的编辑器。",
            },
            audience: {
              title: "目标受众",
              items: [
                {
                  icon: "/images/light_mode/project/audience-4.png",
                  title: "所有员工",
                  description: "需要访问公司政策、项目文档和团队信息的用户。",
                },
                {
                  icon: "/images/light_mode/project/audience-5.png",
                  title: "内容创建者",
                  description:
                    "来自不同部门的指定团队成员，负责创建和维护知识文章。",
                },
                {
                  icon: "/images/light_mode/project/audience-6.png",
                  title: "管理员",
                  description: "管理平台、控制用户权限和监督内容结构的用户。",
                },
              ],
            },
            timeline: {
              title: "项目详情",
              type: "专业项目",
              year: "2025",
              role: "全栈开发者",
            },
          },
        },

        farmhub: {
          title: "FarmHub",
          subtitle: "电商与预约平台",
          description:
            "提供农场导览预约与新鲜农产品购买的 Web 平台，并整合线上支付系统。",
          type: "学术项目",
          status: "已完成",
          details: {
            overview: {
              title: "总览",
              description:
                "FarmHub 是一个学术项目，作为一个本地农场的电子商务和预订平台。它允许顾客预订农场参观、购买新鲜农产品，并了解更多关于农场的活动。该平台包括一个完整的购物车和带有支付集成功能的结账流程。",
              details:
                "该项目使用 PHP 和 MySQL 开发，展示了基础的 Web 开发技能，包括数据库管理、服务器端逻辑和前端用户界面创建。",
            },
            goal: {
              title: "项目目标",
              description:
                "主要目标是通过创建一个功能性的、真实世界的应用程序来应用和展示 Web 开发基础知识。该项目旨在为希望与本地农场互动的顾客提供无缝的在线体验。",
              details:
                "目标包括为农场主实现一个安全的用户认证系统、一个产品和预订管理系统，以及为顾客提供一个直观的购物体验。",
            },
            audience: {
              title: "目标受众",
              items: [
                {
                  icon: "/images/light_mode/project/audience-7.png",
                  title: "本地顾客",
                  description:
                    "社区中希望购买新鲜本地产品并参加农场活动的人们。",
                },
                {
                  icon: "/images/light_mode/project/audience-8.png",
                  title: "家庭与游客",
                  description: "对教育和娱乐性农场参观感兴趣的个人和团体。",
                },
                {
                  icon: "/images/light_mode/project/audience-9.png",
                  title: "农场主",
                  description: "在平台上管理产品、预订和内容的管理员。",
                },
              ],
            },
            timeline: {
              title: "项目详情",
              type: "学术项目",
              year: "2025",
              role: "开发者",
            },
          },
        },
      },
    },
    Contact: {
      title: "联系我 !",
      subtitle: "期待收到你的消息！",
      paragraph:
        "如果你有任何问题或只是想打个招呼，请使用联系表格。我会尽快回复你！",
      connect: "在以下平台与我联系",
      firstName: "名字",
      lastName: "姓氏",
      email: "电子邮箱",
      message: "你的留言",
      sendMessage: "发送留言",
      content: "跟我说说你的项目，或者只是打个招呼也行……",
    },
  },
};
