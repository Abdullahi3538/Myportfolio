import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "./ui/button";
import pro1 from "../images/futrepath.png";
import pro2 from "../images/electronic.png";
import pro3 from "../images/realestate.png";
import pro4 from "../images/portfolio.png";
import pro5 from "../images/images.png";
import pro6 from "../images/image.png";

// import pdf
import samplePDF from "../images/brand_compressed.pdf";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Future Path",
    description:
      "A career-guidance platform that helps students choose the right university faculty based on their skills, interests, and future goals. The system provides faculty details, requirements, and recommendations to help students plan their academic path.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: pro1,
    liveUrl: "https://futurepath-two.vercel.app/",
    githubUrl: "#",
  },


  {
    title: "Electronic Store",
    description:
      "An e-commerce platform for buying and selling electronic gadgets with features like product listings, shopping cart, and secure checkout.",
    tech: ["React", "Express", "MySQL", "Stripe API"],
    image: pro2,
    liveUrl: "https://electronicapp-bice.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Real Estate management",
    description:
      "A real estate management system for property listings, client management, and transaction tracking.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: pro3,
    liveUrl: "https://real-estate-management-phi.vercel.app/",
    githubUrl: "#",
  },

  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website with smooth animations and interactive elements.",
    tech: ["HTML", "Tailwind CSS"],
    image: pro4,
    liveUrl: "https://abdullahi3538.github.io/website-about-me/",
    githubUrl: "#",
  },

   {
    title: "Personal Coach Website",
    description: "A personal coaching website with booking functionality and client testimonials.",
    tech: ["HTML", "Tailwind CSS"],
    image: pro6,
    liveUrl: "https://abdullahi3538.github.io/personal-Coach/",
    githubUrl: "#",
  },


  /// this is graphic design project
  {
    title: "Abdale Travel Agency Branding",
    description:
      "Developed a comprehensive branding package for Abdale Travel Agency, including logo design, business cards, brochures, and social media graphics to establish a strong visual identity.",
    tech: ["Adobe Photoshop", "Adobe Illustrator"],
    image: pro5,
    liveUrl: samplePDF,
    githubUrl: "#",
   
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col hover-glow">
                {/* Project Preview */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary overflow-hidden">
                 {project.image && (
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover"
  />
)}
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-3 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-primary-foreground" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-3 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors"
                      >
                        <Github className="w-5 h-5 text-primary-foreground" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="heroOutline" size="sm" className="w-full" asChild>
                    <a href={project.liveUrl || "#"}>View Project</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
