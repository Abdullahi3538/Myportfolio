import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Code, Palette } from "lucide-react";
import image from "../images/abou.webp";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code, label: "Full-Stack Developer", value: "MERN Stack" },
    { icon: Palette, label: "Graphic Designer", value: "Adobe Suite" },
    { icon: GraduationCap, label: "Education", value: "Jamhuriya University" },
    { icon: MapPin, label: "Location", value: "Somalia" },
  ];

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
              <div className="absolute -inset-1 bg-gradient-primary rounded-3xl opacity-50" style={{ padding: '2px' }}>
                <div className="w-full h-full bg-card rounded-3xl" />
              </div>
              
              {/* Photo placeholder */}
              <div className="relative glass-card rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
                <img src={image} alt="" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -bottom-4 -right-4 glass-card px-6 py-3 rounded-xl glow-soft"
              >
                <p className="text-sm font-medium text-primary">2+ Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Passionate about creating{" "}
              <span className="text-gradient">digital experiences</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My name is Abdullahi Mohamed Mohamud, a passionate Full-Stack Web Developer 
              and Graphic Designer. I study at Jamhuriya University and specialize in 
              building modern, scalable, and user-friendly systems. I love creating 
              beautiful interfaces and solving real-world problems using technology.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="glass-card p-4 rounded-xl hover-glow"
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2" />
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className="font-semibold text-sm">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
