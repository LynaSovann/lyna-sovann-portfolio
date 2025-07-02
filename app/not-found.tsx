"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { Home, Search, ArrowLeft, Sparkles, Zap, Star } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    });
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    initialX: Math.random() * window?.innerWidth || 1000,
    initialY: Math.random() * window?.innerHeight || 800,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden relative">
      {/* Animated Background Shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-10"
          initial={{
            x: shape.initialX,
            y: shape.initialY,
            rotate: 0,
            scale: 0,
          }}
          animate={{
            x: [
              shape.initialX,
              shape.initialX + 100,
              shape.initialX - 100,
              shape.initialX,
            ],
            y: [
              shape.initialY,
              shape.initialY - 100,
              shape.initialY + 100,
              shape.initialY,
            ],
            rotate: [0, 360],
            scale: [0, 1, 0.8, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className="bg-primary rounded-full"
            style={{ width: shape.size, height: shape.size }}
          />
        </motion.div>
      ))}

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mb-8"
          >
            <motion.h1
              className="text-8xl sm:text-9xl lg:text-[12rem] font-bold text-primary/20 select-none"
              animate={{
                textShadow: [
                  "0 0 20px rgba(230, 57, 70, 0.3)",
                  "0 0 40px rgba(230, 57, 70, 0.5)",
                  "0 0 20px rgba(230, 57, 70, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              404
            </motion.h1>

            {/* Sparkle Effects */}
            <motion.div
              className="absolute top-4 left-1/4"
              // variants={sparkleVariants}
              animate="animate"
            >
              <Sparkles className="w-8 h-8 text-primary" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 right-1/4"
              // variants={sparkleVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <Star className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              className="absolute top-1/2 right-8"
              // variants={sparkleVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <Zap className="w-7 h-7 text-primary" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the
              digital void. Don't worry, even the best developers get lost
              sometimes!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </motion.div>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            
          </motion.div>

          
        </div>
      </div>

      {/* Animated Bottom Wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 opacity-10"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <motion.path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-primary"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
        </svg>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y: typeof window !== "undefined" ? window.innerHeight : 800,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
