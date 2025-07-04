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
  Calendar,
  Briefcase,
  User,
  Mail,
  Phone,
  Globe,
  Heart,
  Users,
} from "lucide-react";
import { personalInfo } from "@/data/social-data";

export default function ContactInfo() {
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
      value: "www.lynasovann.site",
      color: "text-purple-500",
      isLink: true,
      href: "https://www.lynasovann.site",
    },
  ];

  return (
    <>
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
                <Image
                  src="/user.jpg"
                  alt="Sovann Lyna - Contact Photo"
                  fill
                  className="object-cover"
                />
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
                    <p className="text-sm text-muted-foreground font-medium">
                      {contact.label}
                    </p>
                    {contact.isLink ? (
                      <a
                        href={contact.href}
                        className="font-semibold text-foreground hover:text-primary transition-colors duration-200 break-all text-lg"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground text-lg">
                        {contact.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
