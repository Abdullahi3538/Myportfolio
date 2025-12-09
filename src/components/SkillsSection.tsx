import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML", icon: "🌐", level: 95, category: "Frontend" },
  { name: "CSS", icon: "🎨", level: 90, category: "Frontend" },
  { name: "JavaScript", icon: "⚡", level: 88, category: "Frontend" },
  { name: "React.js", icon: "⚛️", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", icon: "💨", level: 92, category: "Frontend" },
  { name: "Node.js", icon: "🟢", level: 82, category: "Backend" },
  { name: "Express.js", icon: "🚀", level: 80, category: "Backend" },
  { name: "MongoDB", icon: "🍃", level: 78, category: "Backend" },
  { name: "SQL", icon: "🗃️", level: 75, category: "Backend" },
  { name: "Adobe Photoshop", icon: "📸", level: 88, category: "Design" },
  { name: "Adobe Illustrator", icon: "✏️", level: 85, category: "Design" },
  { name: "Adobe Premiere Pro", icon: "🎬", level: 80, category: "Design" },
];

const categories = ["All", "Frontend", "Backend", "Design"];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const levels: { [key: string]: number } = {};
        skills.forEach(skill => {
          levels[skill.name] = skill.level;
        });
        setAnimatedLevels(levels);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Technologies & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools to bring ideas to life
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary text-primary-foreground glow-soft"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-6 rounded-xl hover-glow group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
                </div>
                <span className="text-primary font-bold">
                  {animatedLevels[skill.name] || 0}%
                </span>
              </div>
              
              <div className="skill-progress">
                <motion.div
                  className="skill-progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${animatedLevels[skill.name] || 0}%` }}
                  transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
