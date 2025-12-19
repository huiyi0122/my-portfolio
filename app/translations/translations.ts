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
            "I like exploring different ideas and coming up with solutions that feel thoughtful and actually improve the experience.",
        },
        {
          key: "teamPlayer",
          title: "Team Player",
          subtitle:
            "I enjoy working with others, sharing ideas, and contributing to a healthy team environment.",
        },
        {
          key: "problemSolver",
          title: "Problem-Solver",
          subtitle:
            "I break problems down step by step and focus on finding solutions that make sense.",
        },
        {
          key: "adaptable",
          title: "Adaptable",
          subtitle:
            "I’m comfortable picking up new tools and adjusting to new challenges when needed.",
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
          "Hi, I’m Chai Hui Yi. I’m exploring the full-stack path and enjoy building practical, user-focused applications, from clean interfaces to solid back-end logic.",
        paragraph2:
          "I recently completed an internship where I worked on both front-end and back-end tasks. That experience helped me understand how everything connects and confirmed my interest in becoming a well-rounded full-stack developer. Right now, I’m focusing on writing cleaner code, improving scalability, and developing better design habits.",
      },
      experience: {
        title: "EXPERIENCE",
        job: {
          title: "Software Engineering Intern",
          company: "MEO Studio Design",
          duration: "Sep 2024 - Feb 2025",
          tasks: [
            "Developed full-stack features using Next.js, TypeScript, and PostgreSQL",
            "Built internal tools such as knowledge management and HR systems",
            "Implemented authentication, CRUD features, and Docker-based deployment",
          ],
        },
      },
      focus: {
        header: "CURRENT FOCUS",
        title: "Building with intention",
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
        title: "A hands-on overview of the tools and technologies I use.",
      },
      resume: {
        header: "GET IN TOUCH",
        title: "Interested in working together?",
        button: "Download Resume",
      },
    },

    project: {
      title: "Projects",
      Subtitle: "Some of my recent work",
      Paragraph:
        "A selection of full-stack projects where I handled everything from planning and development to deployment.",

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
          "The application is fully responsive and works smoothly across desktop, tablet, and mobile devices. The layout adapts naturally to different screen sizes without sacrificing usability.",
        desktop: "DESKTOP",
        mobile: "MOBILE",
      },

      ProjectList: {
        "hr-dashboard": {
          title: "HR Dashboard",
          subtitle: "Interview & Candidate Management System",
          description:
            "A full-stack dashboard with Microsoft Forms integration, real-time candidate tracking, and flexible admin controls.",
          type: "Professional",
          status: "Live",
          details: {
            overview: {
              title: "OVERVIEW",
              description:
                "The HR Dashboard is a full-stack web application built to simplify interview and candidate management. It pulls candidate data directly from Microsoft Forms and gives HR teams a clear, real-time view of the hiring process.",
              details:
                "Built with Next.js and PostgreSQL, the system includes secure authentication, full CRUD functionality, and Docker-based deployment for consistency and scalability.",
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
        "If you have a question, a project idea, or just want to say hi, feel free to drop me a message. I’ll get back to you as soon as I can.",
      connect: "Connect with me on",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email Address",
      message: "Your Message",
      sendMessage: "Send Message",
      content: "Tell me about your project, or just say hi.",
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
        "我是一名全栈开发者，专注于打造实用、以使用者为出发点的应用，并持续提升自己的技术与设计能力。",
      viewProject: "查看项目",
      aboutMe: "关于我",
    },

    traits: {
      list: [
        {
          key: "creative",
          title: "创意思维",
          subtitle:
            "我喜欢换个角度思考问题，想出既实用又能让体验更好的解决方式。",
        },

        {
          key: "teamPlayer",
          title: "团队合作",
          subtitle: "我重视沟通与配合，能在团队中清楚表达想法并积极参与合作。",
        },
        {
          key: "problemSolver",
          title: "问题解决",
          subtitle: "我习惯把复杂的问题拆解成小步骤，逐一找出合适的解决方法。",
        },
        {
          key: "adaptable",
          title: "适应力强",
          subtitle: "我对新环境与新工具保持开放态度，能快速适应并投入工作。",
        },
      ],
    },

    contact: {
      title: "一起聊聊吧",
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
          "嗨，我是蔡慧仪，一名正在探索全栈开发的开发者。我喜欢把想法变成实用又好用的应用，从界面设计到后端逻辑都会动手做。",
        paragraph2:
          "我最近完成了一段实习，参与了前端和后端的工作，这让我更清楚自己想成为全面的全栈开发者。目前，我专注于写出更清晰、易维护的代码，同时学习如何让系统更稳定和易扩展，也在提升设计能力。",
      },
      experience: {
        title: "工作经验",
        job: {
          title: "软件工程实习生",
          company: "MEO Studio Design",
          duration: "2024年9月 - 2025年2月",
          tasks: [
            "用 Next.js 和 TypeScript 开发全栈功能，让前端和后端更顺畅地配合",
            "参与构建内部工具，比如知识管理系统和人力资源系统，帮助团队提升工作效率",
            "实现用户身份验证和 CRUD 功能，并使用 Docker 部署应用，确保系统稳定运行",
          ],
        },
      },

      focus: {
        header: "当前关注点",
        title: "有目的的建设",
        principles: [
          "写清晰、易读的代码，让团队和自己都更容易维护",
          "设计系统时考虑未来扩展和可持续发展",
          "使用合适的设计模式，让代码更有条理",
          "规划 API 时注重简单易用和稳定性",
          "优化数据库，让应用更高效可靠",
          "关注用户体验，让功能真正好用又直观",
        ],
      },

      skill: {
        header: "技能与技术",
        title: "展示我在开发中用到的工具和技术。",
      },
      resume: {
        header: "想聊聊吗？",
        title: "如果有合作或项目想法，欢迎联系我！",
        button: "下载简历",
      },
    },
    project: {
      title: "项目",
      Subtitle: "近期作品精选",
      Paragraph:
        "这里展示一些我最近完成的全端项目，从最初的构思、界面设计，到实际开发和上线，每个项目都体现了我在现代 Web 技术上的实践经验。",

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
          "这个应用在桌面、平板和手机上都能顺畅使用，布局会根据不同屏幕自动调整，同时保持所有功能完整可用。",
        desktop: "桌面端",
        mobile: "移动端",
      },

      ProjectList: {
        "hr-dashboard": {
          title: "人资管理后台",
          subtitle: "面试与候选人管理系统",
          description:
            "一个全端的人资管理后台，整合 Microsoft Forms，可以实时追踪候选人，还能方便管理员操作。",
          type: "专业项目",
          status: "已上线",
          details: {
            overview: {
              title: "总览",
              description:
                "这个人资管理后台是我开发的全栈 Web 应用，目的是让候选人面试和管理流程更顺畅。它能从 Microsoft Forms 自动获取新候选人信息，让 HR 可以在同一个平台实时查看申请进度、安排面试和管理反馈。",
              details:
                "系统使用 Next.js 构建前端，后端通过安全身份验证管理候选人和面试信息，并用 Docker 部署，保证系统稳定运行和后续扩展方便。",
            },
            goal: {
              title: "项目目标",
              description:
                "我希望打造一个高效、自动化且易用的内部工具，减少 HR 团队手动输入数据，提高候选人跟踪准确度，同时让招聘流程一目了然。",
              details:
                "目标是用动态 Web 应用替代手动的电子表格系统，让团队能更快做决策、工作流程更有条理。",
            },
            audience: {
              title: "目标受众",
              items: [
                {
                  icon: "/images/light_mode/project/audience-1.png",
                  title: "人力资源经理",
                  description:
                    "主要用户，需要一个集中仪表板来管理候选人、安排面试和查看反馈。",
                },
                {
                  icon: "/images/light_mode/project/audience-2.png",
                  title: "面试官",
                  description: "团队成员，可方便查看候选人信息并提交面试反馈。",
                },
                {
                  icon: "/images/light_mode/project/audience-3.png",
                  title: "系统管理员",
                  description: "负责维护系统和管理用户权限的技术人员。",
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
            "一个内部知识管理平台，支持角色权限、协作编辑，并通过 Docker 部署，方便团队使用。",
          type: "专业项目",
          status: "未公开",
          details: {
            overview: {
              title: "总览",
              description:
                "这个企业知识库是我参与开发的内部系统，用来集中管理公司信息、文档和流程。员工可以轻松创建、共享和查找所需内容，协作更顺畅。",
              details:
                "应用支持基于角色的权限管理，并内置富文本编辑器方便多人协作。前端使用 Next.js 构建，Docker 部署保证系统稳定可靠，也便于后续扩展。",
            },
            goal: {
              title: "项目目标",
              description:
                "我希望建立一个公司内部的信息中心，减少知识孤岛，让新员工更快上手，同时保持系统直观、安全且易维护。",
              details:
                "具体做法包括搭建权限系统控制敏感信息访问，并提供简单易用的编辑器，让非技术用户也能方便维护内容。",
            },
            audience: {
              title: "目标受众",
              items: [
                {
                  icon: "/images/light_mode/project/audience-4.png",
                  title: "所有员工",
                  description: "需要访问公司政策、项目文档和团队信息的同事。",
                },
                {
                  icon: "/images/light_mode/project/audience-5.png",
                  title: "内容创建者",
                  description:
                    "来自不同部门的团队成员，负责撰写和更新知识文章。",
                },
                {
                  icon: "/images/light_mode/project/audience-6.png",
                  title: "管理员",
                  description: "负责管理平台、控制权限和维护内容结构的人。",
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
            "这是一个为本地农场设计的电商与预约平台，顾客可以在线预订农场导览、购买新鲜农产品，还能完成支付结算。",
          type: "学术项目",
          status: "已完成",
          details: {
            overview: {
              title: "总览",
              description:
                "FarmHub 是我参与开发的学术项目，面向本地农场客户，提供线上预约和购物功能。用户可以预订农场参观、购买新鲜农产品，并了解农场活动，整个流程包括购物车和支付结算。",
              details:
                "项目使用 PHP 和 MySQL 开发，展示了我在数据库管理、服务器端逻辑和前端界面开发的基础技能。",
            },
            goal: {
              title: "项目目标",
              description:
                "我希望通过这个项目实践 Web 开发基础，打造一个真实可用的应用，为顾客提供顺畅的线上体验。",
              details:
                "具体目标包括为农场主搭建安全的用户认证系统、产品和预订管理功能，同时让顾客能轻松浏览、下单和结账。",
            },
            audience: {
              title: "目标受众",
              items: [
                {
                  icon: "/images/light_mode/project/audience-7.png",
                  title: "本地顾客",
                  description: "社区中想买新鲜农产品、参与农场活动的人。",
                },
                {
                  icon: "/images/light_mode/project/audience-8.png",
                  title: "家庭与游客",
                  description: "对教育和休闲农场参观感兴趣的个人或团体。",
                },
                {
                  icon: "/images/light_mode/project/audience-9.png",
                  title: "农场主",
                  description: "负责管理产品、预订和平台内容的管理员。",
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
      title: "联系我",
      subtitle: "很高兴收到你的消息！",
      paragraph:
        "不管是有问题、合作想法，还是只是想打个招呼，都可以通过下面的联系表单找我，我会尽快回复你。",
      connect: "也可以通过以下平台联系我",
      firstName: "名字",
      lastName: "姓氏",
      email: "电子邮箱",
      message: "留言内容",
      sendMessage: "发送",
      content: "跟我聊聊你的项目，或者随便打个招呼都可以 🙂",
    },
  },
};
