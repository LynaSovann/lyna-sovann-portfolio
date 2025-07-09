"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Music,
  BookOpen,
  MapPin,
  Watch,
  Heart,
  Users,
  Camera,
  Clock,
} from "lucide-react";
import { personalInfo } from "@/data/social-data";
import LayoutPage from "@/components/layout/page-layout";
import HobbyCard from "@/components/card/hobby-card";
import PersonalInfo from "./personal-infor";
import ContactInfo from "./contact-info";
import LittleThingsInfo from "./little-things-info";
import CinematicHero from "./cinematicHero";

export function About() {
  const interests = ["Web Development", "UI/UX Design", "DevOps Engineering"];

  const hobbies = [
    {
      name: "Listening to music",
      icon: Music,
      description: "Listening to music from various genres",
    },
    {
      name: "Reading",
      icon: BookOpen,
      description: "Reading in the freetime",
    },
    {
      name: "Running",
      icon: Watch,
      description: "Enjoying outdoor runs, even if I'm not exactly a runner.",
    },
  ];

  // const contactDetails = [
  //   {
  //     icon: Mail,
  //     label: "Email",
  //     value: "sovannlyna2004@gmail.com",
  //     color: "text-blue-500",
  //     isLink: true,
  //     href: "mailto:sovannlyna2004@gmail.com",
  //   },
  //   {
  //     icon: Phone,
  //     label: "Phone",
  //     value: "+1 (555) 123-4567",
  //     color: "text-green-500",
  //     isLink: true,
  //     href: "tel:+15551234567",
  //   },
  //   {
  //     icon: Globe,
  //     label: "Website",
  //     value: "www.sovannlyna.dev",
  //     color: "text-purple-500",
  //     isLink: true,
  //     href: "https://www.sovannlyna.dev",
  //   },
  // ]

  const quickFacts = [
    { label: "Years of Experience", value: "5+", icon: "💼" },
    { label: "Projects Completed", value: "50+", icon: "🚀" },
    { label: "Coffee Cups/Day", value: "3-4", icon: "☕" },
    { label: "Favorite IDE", value: "VS Code", icon: "💻" },
    { label: "Preferred OS", value: "Linux", icon: "🐧" },
    { label: "Time Zone", value: "PST", icon: "🌍" },
  ];

  return (
    <LayoutPage
      id="about"
      blackTitle="About"
      redTitle="Me"
      content={
        <main>

          {/* <CinematicHero/> */}


          {/* Hero Section - Redesigned */}
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto">
              {/* Name and Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-4xl font-bold mb-2">{personalInfo.name}</h3>
                <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {personalInfo.location}
                </p>
              </motion.div>

              {/* Three Key Descriptors */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center gap-8 mb-8"
              >
                <div className="text-center group">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Code2 className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="font-semibold text-lg">Developer</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="font-semibold text-lg">Innovator</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-8 h-8 text-purple-500" />
                  </div>
                  <p className="font-semibold text-lg">Creator</p>
                </div>
              </motion.div>

              {/* Short Bio */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  I'm a little introverted but friendly :D Feel free to reach
                  out, whether you have a question or just want to say hi, I'd
                  love to hear from you! 😀
                </p>
              </motion.div>
            </div>
          </div>

          {/* Personal Information with Image - New Section */}
          <PersonalInfo />

          {/* Contact Information with Image - New Section */}
          <ContactInfo />

          {/* Quick Facts */}
          {/* <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Quick Facts</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <Card className="text-center p-4 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10">
                    <div className="text-2xl mb-2">{fact.icon}</div>
                    <div className="text-lg font-bold text-primary mb-1">
                      {fact.value}
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {fact.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
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

          {/* Little Things I Love */}
          <LittleThingsInfo />

          {/* Professional Summary */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Professional Summary
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  With over 5 years of experience in full-stack development, I
                  specialize in creating robust, scalable applications using
                  modern technologies. My expertise spans from frontend
                  frameworks like React and Next.js to backend systems with
                  Spring Boot and Java. I'm passionate about DevOps practices
                  and continuously learning new technologies to stay at the
                  forefront of software development.
                </p>
                <div className="flex justify-center gap-4">
                  <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2">
                    Available for Opportunities
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    Open to Collaboration
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}
        </main>
      }
    />
  );
}
