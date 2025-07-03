export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/LynaSovann",
    icon: "github",
    description: "Check out my projects and contributions"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lyna-sovann-829448264/",
    icon: "linkedin",
    description: "Connect with me professionally"
  },
  {
    name: "Telegram",
    url: "https://t.me/lyna_sovann",
    icon: "message-circle",
    description: "Chat with me on Telegram"
  },
  {
    name: "Email",
    url: "mailto:sovannlyna2004@gmail.com",
    icon: "mail",
    description: "Send me an email"
  }
];

export const contactInfo: ContactInfo = {
  email: "sovannlyna2004@gmail.com",
  phone: "(+855) 962626669",
  location: "Phnom Penh, Cambodia"
};

export const personalInfo = {
  name: "Lyna Sovann",
  title: "DevOps Engineer & Full-stack Developer.",
  description: "A Computer Science student graduating in 2025 with skills in DevOps Engineering and Full-stack Development.",
  location: "Phnom Penh, Cambodia",
  portfolio: "https://lynasovann.site"
};
