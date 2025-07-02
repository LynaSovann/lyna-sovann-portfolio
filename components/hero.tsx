"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
              <Image
                src="/user.jpg"
                alt="Lyna Sovann"
                fill
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                priority
              />
            </div>
          </motion.div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Lyna Sovann</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Fullstack Developer & DevOps Engineer passionate about creating scalable, efficient, and user-centered digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="#contact">Get In Touch</Link>
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <Link href="https://github.com/LynaSovann" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <Link href="https://www.linkedin.com/in/lyna-sovann-829448264/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="h-6 w-6" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <Link href="mailto:sovannlyna2004@gmail.com" aria-label="Email">
                <Mail className="h-6 w-6" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
