export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold tracking-tighter">
          Rafi.
        </div>
        <div className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Rafi Digital. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Twitter</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Instagram</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
