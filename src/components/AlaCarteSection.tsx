import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const packages = [
  { price: "$125", label: "One & Done Deliverable", note: "24hrs or your money back" },
  { price: "$150", label: "Consulting Deep Dive", note: "" },
  { price: "$250", label: "Branded Documents Package", note: "" },
  { price: "$450", label: "Build-Your-Own", note: "3 docs, systems or processes" },
  { price: "$750", label: "Rebrand + Docs + Web Presence", note: "" },
  { price: "$1,500", label: "All-In Package", note: "14 day turnaround, or your money back!" },
  { price: "$1,500/mo", label: "Monthly Retainer", note: "" },
];

const AlaCarteSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-terra mb-4 block">
            Flexible Options
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            À La Carte & Custom Packages
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-terra/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-terra/10 flex items-center justify-center group-hover:bg-terra/20 transition-colors">
                <Zap className="w-5 h-5 text-terra" />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-foreground">{pkg.price}</span>
                <p className="font-body text-sm text-foreground font-medium mt-0.5">{pkg.label}</p>
                {pkg.note && (
                  <p className="font-body text-xs text-muted-foreground mt-1">{pkg.note}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlaCarteSection;
