import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      <div className="relative z-10 section-container text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <img
            src="https://bffreelance.carrd.co/assets/images/image01.jpg?v=5fc94b8d"
            alt="Beth Frankos"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-terra object-cover shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-cream">Launch. </span>
          <span className="text-gradient-amber">Grow. </span>
          <span className="text-cream">Thrive.</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-20 h-1 bg-terra mx-auto mb-6 rounded-full"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-display text-2xl md:text-3xl text-cream/90 font-medium mb-8"
        >
          Beth Frankos Freelance LLC
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-cream/75 leading-relaxed mb-10 font-body"
        >
          I help contractors, nonprofits, and small business owners stop bleeding time, money, & good clients—and focus instead on revenue and impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://calendly.com/bethfrankosfreelance/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-lg bg-terra text-accent-foreground hover:bg-terra-glow transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a Free Call
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-lg border-2 border-cream/30 text-cream hover:border-terra hover:text-terra transition-all duration-300"
          >
            View Services
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
