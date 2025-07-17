"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadCVBtn() {
  const handleDownloadCV = () => {
    // Create a link element to trigger the download
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      className="bg-primary hover:bg-primary/90"
      size="sm"
      onClick={handleDownloadCV}
    >
      <Download className="h-4 w-4" />
      <span>CV</span>
    </Button>
  );
}
