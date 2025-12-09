import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Award, Users } from "lucide-react";
import worksho from "../images/ab.jpg";
import worksho2 from "../images/ui.jpg";
import remoteWorkshop from "../images/bandir.jpg";
import leadershipConference from "../images/leader.jpg";
import leadershipInnovation from "../images/Arkan.jpg";


interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
  type: "workshop" | "achievement" | "conference" | "activity";
  image: string;
}

const events: Event[] = [
  {
  title: "DevOps Workshop",
  description: "Participated in an intensive DevOps workshop focusing on CI/CD pipelines, Docker, and modern deployment practices.",
  date: "2024",
  location: "Rise Academy",
  type: "workshop",
  image: worksho,
  },

   {
    title: "6th Leadership and Innovation",
  description: "Secured first place at the 6th Leadership and Innovation Hackathon, presenting an innovative solution for education and technology development.",
  date: "2025",
  location: "Royal place",
  type: "achievement",
  image: leadershipInnovation,
  },

    {
    title: "UI/UX Design Seminar",
    description: "Attended intensive seminar on user experience design and interface development.",
    date: "2025",
    location: "Rise Academy",
    type: "workshop",
    image: worksho2
  },
  {
  title: "Remote Work Workshop for Student Developers",
  description: "Attended an interactive workshop focused on effective remote working strategies, productivity tools, and best practices for student developers.",
  date: "2025",
  location: "Benaadir University innovation hub", 
  type: "workshop",
  image: remoteWorkshop,
  },
  {
     title: "Leading Together: Building Leadership and Teamwork Skills",
  description: "Attended a national conference focused on developing leadership, teamwork, and collaboration skills essential for career success.",
  date: "2025",
  location: "Man group",
  type: "conference",
  image: leadershipConference,
  },
 

];

export const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-padding relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6">
            Events & Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Workshops, achievements, and activities that shaped my career
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-primary glow-soft md:-translate-x-1/2 z-10" />

                {/* Card */}
               <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
  <div className="glass-card p-6 rounded-xl hover-glow flex flex-col md:flex-row items-center gap-6">
    
    {/* Image (weyn) */}
    <div className="w-full md:w-48 h-48 md:h-56 rounded-xl overflow-hidden bg-primary/10 flex-shrink-0">
      <img 
        src={event.image} 
        alt={event.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Text content */}
    <div className="flex-1">
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
        <Calendar className="w-4 h-4" />
        <span>{event.date}</span>
        <span className="text-border">•</span>
        <MapPin className="w-4 h-4" />
        <span>{event.location}</span>
      </div>
      <h3 className="text-xl md:text-2xl font-display font-semibold mb-3">{event.title}</h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{event.description}</p>
    </div>

  </div>
</div>


                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
