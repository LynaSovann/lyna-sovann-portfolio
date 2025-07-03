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
export default function ExperiencePageComponent() {
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
    <>
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
    </>
  );
}
