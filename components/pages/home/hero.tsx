"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { socialLinks, personalInfo } from "@/data/social-data"
import { useState, useEffect } from "react"

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "github":
      return <Github className="h-6 w-6" />
    case "linkedin":
      return <Linkedin className="h-6 w-6" />
    case "mail":
      return <Mail className="h-6 w-6" />
    case "message-circle":
      return <MessageCircle className="h-6 w-6" />
    default:
      return <Mail className="h-6 w-6" />
  }
}

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = `Hi, I'm ${personalInfo.name}`
  const typingSpeed = 100 // milliseconds per character

  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [fullText])

  // Function to render text with proper styling
  const renderTypedText = () => {
    const hiImText = "Hi, I'm "
    if (displayedText.length <= hiImText.length) {
      // Still typing "Hi, I'm "
      return (
        <>
          {displayedText}
          <motion.span
            className="inline-block w-1 h-[0.8em] bg-primary ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </>
      )
    } else {
      // Typing the name part
      const nameText = displayedText.slice(hiImText.length)
      return (
        <>
          {hiImText}
          <span className="text-primary">
            {nameText}
            <motion.span
              className="inline-block w-1 h-[0.8em] bg-primary ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </span>
        </>
      )
    }
  }

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
                alt={personalInfo.name}
                fill
                className="rounded-full object-cover border-4 border-primary/20 shadow-lg"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {renderTypedText()}
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 2.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <Link
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${social.name} Profile`}
                    title={social.description}
                  >
                    {getIcon(social.icon)}
                  </Link>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3.3 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
