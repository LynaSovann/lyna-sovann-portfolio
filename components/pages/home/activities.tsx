"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
  Award,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Activities() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const activities = [
    {
      id: 1,
      title: "OUR PRIDE 2025",
      description:
        "OUR PRIDE is a community program that aspires to raise awareness and empower the LGBTQ+ community in Cambodia through mentorship programs and other various programs tailored to promoting inclusivity and equity across Cambodia.",
      image: "/our-pride/our-pride-2025.jpg",
      date: "June 29th, 2025",
      location: "Raintree, Phnom Penh, Cambodia",
      type: "LGBTQ+ Community",
      participants: "100+ attendees",
      icon: Award,
      tags: ["Volunteer", "Registration & Guide"],
      gallery: [
        { src: "/our-pride/img-1.jpg", alt: "N/A" },
        { src: "/our-pride/our-pride-2025.jpg", alt: "N/A" },
        { src: "/our-pride/img-2.jpg", alt: "N/A" },
      ],
    },
    // {
    //   id: 2,
    //   title: "Tech Conference 2024",
    //   description:
    //     "Attended the annual tech conference where I learned about the latest trends in AI and machine learning, connecting with industry leaders and fellow developers.",
    //   image: "/tech-conf-1.jpg",
    //   date: "March 2024",
    //   location: "San Francisco, CA",
    //   type: "Conference",
    //   participants: "500+ attendees",
    //   icon: Award,
    //   tags: ["AI", "Machine Learning", "Networking"],
    //   gallery: [
    //     { src: "/tech-conf-1.jpg", alt: "Conference keynote presentation" },
    //     { src: "/tech-conf-2.jpg", alt: "Networking session with industry leaders" },
    //     { src: "/tech-conf-3.jpg", alt: "AI workshop demonstration" },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "Hackathon Winner",
    //   description:
    //     "Won first place in the 48-hour hackathon by building an innovative web application for local businesses using React and Node.js.",
    //   image: "/hackathon-1.jpg",
    //   date: "February 2024",
    //   location: "Silicon Valley",
    //   type: "Competition",
    //   participants: "100+ developers",
    //   icon: Award,
    //   tags: ["React", "Node.js", "Innovation"],
    //   gallery: [
    //     { src: "/hackathon-1.jpg", alt: "Team brainstorming session" },
    //     { src: "/hackathon-2.jpg", alt: "Coding through the night" },
    //     { src: "/hackathon-3.jpg", alt: "Winning team celebration" },
    //   ],
    // },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activities.length]);

  // Initialize selected image index for each activity
  useEffect(() => {
    const initialSelection: { [key: number]: number } = {};
    activities.forEach((activity) => {
      initialSelection[activity.id] = 0;
    });
    setSelectedImageIndex(initialSelection);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activities.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + activities.length) % activities.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const selectImage = (activityId: number, imageIndex: number) => {
    setSelectedImageIndex((prev) => ({
      ...prev,
      [activityId]: imageIndex,
    }));
  };

  const getCurrentImage = (activity: any) => {
    const selectedIndex = selectedImageIndex[activity.id] || 0;
    return activity.gallery?.[selectedIndex]?.src || activity.image;
  };

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
            My{" "}
            <span className="text-primary">
              Volunteer & Activity Highlights
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Extra Activities & Volunteery work I've truly enjoyed and loved
            being involved in.
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
                    <div className="relative overflow-hidden group flex flex-col">
                      {/* Main Image */}
                      <div className="relative flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`${activities[currentSlide].id}-${
                              selectedImageIndex[activities[currentSlide].id] ||
                              0
                            }`}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={
                                getCurrentImage(activities[currentSlide]) ||
                                "/placeholder.svg"
                              }
                              alt={activities[currentSlide].title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </motion.div>
                        </AnimatePresence>
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
                            {activities[currentSlide].icon && (
                              <Award className="w-12 h-12 mx-auto mb-2" />
                            )}
                            <p className="font-semibold text-lg">
                              {activities[currentSlide].title}
                            </p>
                          </div>
                        </motion.div>
                      </div>

                      {/* Thumbnail Gallery */}
                      {activities[currentSlide].gallery && (
                        <div className="p-4 bg-black/10 backdrop-blur-sm">
                          <div className="flex gap-2 justify-center">
                            {activities[currentSlide].gallery.map(
                              (photo, index) => (
                                <motion.button
                                  key={index}
                                  onClick={() =>
                                    selectImage(
                                      activities[currentSlide].id,
                                      index
                                    )
                                  }
                                  className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                                    (selectedImageIndex[
                                      activities[currentSlide].id
                                    ] || 0) === index
                                      ? "ring-2 ring-primary scale-110"
                                      : "hover:scale-105 opacity-70 hover:opacity-100"
                                  }`}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <Image
                                    src={photo.src || "/placeholder.svg"}
                                    alt={photo.alt}
                                    fill
                                    className="object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/20" />

                                  {/* Active indicator */}
                                  {(selectedImageIndex[
                                    activities[currentSlide].id
                                  ] || 0) === index && (
                                    <div className="absolute inset-0 border-2 border-primary rounded-lg" />
                                  )}
                                </motion.button>
                              )
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Side */}
                    <CardContent className="p-8 flex flex-col justify-center bg-gradient-to-br from-background to-muted/20">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-2xl font-bold mb-4 text-foreground">
                          {activities[currentSlide].title}
                        </h3>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {activities[currentSlide].description}
                        </p>

                        {/* Event Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3 text-sm">
                            <Calendar className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">
                              {activities[currentSlide].date}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">
                              {activities[currentSlide].location}
                            </span>
                          </div>
                          <div className="flex items-center gap-3 text-sm">
                            <Users className="w-4 h-4 text-primary" />
                            <span className="text-muted-foreground">
                              {activities[currentSlide].participants}
                            </span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {activities[currentSlide].tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Image Caption */}
                        {activities[currentSlide].gallery && (
                          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
                            <p className="text-sm text-muted-foreground italic">
                              {
                                activities[currentSlide].gallery[
                                  selectedImageIndex[
                                    activities[currentSlide].id
                                  ] || 0
                                ]?.alt
                              }
                            </p>
                          </div>
                        )}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
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
                      <p className="text-white text-xs font-medium text-center px-2">
                        {activity.title}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
