"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  Code2,
  Music,
  BookOpen,
  MapPin,
  Watch,
  Calendar,
  Briefcase,
  User,
  Mail,
  Phone,
  Globe,
  Heart,
  Users,
} from "lucide-react"
import { personalInfo } from "@/data/social-data"
import LayoutPage from "@/components/layout/page-layout"
import HobbyCard from "@/components/card/hobby-card"

export function About() {
  const interests = ["Web Development", "UI/UX Design", "DevOps Engineering"]

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
  ]

  // Personal Information Data
  const personalDetails = [
    {
      icon: User,
      label: "Full Name",
      value: "Sovann Lyna",
      color: "text-blue-500",
    },
    {
      icon: Calendar,
      label: "Date of Birth",
      value: "July 07, 2004",
      color: "text-green-500",
    },
    {
      icon: Users,
      label: "Gender",
      value: "Female",
      color: "text-purple-500",
    },
    {
      icon: Briefcase,
      label: "Current Position",
      value: "Senior Fullstack Developer",
      color: "text-orange-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      color: "text-red-500",
    },
    {
      icon: Heart,
      label: "Relationship Status",
      value: "Single",
      color: "text-pink-500",
    },
  ]

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "sovannlyna2004@gmail.com",
      color: "text-blue-500",
      isLink: true,
      href: "mailto:sovannlyna2004@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+855 962626669",
      color: "text-green-500",
      isLink: true,
      href: "tel:+855962626669",
    },
    {
      icon: Globe,
      label: "Website",
      value: "https://lynasovann.site",
      color: "text-purple-500",
      isLink: true,
      href: "https://lynasovann.site",
    },
  ]

  const quickFacts = [
    { label: "Years of Experience", value: "5+", icon: "💼" },
    { label: "Projects Completed", value: "50+", icon: "🚀" },
    { label: "Coffee Cups/Day", value: "3-4", icon: "☕" },
    { label: "Favorite IDE", value: "VS Code", icon: "💻" },
    { label: "Preferred OS", value: "Linux", icon: "🐧" },
    { label: "Time Zone", value: "PST", icon: "🌍" },
  ]

  return (
    <LayoutPage
      id="about"
      blackTitle="About"
      redTitle="Me"
      content={
        <main>
          {/* Hero Section with Description */}
          <div className="mb-16">
            <Card className="max-w-4xl mx-auto">
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

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a little introverted but friendly :D Feel free to reach out, whether you have a question or just want to say hi, I'd love to hear from you! 😀
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Personal Information with Image - New Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Personal Details</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Single Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <Image src="/user.jpg" alt="Sovann Lyna - Professional Photo" fill className="object-cover" />
                  </div>
                  {/* Decorative elements around the image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-1/2 -left-6 w-4 h-4 border-2 border-primary rounded-full animate-bounce"></div>
                </div>
              </motion.div>

              {/* Right Side - Personal Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid gap-4">
                  {personalDetails.map((detail, index) => (
                    <motion.div
                      key={detail.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
                    >
                      <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-sm">
                        <detail.icon className={`w-6 h-6 ${detail.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-medium">{detail.label}</p>
                        <p className="font-semibold text-foreground text-lg">{detail.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Contact Information with Image - New Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Get In Touch</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Contact Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                    <Image src="/user.jpg" alt="Sovann Lyna - Contact Photo" fill className="object-cover" />
                  </div>
                  {/* Different decorative elements for contact section */}
                  <div className="absolute -top-4 -left-4 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-blue-500/60 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/4 -right-6 w-4 h-4 border-2 border-green-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </motion.div>

              {/* Right Side - Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="grid gap-4">
                  {contactDetails.map((contact, index) => (
                    <motion.div
                      key={contact.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200">
                        <contact.icon className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground font-medium">{contact.label}</p>
                        {contact.isLink ? (
                          <a
                            href={contact.href}
                            className="font-semibold text-foreground hover:text-primary transition-colors duration-200 break-all text-lg"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-foreground text-lg">{contact.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

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
                    <div className="text-lg font-bold text-primary mb-1">{fact.value}</div>
                    <div className="text-xs text-muted-foreground leading-tight">{fact.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div> */}

          {/* Hobbies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Hobbies & Interests</h3>
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

          {/* Professional Summary */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  With over 5 years of experience in full-stack development, I specialize in creating robust, scalable
                  applications using modern technologies. My expertise spans from frontend frameworks like React and
                  Next.js to backend systems with Spring Boot and Java. I'm passionate about DevOps practices and
                  continuously learning new technologies to stay at the forefront of software development.
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
  )
}
