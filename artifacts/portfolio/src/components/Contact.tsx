import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { SiInstagram, SiThreads, SiFacebook, SiX } from "react-icons/si";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto bg-muted/40 rounded-[3rem] p-8 md:p-16 border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Let's build something exceptional.</h2>
              <p className="text-lg text-muted-foreground mb-12">
                Currently available for freelance projects and full-time remote opportunities. Reach out to discuss your next big idea.
              </p>
              
              <div className="flex items-center gap-3">
                {[
                  { icon: SiInstagram,  label: "Instagram", href: "https://instagram.com/" },
                  { icon: SiThreads,    label: "Threads",   href: "https://threads.net/" },
                  { icon: LinkedInIcon, label: "LinkedIn",  href: "https://linkedin.com/" },
                  { icon: SiFacebook,   label: "Facebook",  href: "https://facebook.com/" },
                  { icon: SiX,          label: "X",         href: "https://x.com/" },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-105 hover:border-foreground/30 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus !== "idle"}
                  className="w-full bg-foreground text-background py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-foreground/90 transition-colors disabled:opacity-70"
                >
                  {formStatus === "idle" && <><Send size={18} /> Send Message</>}
                  {formStatus === "submitting" && "Sending..."}
                  {formStatus === "success" && "Message Sent!"}
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
