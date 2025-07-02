"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function About() {
  const interests = ["Web Development", "UI/UX Design", "Machine Learning", "Open Source", "Photography"]

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    I'm a passionate full-stack developer with over 5 years of experience creating digital solutions
                    that make a difference. I love turning complex problems into simple, beautiful, and intuitive
                    designs.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                    projects, or capturing moments through photography.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {interests.map((interest) => (
                          <Badge key={interest} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                    <div className="text-muted-foreground">Happy Clients</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-muted-foreground">Support</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
