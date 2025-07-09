"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, Volume2 } from "lucide-react"
import { useState } from "react"

export default function CinematicHero() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="mb-16">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold mb-4">
          Behind the <span className="text-primary">Scenes</span>
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A glimpse into the moments that define who I am
        </p>
      </motion.div> */}

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        <Card className="overflow-hidden border-0 shadow-2xl bg-black">
          <div className="relative aspect-[21/9] overflow-hidden group">
            {/* Main Cinematic Image */}
            <Image
              src="/cinematic-hero.png"
              alt="Cinematic portrait"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Cinematic Overlay Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

            {/* Film Grain Effect */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <div 
                className="w-full h-full animate-pulse"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
                }}
              />
            </div>

            {/* Cinematic Bars */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-black"></div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-black"></div>

            {/* Play Button Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 group/play"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white group-hover/play:text-primary transition-colors" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1 group-hover/play:text-primary transition-colors" />
                )}
              </motion.button>
            </motion.div>

            {/* Corner Details */}
            <div className="absolute top-6 left-6">
              <Badge className="bg-black/50 text-white border-white/20 backdrop-blur-sm">
                BEHIND THE SCENES
              </Badge>
            </div>

            <div className="absolute top-6 right-6">
              <div className="flex items-center gap-2 text-white/80">
                <Volume2 className="w-4 h-4" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1 h-4 bg-white/40 rounded-full ${
                        isPlaying && i < 3 ? "animate-pulse" : ""
                      }`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-end justify-between">
                <div className="text-white">
                  <h4 className="text-2xl font-bold mb-2">The Journey Continues</h4>
                  <p className="text-white/80 text-sm max-w-md">
                    Every moment shapes the story. This is just one frame in the ongoing narrative of growth,
                    creativity, and passion.
                  </p>
                </div>

                <div className="text-right text-white/60 text-xs">
                  <div>FRAME 001</div>
                  <div>2025.01.07</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: isPlaying ? "100%" : "0%" }}
                  transition={{ duration: isPlaying ? 10 : 0.5, ease: "linear" }}
                />
              </div>
            </div>

            {/* Subtle Animation Effects */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, rgba(230, 57, 70, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, rgba(230, 57, 70, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, rgba(230, 57, 70, 0.1) 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
          </div>
        </Card>

        {/* Cinematic Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-center gap-8 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>LIVE</span>
          </div>
          <div>ASPECT RATIO: 21:9</div>
          <div>RESOLUTION: 4K</div>
          <div>MOOD: CINEMATIC</div>
        </motion.div>
      </motion.div>
    </div>
  )
}
