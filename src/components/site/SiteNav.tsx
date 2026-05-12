import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 text-navy-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gold text-navy">
            <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
          </div>
          <span className="font-semibold tracking-tight">
            EstateSmart<span className="text-gold"> AI</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-navy-foreground/70 md:flex">
          <a href="/#modules" className="hover:text-gold">Modules</a>
          <Link to="/pricing" className="hover:text-gold">Pricing</Link>
          <a href="/#stats" className="hover:text-gold">Impact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/pricing" className="hidden text-sm text-navy-foreground/70 hover:text-gold sm:inline">
            Sign in
          </Link>
          <Link
            to="/pricing"
            className="rounded-md bg-gold px-4 py-2 text-sm font-medium text-navy transition hover:brightness-110"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-navy text-navy-foreground/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gold text-navy">
            <ShieldCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
          </div>
          <span className="text-sm">© 2025 EstateSmart AI Technologies Ltd.</span>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="/#modules" className="hover:text-gold">LandGuard</a>
          <a href="/#modules" className="hover:text-gold">CostBot</a>
          <a href="/#modules" className="hover:text-gold">Sentinel</a>
          <Link to="/pricing" className="hover:text-gold">Pricing</Link>
        </div>
      </div>
    </footer>
  );
}
