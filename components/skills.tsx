"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import LayoutPage from "./layout/page-layout";
import { Layers, FileCode, Cpu, Shield, Zap, Smartphone } from "lucide-react";
import { skillCategories } from "@/data/skill-category";

export function Skills() {

  return (
    <LayoutPage
      id="skills"
      blackTitle="My"
      redTitle="Skills"
      content={
        <main className="space-y-16">
          {/* <style jsx>{`
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #e63946 transparent;
            }

            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }

            .custom-scrollbar::-webkit-scrollbar-track {
              background: transparent;
              border-radius: 10px;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #e63946, #e63946cc);
              border-radius: 10px;
              border: 1px solid transparent;
            }

            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #e63946, #e63946);
              box-shadow: 0 0 8px rgba(230, 57, 70, 0.3);
            }

            .custom-scrollbar::-webkit-scrollbar-corner {
              background: transparent;
            }
          `}</style> */}

          {/* Main Skill Categories */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/20">
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl font-bold">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div
                      className={`px-6 pb-6 space-y-3 custom-scrollbar ${
                        category.skills.length > 5
                          ? "max-h-80 overflow-y-auto"
                          : ""
                      }`}
                    >
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="group/skill"
                        >
                          <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                            <div className="text-2xl group-hover/skill:scale-125 transition-transform duration-200">
                              {skill.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-sm">
                                {skill.name}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {skill.description}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Scroll Indicator */}
                    {category.skills.length > 5 && (
                      <div className="px-6 pb-2">
                        <div className="text-center">
                          <div className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded-full">
                            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                            <span>Scroll for more</span>
                            <div className="w-1 h-1 bg-primary rounded-full animate-pulse delay-300"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Ready to Work Together?</h3>
                <p className="text-muted-foreground">
                  I'm always excited to take on new challenges and learn emerging technologies. Let's build something
                  amazing together!
                </p>
                <div className="flex justify-center gap-4 pt-4">
                  <Badge className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2">
                    Available for Projects
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    Open to Learning
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div> */}
        </main>
      }
    />
  );
}
