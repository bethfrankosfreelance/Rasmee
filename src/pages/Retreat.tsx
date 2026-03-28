import { motion } from "framer-motion";
import { Check, MapPin, Users, Calendar, ExternalLink } from "lucide-react";
import retreatHero from "@/assets/retreat-main-Morpho.jpg";
import photoKidsYoga from "@/assets/retreat-kids-yoga.jpg";
import photoKidsSand from "@/assets/retreat-kids-sand.jpg";
import photoHorseRide from "@/assets/retreat-horse-ride.jpg";
import FooterSection from "@/components/FooterSection";

const included = [
  "5 nights in Nosara, Costa Rica",
  "Airport pick-up and drop-off",
  "Your private room(s) in a shared villa with kitchen, pool and yoga rancho",
  "Chef prepared, shared meals",
  "Sunsets together on the beach",
  "Community cacao circle / dance party",
  "Waterfall hike or Boca trip, depending on the season",
  "Daily yoga, massage, art, hammock time, beach time, nature hikes, farmer's market and shopping, quiet reflection, bonding with other single parents",
  "Nanny(s) on duty 12 hours per day",
];

const kidsPrograms = [
  {
    title: "Little Kids (0–5)",
    items: [
      "Tide pools, picnic, beach time and pool time with amazing nannies",
      "0–1 year old: 1:1 baby to nanny ratio",
      "2–5 year olds: 2:1 kid to nanny ratio",
    ],
  },
  {
    title: "Big Kids (5–13)",
    items: [
      "3 days of Nosara Kids Camp",
      "Surfing, snorkeling, farm trips, mud baths, water slides, paddle boarding, cooking classes, magic shows and more!",
    ],
  },
  {
    title: "Teenagers (13–18)",
    items: ["3 surf lessons and a 4 day bike rental"],
  },
];

const pricing = [
  { label: "You + 1 child", price: "$3,000" },
  { label: "You + 2 children", price: "$4,000" },
  { label: "You + 3 children", price: "$5,000" },
];

const Retreat = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={retreatHero} alt="Costa Rica retreat villa" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div className="relative z-10 section-container text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block"
          >
            Metamorphosis Travel
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
          >
            Bringing Back{" "}
            <span className="text-gradient-glow">The Matriarchy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-6"
          >
            A transformative retreat for single parents and their children in beautiful Nosara, Costa Rica.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-4 font-body text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" /> Nosara, Costa Rica</span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-primary" /> TBD Aug 2026 & Jan 31–Feb 5, 2027</span>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Pricing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {pricing.map(({ label, price }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-muted border border-border text-center"
              >
                <p className="font-body text-sm text-muted-foreground mb-2">{label}</p>
                <p className="font-display text-3xl font-bold text-gradient-glow">{price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What's Included
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3"
              >
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="font-body text-foreground/80">{item}</p>
              </motion.div>
            ))}
          </div>

          <p className="font-body text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
            Within a moment's walk: an amazing cafe and local restaurant, a mini supermarket, gelato, a bookstore, 
            great pizza, breakfast, bakery and smoothie spot, and the beach.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Life at the Retreat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              { src: photoKidsYoga, alt: "Georgia teaching kids yoga" },
              { src: photoKidsSand, alt: "Kids playing in the sand" },
              { src: photoHorseRide, alt: "Horse ride adventure" },
            ].map(({ src, alt }, i) => (
              <motion.div
                key={alt}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Kids Programs */}
      <section className="py-20 bg-card">
        <div className="section-container">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            <Users className="w-8 h-8 text-primary inline-block mr-2 -mt-1" />
            Programs for the Kids
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {kidsPrograms.map(({ title, items }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-muted border border-border"
              >
                <h3 className="font-display text-xl font-bold text-foreground mb-4">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional evening */}
      <section className="py-16 bg-background">
        <div className="section-container text-center">
          <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-2">
            Optional evening at the skate park for kids/families and dinner/night out for the adults (not included).
          </p>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Afternoons by the pool, for siestas and recharging — or for family tours and excursions.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Join?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScQwjV8zS23z4mdVkL2ekcGDcCKLNQevvni-jh55amff1nLuQ/viewform?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-lg bg-primary text-primary-foreground hover:bg-teal-glow transition-all duration-300 shadow-lg"
            >
              <ExternalLink className="w-5 h-5" />
              Register Now
            </a>
            <a
              href="mailto:rasmeerashika007@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-lg border-2 border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
            >
              Contact Us
            </a>
          </div>

          <div className="border-t border-border pt-10">
            <p className="font-body text-muted-foreground mb-6">
              Secure your spot with a deposit
            </p>
            <style>{`.pp-7ELRLE6RDQ25Q{text-align:center;border:none;border-radius:0.25rem;min-width:11.625rem;padding:0 2rem;height:2.625rem;font-weight:bold;background-color:#FFD140;color:#000000;font-family:"Helvetica Neue",Arial,sans-serif;font-size:1rem;line-height:1.25rem;cursor:pointer;}`}</style>
            <form
              action="https://www.paypal.com/ncp/payment/7ELRLE6RDQ25Q"
              method="post"
              target="_blank"
              style={{ display: "inline-grid", justifyItems: "center", alignContent: "start", gap: "0.5rem" }}
            >
              <input className="pp-7ELRLE6RDQ25Q" type="submit" value="Pay Deposit" />
              <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
              <section style={{ fontSize: "0.75rem" }}>
                Powered by{" "}
                <img
                  src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg"
                  alt="paypal"
                  style={{ height: "0.875rem", verticalAlign: "middle" }}
                />
              </section>
            </form>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default Retreat;
