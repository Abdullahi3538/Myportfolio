import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Eye } from "lucide-react";
import { Button } from "./ui/button";

import abImage from "../images/hero.jpg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero "  />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            >
              Abdullahi Mohamed —{" "}
              <span className="text-gradient">Full-Stack Developer</span>{" "}
              & Graphic Designer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Student at Jamhuriya University • MERN Stack Developer • Graphic Designer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  <Briefcase className="w-5 h-5" />
                  Hire Me
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#projects">
                  <Eye className="w-5 h-5" />
                  View Projects
                </a>
              </Button>
            </motion.div>
          </div>

          {/* 3D Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative  lg:flex justify-center items-center"
          >
            <div className="relative w-80 h-80">
              {/* Floating shapes */}
  <motion.img
  src={abImage}
  animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  className="absolute h-200 top-0 left-1/2 -translate-x-1/2 w-48 h-48 rounded-3xl bg-gradient-primary glow-primary transform rotate-12"
/>
<motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute  bottom-8 left-8 w-32 h-32 rounded-2xl glass border-2 border-primary/30"
              />
              <motion.div
                animate={{ y: [-5, 15, -5], rotate: [0, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute  top-1/2 right-0 w-20 h-20 rounded-full bg-primary/30 border border-border"
              />
              
              {/* Code snippet decoration */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0   right-8 glass-card p-4 rounded-xl"
              >
                <code className="text-xs text-primary font-mono">
                  <span className="text-muted-foreground ">const</span> developer = <span className="text-foreground">"Abdullahi"</span>;
                </code>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute  left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
