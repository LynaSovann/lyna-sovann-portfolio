import {
  Code2,
  Wrench,
  Server,
} from "lucide-react";

export const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      skills: [
        {
          name: "React",
          icon: "⚛️",
          description: "Component-based UI library",
        },
        {
          name: "Next.js",
          icon: "▲",
          description: "Full-stack React framework",
        },
        {
          name: "TypeScript",
          icon: "📘",
          description: "Typed JavaScript superset",
        },
        {
          name: "JavaScript",
          icon: "🟨",
          description: "Dynamic programming language",
        },
        {
          name: "Tailwind CSS",
          icon: "🎨",
          description: "Utility-first CSS framework",
        },
        { name: "HTML5", icon: "🌐", description: "Modern web markup" },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
      skills: [
        {
          name: "Spring Boot",
          icon: "🍃",
          description: "Java application framework",
        },
        {
          name: "Java",
          icon: "☕",
          description: "Object-oriented programming",
        },
        {
          name: "PostgreSQL",
          icon: "🐘",
          description: "Advanced relational database",
        },
        {
          name: "REST APIs",
          icon: "🔗",
          description: "Web service architecture",
        },
        {
          name: "Microservices",
          icon: "🏗️",
          description: "Distributed system design",
        },
      ],
    },
    {
      title: "Tools & DevOps",
      icon: Wrench,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      skills: [
        { name: "Git", icon: "🌿", description: "Version control system" },
        {
          name: "GitHub",
          icon: "🐙",
          description: "Code collaboration platform",
        },
        {
          name: "Docker",
          icon: "🐳",
          description: "Containerization platform",
        },

        {
          name: "Kubernetes",
          icon: "⚙️",
          description: "Container orchestration",
        },
        { name: "Jenkins", icon: "🔧", description: "CI/CD automation server" },
        {
          name: "ArgoCD",
          icon: "🚀",
          description: "GitOps continuous delivery",
        },
        // { name: "AWS", icon: "☁️", description: "Cloud computing services" },
        { name: "Figma", icon: "🎯", description: "Design and prototyping" },
        { name: "VS Code", icon: "💻", description: "Code editor" },
      ],
    },
  ];
