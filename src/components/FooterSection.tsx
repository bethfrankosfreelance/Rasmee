import { Instagram, Mail, Calendar, Facebook, FileText } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/beth.frankos?igsh=MXR4bHh6a3BhYzk4bw==", label: "Instagram" },
  { icon: Mail, href: "mailto:bethfrankosfreelance@gmail.com", label: "Email" },
  { icon: Calendar, href: "https://calendly.com/bethfrankosfreelance/15min", label: "Book a Call" },
  { icon: Facebook, href: "https://www.facebook.com/share/1AgkuwNfDa/", label: "Facebook" },
  { icon: FileText, href: "https://docs.google.com/forms/d/e/1FAIpQLScbXZRCufQdGBA1cxb3vYpKw0mb56yFdb-6u1QwReb8RZwT2w/viewform?usp=header", label: "Inquiry Form" },
];

const FooterSection = () => {
  return (
    <footer className="py-16 bg-espresso text-cream">
      <div className="section-container text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ready to <span className="text-gradient-amber">get started?</span>
        </h2>
        <p className="font-body text-cream/60 mb-8 max-w-md mx-auto">
          Let's talk about where you are and where you want to go.
        </p>

        <a
          href="https://calendly.com/bethfrankosfreelance/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-semibold text-lg bg-terra text-accent-foreground hover:bg-terra-glow transition-all duration-300 mb-12"
        >
          Book Your Free 15-Min Call
        </a>

        <div className="flex items-center justify-center gap-5 mb-10">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full border border-cream/20 flex items-center justify-center hover:border-terra hover:text-terra transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <a
          href="https://bffreelance-about.carrd.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-cream/50 hover:text-terra transition-colors underline underline-offset-4"
        >
          Learn more about Beth
        </a>

        <div className="mt-8 pt-8 border-t border-cream/10">
          <p className="font-body text-xs text-cream/30">
            © {new Date().getFullYear()} Beth Frankos Freelance LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
