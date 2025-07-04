"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LittleThingsInfo() {
    return (
        <>
         <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Little Things I <span className="text-primary">Love</span>
            </h3>

            <div className="max-w-6xl mx-auto">
              {/* Grid Layout with Images and Text */}
              {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/user.jpg"
                        alt="Coffee moments"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        ☕ Morning Coffee
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Starting each day with a perfect cup of coffee while
                        planning my coding adventures. It's my daily ritual that
                        sets the tone for creativity.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/user.jpg"
                        alt="Late night coding"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        💻 Late Night Coding
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Those peaceful midnight hours when the world is quiet
                        and code flows like poetry. My most productive and
                        creative moments happen after sunset.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/user.jpg"
                        alt="Nature walks"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        🌿 Nature Escapes
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Taking breaks in nature to recharge and find
                        inspiration. Sometimes the best solutions come when you
                        step away from the screen.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/user.jpg"
                        alt="Learning and books"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        📚 Continuous Learning
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Always curious about new technologies and concepts.
                        Every book, tutorial, and experiment adds another tool
                        to my developer toolkit.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/user.jpg"
                        alt="Music and headphones"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        🎵 Coding Soundtracks
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        The perfect playlist can transform a coding session into
                        a flow state. Music is my companion through every debug
                        session and breakthrough.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/10">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src="/user.jpg"
                        alt="Simple moments"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        ✨ Simple Joys
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Finding happiness in small moments - a successful
                        deployment, a clean code refactor, or just a peaceful
                        evening with good thoughts.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div> */}

              {/* Bottom Quote */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground italic leading-relaxed">
                      "Life is made up of small moments like these. Each one
                      shapes who we are and fuels our passion for what we do."
                    </p>
                    <div className="mt-4 flex justify-center">
                      <Badge variant="outline" className="px-4 py-2">
                        Living the Simple Life 🌸
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </>
    )
}