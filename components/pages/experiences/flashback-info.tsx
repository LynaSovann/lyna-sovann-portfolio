"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Camera, Clock } from "lucide-react";

export default function FlashbackInfo() {
  const flashbackMoments = [
    {
      id: 1,
      title: "Finished High School",
      year: "2021",
      description:
        "Finishing high school at Chea Sim Samiki High School ",
      image: "/user.jpg",
      category: "Learning",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 2,
      title: "Graduated College",
      year: "2025",
      description:
        "Graduated with a degree in Computer Science at the Royal University of Phnom Penh",
      image: "/user.jpg",
      category: "Learning",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 3,
      title: "First Job as an IT Instructor",
      year: "Current",
      description:
        "Started my career as an IT Instructor, sharing knowledge and inspiring the next generation",
      image: "/user.jpg",
      category: "Working",
      color: "from-purple-500/20 to-violet-500/20",
    },
    // {
    //   id: 4,
    //   title: "This is fake data",
    //   year: "2023",
    //   description:
    //     "The pride of landing my first developer role and building real applications",
    //   image: "/user.jpg",
    //   category: "Achievement",
    //   color: "from-orange-500/20 to-red-500/20",
    // },
    // {
    //   id: 5,
    //   title: "This is fake data",
    //   year: "2024",
    //   description:
    //     "Giving back to the community that taught me everything I know",
    //   image: "/user.jpg",
    //   category: "Community",
    //   color: "from-pink-500/20 to-rose-500/20",
    // },
    // {
    //   id: 6,
    //   title: "This is fake data",
    //   year: "2025",
    //   description:
    //     "Continuously learning, building, and dreaming of what's next",
    //   image: "/user.jpg",
    //   category: "Present",
    //   color: "from-indigo-500/20 to-blue-500/20",
    // },
  ];

  return (
    <div className="mb-16">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <Camera className="w-6 h-6 text-primary" />
          My Journey <span className="text-primary">Flashback</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A visual timeline of the moments that shaped my path as a developer
        </p>
      </motion.div> */}

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 via-primary/50 to-primary/30 rounded-full"></div>

        <div className="space-y-12">
          {flashbackMoments.map((moment, index) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } gap-8 relative`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

              {/* Content Card */}
              <div className="w-5/12">
                <Card
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${moment.color} border-0`}
                >
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image */}
                    <div className="relative h-48 md:h-auto overflow-hidden group">
                      <Image
                        src={moment.image || "/placeholder.svg"}
                        alt={moment.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Year Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                          {moment.year}
                        </Badge>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 right-4">
                        <Badge
                          variant="outline"
                          className="bg-background/80 backdrop-blur-sm"
                        >
                          {moment.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {moment.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold mb-3">{moment.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {moment.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </div>

              {/* Empty space for alternating layout */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline End */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <div className="relative">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
            <p className="text-sm text-muted-foreground font-medium">
              To be continued...
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
