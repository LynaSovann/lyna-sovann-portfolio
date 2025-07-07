"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function LittleThingsInfo() {
  return (
    <>
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8">
          Little Things I <span className="text-primary">Love</span>
        </h3>

        <div className="max-w-6xl mx-auto">
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
                  "****************************************************
                  *****************************************"
                </p>
                <div className="mt-4 flex justify-center">
                  <Badge variant="outline" className="px-4 py-2">
                    Life goes on 🌸
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
