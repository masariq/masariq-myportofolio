import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

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
              
              <div className="space-y-6">
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors p-4 bg-background rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">
                    <SiWhatsapp size={24} />
                  </div>
                  Chat on WhatsApp
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-lg font-medium hover:text-primary transition-colors p-4 bg-background rounded-2xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
                    <Linkedin size={24} />
                  </div>
                  Connect on LinkedIn
                </a>
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
