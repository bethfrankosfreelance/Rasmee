import { motion } from "framer-motion";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import FooterSection from "@/components/FooterSection";

const services = [
  {
    title: "Yoga — Hatha for Everyone",
    schedule: "Mondays at 6pm · Thursdays at 9:30am",
    note: "Check fb and insta @Kirkland Art Center for schedule changes.",
    price: "$10 per class",
    bookingUrl: "https://share.google/gf6dUEwYqsF3fGvvZ",
  },
  {
    title: "IHYT Bodywork",
    schedule: null,
    note: "Integral Healing Yoga Therapy, similar to Thai Yoga massage, is a healing modality using assisted stretching, massage and trigger point techniques to bring the receiver into deep relaxation and a sense of well being. It is done on a special mat on the floor with the receiver wearing comfortable clothes.",
    price: "$75 for 1 hour",
    bookingUrl: null,
  },
  {
    title: "Shamanic Healing",
    schedule: null,
    note: "The specific blend of Reiki, bodywork, sound healing and tarot that is right for you.",
    price: "$110 for 1 hour 30 mins",
    bookingUrl: null,
  },
  {
    title: "Tarot as Guidance",
    schedule: null,
    note: null,
    price: "$60 for 30–40 minutes",
    bookingUrl: null,
  },
  {
    title: "Travel Planning",
    schedule: null,
    note: "Want to plan a trip or thinking about relocating to Costa Rica or Nicaragua? Let me be your point of contact. Set up a 30 minute consultation plus 1 week of texting support for $60.",
    price: "$60 — 30 min consultation + 1 week of texting support",
    bookingUrl: null,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 bg-card">
        <div className="section-container text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block"
          >
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4"
          >
            Yoga, Bodywork, Energy Work{" "}
            <span className="text-gradient-glow">& Tarot Guidance</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3 }}
            className="glow-line w-20 mx-auto"
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">{service.title}</h3>

                {service.price && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-body text-primary font-semibold">{service.price}</span>
                  </div>
                )}

                {service.schedule && (
                  <div className="flex items-start gap-2 mb-3">
                    <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
                    <span className="font-body text-sm text-muted-foreground">{service.schedule}</span>
                  </div>
                )}

                {service.note && (
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{service.note}</p>
                )}

                {service.bookingUrl && (
                  <div className="mt-auto pt-2">
                    <a
                      href={service.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body font-semibold text-sm bg-primary text-primary-foreground hover:bg-teal-glow transition-all duration-300 shadow"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Book at Kirkland Arts Center
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Book Now CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <a
              href="mailto:rasmeerashika007@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-lg bg-primary text-primary-foreground hover:bg-teal-glow transition-all duration-300 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book a Session
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Services;
