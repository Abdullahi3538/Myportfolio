import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <div></div>
    // <footer className="py-8 border-t border-border">
    //   <div className="container-custom">
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       whileInView={{ opacity: 1 }}
    //       transition={{ duration: 0.6 }}
    //       className="flex flex-col md:flex-row items-center justify-between gap-4"
    //     >
    //       <a href="#home" className="text-2xl font-display font-bold text-gradient">
    //         AM
    //       </a>

    //       <p className="text-muted-foreground text-sm flex items-center gap-2">
    //         Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Abdullahi Mohamed
    //       </p>

    //       <p className="text-muted-foreground text-sm">
    //         © {currentYear} All rights reserved
    //       </p>
    //     </motion.div>
    //   </div>
    // </footer>

};
