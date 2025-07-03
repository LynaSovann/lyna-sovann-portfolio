"use client";

import { motion } from "framer-motion";

export default function LayoutPage({
  id,
  content,
  blackTitle,
  redTitle,
}: {
  id: string;
  content: React.ReactNode;
  blackTitle: string;
  redTitle: string;
}) {
  return (
    <section id={id} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            {blackTitle} <span className="text-primary">{redTitle}</span>
          </h2>

          {content}
        </motion.div>
      </div>
    </section>
  );
}
