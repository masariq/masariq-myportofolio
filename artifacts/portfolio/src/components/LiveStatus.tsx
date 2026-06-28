import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Zap, MessageSquare, CheckCircle, Coffee } from "lucide-react";

function useLocalTime(timezone = "Asia/Jakarta") {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { timeZone: timezone, hour: "2-digit", minute: "2-digit", hour12: true }));
      setDate(now.toLocaleDateString("en-US", { timeZone: timezone, weekday: "short", month: "short", day: "numeric" }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timezone]);

  return { time, date };
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function LiveStatus() {
  const { time, date } = useLocalTime("Asia/Jakarta");

  const currentWork = [
    "Building a client e-commerce site",
    "Editing TikTok content series",
    "Designing a brand identity system",
  ];

  return (
    <section id="live-status" className="py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Live Status</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            What's happening<br />
            <span className="text-muted-foreground font-light">right now.</span>
          </h2>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >

          {/* Availability — wide */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 bg-green-500/8 border border-green-500/20 rounded-2xl p-7 flex flex-col justify-between min-h-[160px]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wider">Open to Work</span>
              </div>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground mb-1">Available Now</p>
              <p className="text-sm text-muted-foreground">Taking on freelance projects & full-time remote roles. Slots open for Q3 2026.</p>
            </div>
          </motion.div>

          {/* Local time */}
          <motion.div
            variants={itemVariants}
            className="bg-muted/40 border border-border rounded-2xl p-7 flex flex-col justify-between min-h-[160px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <Clock size={15} className="text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Local Time</span>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground tabular-nums">{time}</p>
              <p className="text-xs text-muted-foreground mt-1">{date} · UTC+7</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="bg-muted/40 border border-border rounded-2xl p-7 flex flex-col justify-between min-h-[160px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={15} className="text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Based In</span>
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">Indonesia</p>
              <p className="text-sm text-muted-foreground mt-0.5">Remote-first · Global clients</p>
            </div>
          </motion.div>

          {/* Response time */}
          <motion.div
            variants={itemVariants}
            className="bg-muted/40 border border-border rounded-2xl p-7 flex flex-col justify-between min-h-[160px]"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare size={15} className="text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Response Time</span>
            </div>
            <div>
              <p className="text-xl font-bold text-foreground">Under 24h</p>
              <p className="text-sm text-muted-foreground mt-0.5">WhatsApp · Email · LinkedIn</p>
            </div>
          </motion.div>

          {/* Current work — wide */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 bg-muted/40 border border-border rounded-2xl p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Coffee size={15} className="text-muted-foreground" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Currently Working On</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {currentWork.map((item, i) => (
                <div key={i} className="flex items-center gap-3 flex-1 bg-background border border-border rounded-xl px-4 py-3">
                  <Zap size={14} className="text-primary flex-shrink-0" />
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
