import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-terra mb-4 block">
            Why Work With Me
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            You run your jobs.{" "}
            <span className="text-gradient-amber">I'll handle the process.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
            When you work with me, we'll get your operations under control, scale, streamline & expand impact. 
            That means more time for the work you love, stronger client relationships, and the confidence 
            to take on bigger opportunities without drowning in paperwork.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
