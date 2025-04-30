"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div
            className={`md:w-1/2 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm <span className="text-primary">Santosh Yadav</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Full Stack Engineer
            </h2>
            <p className="text-lg mb-8 max-w-2xl">
              Building robust web applications with modern technologies. I
              specialize in creating seamless user experiences with React,
              Node.js, and cloud technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href="/Santosh_Yadav_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          <div
            className={`md:w-1/2 flex justify-center ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src={
                  "https://avatars.githubusercontent.com/u/49767268?s=400&u=fda3d9595ace0cf6430754116252344d4741006a&v=4"
                }
                alt="Santosh Yadav"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
