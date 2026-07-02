import { useEffect, useState } from "react";
import { MapPin, Clock } from "lucide-react";

function useJakartaTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(`${formatted} (UTC+7)`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function Footer() {
  const time = useJakartaTime();

  return (
    <footer className="py-10 border-t border-white/10" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-2xl font-bold tracking-tighter text-white">
          Rafi.
        </div>

        <div className="text-sm font-mono" style={{ color: "#888" }}>
          © {new Date().getFullYear()} Rafi Digital. All rights reserved.
        </div>

        <div
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            backgroundColor: "rgba(255,255,255,0.04)",
            color: "#ccc",
          }}
        >
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <MapPin size={12} className="text-white/60" />
            <span>Live in Central Java, Indonesia</span>
          </span>

          <span className="w-px h-4 bg-white/20" />

          <span className="flex items-center gap-1.5">
            <Clock size={12} className="text-white/60" />
            <span className="font-mono tabular-nums">{time}</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
