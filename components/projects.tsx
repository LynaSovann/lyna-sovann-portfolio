"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application built with Next.js and MongoDB. Real-time updates with Socket.io and beautiful UI with Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current weather and forecasts. Built with React and integrates with multiple weather APIs.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features dark mode, animations, and optimized performance.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
