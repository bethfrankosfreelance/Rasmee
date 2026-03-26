import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceTierCardProps {
  tier: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  delay?: number;
}

const ServiceTierCard = ({ tier, title, price, description, features, featured = false, delay = 0 }: ServiceTierCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "bg-espresso text-cream shadow-2xl ring-2 ring-terra scale-[1.02]"
          : "bg-card text-card-foreground shadow-lg hover:shadow-xl border border-border"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-terra text-accent-foreground text-sm font-semibold font-body">
          Most Popular
        </div>
      )}

      <div className="mb-6">
        <span className="text-xs font-bold tracking-widest uppercase font-body text-terra">
          {tier}
        </span>
        <h3 className="font-display text-2xl font-bold mt-2">{title}</h3>
        <p className={`text-sm mt-2 font-body ${featured ? "text-cream/70" : "text-muted-foreground"}`}>
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span className="font-display text-4xl font-bold">{price}</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 font-body text-sm">
            <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-terra" />
            <span className={featured ? "text-cream/85" : "text-muted-foreground"}>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://calendly.com/bethfrankosfreelance/15min"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center w-full py-3 rounded-lg font-body font-semibold transition-all duration-300 ${
          featured
            ? "bg-terra text-accent-foreground hover:bg-terra-glow"
            : "bg-primary text-primary-foreground hover:bg-espresso-light"
        }`}
      >
        Get Started
      </a>
    </motion.div>
  );
};

export default ServiceTierCard;
