"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Briefcase,
  User,
  Heart,
  Users,
} from "lucide-react";
import { personalInfo } from "@/data/social-data";

export default function PersonalInfo() {
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
  ];
  return (
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
              <Image
                src="/user.jpg"
                alt="Sovann Lyna - Professional Photo"
                fill
                className="object-cover"
              />
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
                  <p className="text-sm text-muted-foreground font-medium">
                    {detail.label}
                  </p>
                  <p className="font-semibold text-foreground text-lg">
                    {detail.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
