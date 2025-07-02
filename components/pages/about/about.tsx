"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Camera,
  Music,
  Plane,
  BookOpen,
  Coffee,
  Gamepad2,
  Award,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { personalInfo } from "@/data/social-data";

export function About() {
  const interests = [
    "Web Development",
    "UI/UX Design",
    "Machine Learning",
    "Open Source",
    "Photography",
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 80 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      category: "Tools & Cloud",
      items: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 85 },
      ],
    },
  ];

  const languages = [
    { name: "English", level: 100, flag: "🇺🇸" },
    { name: "Spanish", level: 85, flag: "🇪🇸" },
    { name: "French", level: 70, flag: "🇫🇷" },
    { name: "Japanese", level: 45, flag: "🇯🇵" },
  ];

  const hobbies = [
    {
      name: "Photography",
      icon: Camera,
      description: "Capturing moments and landscapes",
    },
    {
      name: "Music Production",
      icon: Music,
      description: "Creating electronic music in my spare time",
    },
    {
      name: "Travel",
      icon: Plane,
      description: "Exploring new cultures and places",
    },
    {
      name: "Reading",
      icon: BookOpen,
      description: "Tech blogs, sci-fi novels, and philosophy",
    },
    {
      name: "Coffee",
      icon: Coffee,
      description: "Third-wave coffee enthusiast and home barista",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      description: "Strategy games and indie titles",
    },
  ];

  const achievements = [
    { title: "AWS Certified Developer", year: "2023", icon: Award },
    { title: "Computer Science Degree", year: "2019", icon: GraduationCap },
    { title: "Open Source Contributor", year: "2020-Present", icon: Code2 },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Started as Junior Developer",
      description: "Began my journey at a startup",
    },
    {
      year: "2021",
      title: "Full Stack Developer",
      description: "Promoted to lead frontend initiatives",
    },
    {
      year: "2022",
      title: "Senior Developer",
      description: "Leading a team of 5 developers",
    },
    {
      year: "2024",
      title: "Freelance & Consulting",
      description: "Started my own consulting practice",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            About <span className="text-primary">Me</span>
          </h2>

          {/* Hero Section with Photos */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Code2 className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{personalInfo.name}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    I'm a passionate full-stack developer with over 5 years of
                    experience creating digital solutions that make a
                    difference. I specialize in building scalable web
                    applications using modern technologies like React, Node.js,
                    and cloud platforms.
                  </p>


                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-3">Core Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <Badge key={interest} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Modern Photo Gallery */}
            <div className="relative h-80 w-full">
              {/* Main large image - center */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg z-10">
                <Image src="/user.jpg" alt="John - Main Profile" fill className="object-cover" />
              </div>

              {/* Diamond positioned images */}
              <div className="absolute top-16 left-8 w-24 h-24 transform rotate-45 overflow-hidden shadow-lg">
                <Image
                  src="/user.jpg"
                  alt="John working"
                  fill
                  className="object-cover transform -rotate-45 scale-150"
                />
              </div>

              <div className="absolute top-16 right-8 w-20 h-28 rounded-2xl overflow-hidden shadow-lg">
                <Image src="/user.jpg" alt="John at conference" fill className="object-cover" />
              </div>

              <div className="absolute bottom-16 left-12 w-28 h-20 rounded-full overflow-hidden shadow-lg">
                <Image src="/user.jpg" alt="John with team" fill className="object-cover" />
              </div>

              <div className="absolute bottom-12 right-16 w-24 h-24 transform rotate-12 rounded-lg overflow-hidden shadow-lg">
                <Image src="/user.jpg" alt="John presenting" fill className="object-cover transform -rotate-12" />
              </div>

              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 translate-x-20 w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                <Image src="/user.jpg" alt="John casual" fill className="object-cover" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 right-4 w-4 h-4 border-2 border-primary rounded-full animate-bounce"></div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-center">
                        {skillCategory.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {skillCategory.items.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages & Hobbies */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle>Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={language.level} className="w-20 h-2" />
                      <span className="text-sm text-muted-foreground w-12">
                        {language.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle>Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{achievement.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {achievement.year}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Hobbies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Hobbies & Interests
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <hobby.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{hobby.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {hobby.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">My Journey</h3>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-6"
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <div className="text-lg font-bold text-primary">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full"></div>
                    <Card className="flex-1">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
