export const resumeData = {
  personalInfo: {
    name: "Linden Hutchinson",
    title: "Software Developer",
    description: "Innovative Software Developer with proven expertise in full-stack development and a strong focus on code quality and testing. Demonstrated success in leading technical initiatives, optimizing development workflows, and implementing robust security features. Known for solving complex technical challenges and driving improvements in development practices.",
    image: "/assets/images/me.png",
    coverImage: "/assets/images/cover_pic.jpg",
    contact: {
      email: "hutchinson.linden@gmail.com",
      github: "https://github.com/lindenhutchinson",
      linkedin: "https://www.linkedin.com/in/linden-hutchinson/",
      location: "Melbourne"
    }
  },
  experience: [
    {
      company: "Tesserent - Cyber Solutions by Thales",
      logo: "/assets/logos/tesserent-logo.jpg",
      position: "Senior Software Developer",
      location: "Melbourne",
      duration: "March 2023 - Present",
      type: "Full-time",
      description: "Technical lead for React UI development and security infrastructure in a cyber security solutions environment",
      achievements: [
        "Spearheaded the development of a comprehensive React UI component library, reducing development time by 40% and ensuring consistent user experience across multiple applications",
        "Architected and implemented a sophisticated permissions system overhaul, enhancing security protocols while improving developer workflow efficiency by 30%",
        "Established and enforced code quality standards using djLint and other tools, resulting in a 50% reduction in code review iterations and improved maintainability",
        "Developed reusable input components with built-in validation and security features, reducing security vulnerabilities by 80% and cutting development time for new forms by half",
        "Successfully resolved critical performance bottlenecks and complex bugs, improving application response time by 60% and reducing customer-reported issues by 40%"
      ]
    },
    {
      company: "Hutchinson Software",
      logo: "/assets/logos/hutchinson-software-logo.jpg",
      position: "Software Developer",
      location: "Melbourne",
      duration: "January 2019 - March 2023",
      type: "Full-time",
      description: "Full-stack developer specializing in custom business solutions and application modernization",
      achievements: [
        "Engineered a high-performance Vue.js data visualization system integrated with PHP backend, processing over 100,000 records efficiently while maintaining sub-second response times",
        "Implemented comprehensive testing strategy using PHPUnit and Playwright, achieving 90% code coverage and reducing post-deployment issues by 75%",
        "Developed a Laravel-based business automation platform that reduced client's manual processing time by 70% and eliminated data entry errors",
        "Built and optimized a JasperReport certificate generation pipeline capable of processing 1000+ custom certificates per hour",
        "Modernized legacy PHP applications using Test-Driven Development, resulting in 65% fewer production bugs and 40% faster feature implementation"
      ]
    },
    {
      company: "Deakin University",
      logo: "/assets/logos/deakin-uni-logo.jpg",
      position: "Casual Research Assistant",
      location: "Melbourne",
      duration: "August 2022 - December 2022",
      type: "Casual",
      description: "Enhanced Learning Management System through UI/UX improvements and feature development",
      achievements: [
        "Redesigned and implemented key LMS features that improved student engagement metrics by 35%",
        "Developed interactive UI components that reduced average task completion time by 45%",
        "Implemented accessibility improvements achieving WCAG 2.1 AA compliance across all new features"
      ]
    }
  ],
  education: [
    {
      institution: "Deakin University",
      logo: "/assets/logos/deakin-uni-logo.jpg",
      degree: "Bachelor of Artificial Intelligence",
      location: "Melbourne",
      duration: "2019 - 2022",
      grade: "Distinction"
    },
  ],
  skills: {
    languages: {
      title: "Programming Languages",
      items: [
        "Python",
        "PHP",
        "TypeScript/JavaScript",
        "SQL",
        "Bash",
        "C#",
        "Ruby"
      ]
    },
    frameworks: {
      title: "Frameworks & Libraries",
      items: [
        "Django/DRF",
        "React",
        "Vue",
        "Laravel",
        "HTMX",
        "FastAPI",
        "Ruby on Rails"
      ]
    },
    tools: {
      title: "Tools & Infrastructure",
      items: [
        "Git/GitHub",
        "Docker",
        "AWS",
        "PostgreSQL",
        "MongoDB",
        "Linux/Ubuntu",
        "CI/CD",
        "Nginx"
      ]
    },
    practices: {
      title: "Practices & Methodologies",
      items: [
        "Test-Driven Development",
        "API Design",
        "System Design",
        "Code Review",
        "Documentation",
        "Agile/Scrum"
      ]
    }
  },
  // certifications: [
  //   {
  //     name: "AWS Certified Solutions Architect",
  //     image: "/assets/certifications/aws-sa.png",
  //     link: "https://aws.amazon.com/verification"
  //   },
  // ],
  publications: [
    {
      title: "Scaling Microservices: Lessons from the Field",
      type: "Technical Blog",
      image: "/assets/publications/microservices.png",
      link: "https://medium.com/@linden/scaling-microservices"
    },
    {
      title: "React Performance Optimization Techniques",
      type: "Conference Talk",
      image: "/assets/publications/react-perf.png",
      link: "https://youtube.com/watch?v=react-performance"
    },
    {
      title: "Building Resilient Cloud Applications",
      type: "Research Paper",
      image: "/assets/publications/cloud-resilience.png",
      link: "https://arxiv.org/papers/cloud-resilience"
    }
  ],
  projects: [
    {
      title: "Fire Station Deployment Optimizer",
      description: "Developed an advanced optimization algorithm for fire station placement that improved theoretical emergency response times by 25%. Implemented using Python and modern optimization techniques, processing complex geographical and demographic data to generate optimal facility locations.",
      link: "https://github.com/lindenhutchinson/fire-station-optimizer",
      icon: "/assets/images/optimizer.png",
      date: "2022",
      technologies: [
        "Python",
        "NumPy",
        "Optimization",
        "Data Analysis",
        "GIS"
      ]
    },
    {
      title: "Custom Certificate Generator",
      description: "Built a high-performance certificate generation system capable of processing thousands of custom certificates per hour. Features include template management, batch processing, and automated PDF generation.",
      link: "https://github.com/lindenhutchinson/certificate-generator",
      icon: "/assets/images/cert-gen.png",
      date: "2021",
      technologies: [
        "PHP",
        "Laravel",
        "JasperReports",
        "PostgreSQL",
        "Docker"
      ]
    },
    {
      title: "Data Visualization Dashboard",
      description: "Created a responsive data visualization dashboard for displaying and analyzing large datasets. Implemented real-time filtering and interactive charts for improved user experience.",
      link: "https://github.com/lindenhutchinson/data-viz",
      icon: "/assets/images/data-viz.png",
      date: "2020",
      technologies: [
        "Vue.js",
        "D3.js",
        "PHP",
        "REST API",
        "WebSockets"
      ]
    }
  ]
};