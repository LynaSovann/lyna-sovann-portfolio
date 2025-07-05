"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Activities() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const activities = [
    {
      id: 1,
      title: "OUR PRIDE 2025",
      description:
        "OUR PRIDE is a community program that aspires to raise awareness and empower the LGBTQ+ commnuity in Cambodia through mentorship programs and other various programs tailors to promoting inclusivity and quity across Cambodia.",
      image: "/our-pride-2025.jpg",
      date: "June 29th, 2025",
      location: "Raintree, Phnom Penh, Cambodia",
      type: "LGBTQ+ Community",
      participants: "100+ attendees",
      icon: Award,
      tags: ["Volunteer", "Registration & Guide"],
    },
    // {
    //   id: 2,
    //   title: "Hackathon Winner",
    //   description:
    //     "Won first place in the 48-hour hackathon by building an innovative web application for local businesses.",
    //   image: "/user.jpg",
    //   date: "February 2024",
    //   location: "Silicon Valley",
    //   type: "Competition",
    //   participants: "100+ developers",
    //   icon: Award,
    //   tags: ["React", "Node.js", "Innovation"],
    // },
    // {
    //   id: 3,
    //   title: "Open Source Contribution",
    //   description: "Made significant contributions to popular open-source projects, helping improve developer tools.",
    //   image: "/user.jpg",
    //   date: "January 2024",
    //   location: "Remote",
    //   type: "Development",
    //   participants: "Global community",
    //   icon: Users,
    //   tags: ["Open Source", "GitHub", "Community"],
    // },
    // {
    //   id: 4,
    //   title: "Workshop Speaker",
    //   description: "Conducted a workshop on modern web development practices for junior developers and students.",
    //   image: "/user.jpg",
    //   date: "December 2023",
    //   location: "Local University",
    //   type: "Speaking",
    //   participants: "50+ students",
    //   icon: Users,
    //   tags: ["Teaching", "Web Development", "Mentoring"],
    // },
    // {
    //   id: 5,
    //   title: "Team Building Retreat",
    //   description:
    //     "Participated in company retreat focused on collaboration, innovation, and team building activities.",
    //   image: "/user.jpg",
    //   date: "November 2023",
    //   location: "Mountain Resort",
    //   type: "Team Event",
    //   participants: "30+ colleagues",
    //   icon: Users,
    //   tags: ["Team Building", "Leadership", "Collaboration"],
    // },
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, activities.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activities.length) % activities.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-primary">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore the events, and activities that have shaped my professional growth and learning
            journey.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Slideshow */}
          <div className="relative h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Card className="h-full overflow-hidden border-0 shadow-2xl">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image Side */}
                    <div className="relative overflow-hidden group">
                      <Image
                        src={activities[currentSlide].image || "/placeholder.svg"}
                        alt={activities[currentSlide].title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                          {activities[currentSlide].type}
                        </Badge>
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-primary/20 flex items-center justify-center backdrop-blur-sm transition-all duration-300"
                      >
                        <div className="text-white text-center">
                          {activities[currentSlide].icon && <Award className="w-12 h-12 mx-auto mb-2" />}
                          <p className="font-semibold text-lg">{activities[currentSlide].title}</p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Side */}
                    <CardContent className="p-8 flex flex-col justify-center bg-gradient-to-br from-background to-muted/20">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-2xl font-bold mb-4 text-foreground">{activities[currentSlide].title}</h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {activities[currentSlide].description}
                        </p>

                        {/* Event Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{activities[currentSlide].date}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{activities[currentSlide].location}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">{activities[currentSlide].participants}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {activities[currentSlide].tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </motion.div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-0 shadow-lg"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background border-0 shadow-lg"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {activities.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {isAutoPlaying ? "⏸️ Pause" : "▶️ Play"} Auto-slide
            </button>
          </div>
        </div>

        {/* Thumbnail Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => goToSlide(index)}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-20 overflow-hidden">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-xs font-medium text-center px-2">{activity.title}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
