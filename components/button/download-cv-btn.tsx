"use client";

import { Button } from "@/components/ui/button";
import { Download, FileText, Heart, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DownloadCVBtn() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDownloadCV = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Button
        className="bg-primary hover:bg-primary/90"
        size="sm"
        onClick={handleDownloadCV}
      >
        <Download className="h-4 w-4" />
        <span>CV</span>
      </Button>

      {/* Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closePopup}
            >
              {/* Popup Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-background border rounded-2xl p-8 max-w-md w-full text-center shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button - Top Right */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  onClick={closePopup}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/20 hover:bg-muted/40 flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </motion.button>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <FileText className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold mb-2"
                >
                  Thanks for clicking!
                </motion.h3>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground mb-6 leading-relaxed"
                >
                  I appreciate your interest in my CV! I'll add my real CV soon.
                  Stay tuned for updates!
                </motion.p>

                {/* Heart Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  className="flex justify-center mb-6"
                >
                  <Heart className="w-6 h-6 text-primary fill-primary" />
                </motion.div>

                {/* Close Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    onClick={closePopup}
                    className="bg-primary hover:bg-primary/90"
                    size="sm"
                  >
                    Got it!
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
