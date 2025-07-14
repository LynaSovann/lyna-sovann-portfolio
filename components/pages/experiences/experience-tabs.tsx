"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Briefcase,
  Heart,
  Code,
  Award,
  BookOpen,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  count?: number;
  color: string;
}

interface ExperienceTabsProps {
  children: React.ReactNode;
}

export default function ExperienceTabs({ children }: ExperienceTabsProps) {
  const [activeTab, setActiveTab] = useState("flashback");

  const tabs: TabItem[] = [
    {
      id: "flashback",
      label: "Journey",
      icon: Lightbulb,
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
      count: 3,
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    },
    {
      id: "work",
      label: "Work",
      icon: Briefcase,
      count: 4,
      color: "text-green-500 bg-green-500/10 border-green-500/20",
    },
    {
      id: "volunteer",
      label: "Volunteer",
      icon: Heart,
      count: 5,
      color: "text-red-500 bg-red-500/10 border-red-500/20",
    },
    {
      id: "projects",
      label: "Projects",
      icon: Code,
      count: 12,
      color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      id: "achievements",
      label: "Awards",
      icon: Award,
      count: 8,
      color: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
    },
    {
      id: "learning",
      label: "Learning",
      icon: BookOpen,
      count: 15,
      color: "text-teal-500 bg-teal-500/10 border-teal-500/20",
    },
  ];

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-muted/30 rounded-2xl">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? `${tab.color} shadow-lg scale-105`
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <tab.icon className="w-4 h-4" />
              <span className="text-sm font-semibold">{tab.label}</span>
              {tab.count && (
                <Badge
                  variant="secondary"
                  className={`text-xs h-5 px-2 ${
                    activeTab === tab.id ? "bg-white/20 text-current" : ""
                  }`}
                >
                  {tab.count}
                </Badge>
              )}

              {/* Active indicator */}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-current opacity-10 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "flashback" && <FlashbackContent />}
          {activeTab === "education" && <EducationContent />}
          {activeTab === "work" && <WorkContent />}
          {activeTab === "volunteer" && <VolunteerContent />}
          {activeTab === "projects" && <ProjectsContent />}
          {activeTab === "achievements" && <AchievementsContent />}
          {activeTab === "learning" && <LearningContent />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Individual Tab Content Components
function FlashbackContent() {
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">My Journey Flashback</h3>
        <p className="text-muted-foreground">Key moments that shaped my path</p>
      </div>
      {/* Your existing FlashbackInfo component content would go here */}
    </div>
  );
}

function EducationContent() {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      period: "2020 - 2024",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Programming Competition Winner"],
      courses: [
        "Data Structures",
        "Algorithms",
        "Web Development",
        "Database Systems",
      ],
    },
    {
      degree: "High School Diploma",
      school: "Tech High School",
      period: "2016 - 2020",
      gpa: "3.9/4.0",
      achievements: ["Valedictorian", "Science Fair Winner"],
      courses: ["Advanced Mathematics", "Physics", "Computer Science"],
    },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Educational Background</h3>
        <p className="text-muted-foreground">
          Academic journey and achievements
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary">
                      {edu.degree}
                    </h4>
                    <p className="text-lg font-semibold">{edu.school}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                    GPA: {edu.gpa}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2">Achievements</h5>
                    <div className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <Badge key={i} variant="outline" className="mr-2 mb-1">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Key Courses</h5>
                    <div className="space-y-1">
                      {edu.courses.map((course, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="mr-2 mb-1"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WorkContent() {
  const workExperience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      type: "Full-time",
      location: "San Francisco, CA",
      description:
        "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Implemented CI/CD pipeline",
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2022 - 2023",
      type: "Full-time",
      location: "Remote",
      description:
        "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Built 3 major client applications",
        "Reduced deployment time by 60%",
        "Mentored junior developers",
      ],
      technologies: ["Next.js", "TypeScript", "MongoDB", "Vercel"],
    },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Work Experience</h3>
        <p className="text-muted-foreground">
          Professional journey and accomplishments
        </p>
      </div>

      <div className="space-y-6">
        {workExperience.map((work, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary">
                      {work.title}
                    </h4>
                    <p className="text-lg font-semibold">{work.company}</p>
                    <p className="text-muted-foreground">{work.location}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="mb-2">{work.type}</Badge>
                    <p className="text-sm text-muted-foreground">
                      {work.period}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{work.description}</p>

                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Key Achievements</h5>
                    <ul className="space-y-1">
                      {work.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-primary" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {work.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function VolunteerContent() {
  const volunteerWork = [
    {
      role: "Registration & Guide Volunteer",
      organization: "OUR PRIDE 2025",
      period: "June 2025",
      location: "Phnom Penh, Cambodia",
      description:
        "Helped with event registration and guided attendees at LGBTQ+ community empowerment event.",
      impact: "Supported 100+ community members",
      skills: ["Event Management", "Community Outreach", "Communication"],
    },
    {
      role: "Coding Mentor",
      organization: "Code for Good",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description:
        "Teaching programming fundamentals to underserved youth in the community.",
      impact: "Mentored 25+ students",
      skills: ["Teaching", "JavaScript", "Python", "Mentorship"],
    },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Volunteer Experience</h3>
        <p className="text-muted-foreground">Giving back to the community</p>
      </div>

      <div className="space-y-6">
        {volunteerWork.map((volunteer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-primary">
                      {volunteer.role}
                    </h4>
                    <p className="text-lg font-semibold">
                      {volunteer.organization}
                    </p>
                    <p className="text-muted-foreground">
                      {volunteer.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="outline"
                      className="border-red-500/20 text-red-600"
                    >
                      <Heart className="w-3 h-3 mr-1" />
                      Volunteer
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-1">
                      {volunteer.period}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {volunteer.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Impact
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {volunteer.impact}
                    </p>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Skills Developed</h5>
                    <div className="flex flex-wrap gap-2">
                      {volunteer.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProjectsContent() {
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Featured Projects</h3>
        <p className="text-muted-foreground">
          Personal and professional projects
        </p>
      </div>
      <div className="text-center py-12">
        <Code className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">Projects content coming soon...</p>
      </div>
    </div>
  );
}

function AchievementsContent() {
  const achievements = [
    {
      title: "Hackathon Winner",
      organization: "TechCrunch Disrupt",
      date: "2024",
      description:
        "First place in 48-hour hackathon with innovative AI solution",
      category: "Competition",
    },
    {
      title: "Employee of the Month",
      organization: "Tech Innovations Inc.",
      date: "2023",
      description: "Recognized for outstanding performance and team leadership",
      category: "Recognition",
    },
  ];

  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Achievements & Awards</h3>
        <p className="text-muted-foreground">Recognition and accomplishments</p>
      </div>

      <div className="space-y-6">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <h4 className="text-xl font-bold text-primary">
                        {achievement.title}
                      </h4>
                    </div>
                    <p className="text-lg font-semibold">
                      {achievement.organization}
                    </p>
                    <p className="text-muted-foreground mb-3">
                      {achievement.description}
                    </p>
                    <Badge
                      variant="outline"
                      className="border-yellow-500/20 text-yellow-600"
                    >
                      {achievement.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
                      {achievement.date}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LearningContent() {
  return (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Continuous Learning</h3>
        <p className="text-muted-foreground">
          Courses, certifications, and skill development
        </p>
      </div>
      <div className="text-center py-12">
        <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">Learning content coming soon...</p>
      </div>
    </div>
  );
}
