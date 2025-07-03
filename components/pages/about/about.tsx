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
  Watch,
} from "lucide-react";
import { personalInfo } from "@/data/social-data";
import LayoutPage from "@/components/layout/page-layout";
import HobbyCard from "@/components/card/hobby-card";

export function About() {
  const interests = [
    "Web Development",
    "UI/UX Design",
    "DevOps Engineering",
    // "Machine Learning",
    // "Open Source",
    // "Photography",
  ];


  const languages = [
    { name: "English", level: 100, flag: "🇺🇸" },
    { name: "Spanish", level: 85, flag: "🇪🇸" },
    { name: "French", level: 70, flag: "🇫🇷" },
    { name: "Japanese", level: 45, flag: "🇯🇵" },
  ];

  const hobbies = [
    // {
    //   name: "Photography",
    //   icon: Camera,
    //   description: "Capturing moments and landscapes",
    // },
    {
      name: "Listening to music",
      icon: Music,
      description: "Listening to music from various genres",
    },
    // {
    //   name: "Travel",
    //   icon: Plane,
    //   description: "Exploring new cultures and places",
    // },
    {
      name: "Reading",
      icon: BookOpen,
      description: "Reading in the freetime",
    },
    // {
    //   name: "Coffee",
    //   icon: Coffee,
    //   description: "Third-wave coffee enthusiast and home barista",
    // },
    {
      name: "Running",
      icon: Watch,
      description: "Enjoying outdoor runs, even if I’m not exactly a runner.",
    },
  ];

  const achievements = [
    { title: "AWS Certified Developer", year: "2023", icon: Award },
    { title: "Computer Science Degree", year: "2019", icon: GraduationCap },
    { title: "Open Source Contributor", year: "2020-Present", icon: Code2 },
  ];


  return (
    <LayoutPage
      id="about"
      blackTitle="About"
      redTitle="Me"
      content={
        <main>
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
                      <h3 className="text-2xl font-bold">
                        {personalInfo.name}
                      </h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    I'm a Fullstack Developer with strong experience in Spring
                    Boot and Next.js, and a solid background in DevOps
                    practices. I'm passionate about building scalable
                    applications and streamlining development workflows.
                    Currently, I'm expanding my skill set into Machine Learning
                    to bridge the gap between software engineering and
                    intelligent systems. Beyond tech,
                    {/* I’m an active member of
                    various communities, often volunteering to support and
                    contribute to impactful causes. */}
                    I also enjoy staying physically active through running,
                    walking, and other outdoor activities.
                  </p>

                  {/* <div className="space-y-4">
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
                  </div> */}
                </CardContent>
              </Card>
            </div>

            {/* Modern Photo Gallery */}
            <div className="relative h-80 w-full">
              {/* Main large image - center */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg z-10">
                <Image
                  src="/user.jpg"
                  alt="John - Main Profile"
                  fill
                  className="object-cover"
                />
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
                <Image
                  src="/user.jpg"
                  alt="John at conference"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-16 left-12 w-28 h-20 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/user.jpg"
                  alt="John with team"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-12 right-16 w-24 h-24 transform rotate-12 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/user.jpg"
                  alt="John presenting"
                  fill
                  className="object-cover transform -rotate-12"
                />
              </div>

              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 translate-x-20 w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                <Image
                  src="/user.jpg"
                  alt="John casual"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-1/4 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-1/2 right-4 w-4 h-4 border-2 border-primary rounded-full animate-bounce"></div>
            </div>
          </div>


          {/* Languages & Hobbies */}
          {/* <div className="grid lg:grid-cols-2 gap-8 mb-16">
           
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
          </div> */}

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
                  <HobbyCard hobby={hobby} />
                </motion.div>
              ))}
            </div>
          </div>


        </main>
      }
    />
  );
}
