import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Calculator,
  Radar,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  MapPin,
} from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site/SiteNav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EstateSmart AI — Nigeria's National Trust Layer for Real Estate" },
      {
        name: "description",
        content:
          "AI-powered land verification, construction cost protection, and estate infrastructure monitoring — built for every Nigerian.",
      },
      { property: "og:title", content: "EstateSmart AI" },
      {
        property: "og:description",
        content: "Nigeria's AI-powered real estate intelligence platform.",
      },
    ],
  }),
  component: Landing,
});

const modules = [
  {
    icon: ShieldCheck,
    name: "LandGuard AI",
    tag: "Title verification",
    desc: "GIS, satellite, OCR and identity binding in one trust score. End land fraud in minutes.",
    href: "/pricing",
  },
  {
    icon: Calculator,
    name: "CostBot AI",
    tag: "Construction intelligence",
    desc: "Real-time BOQs across Lagos, Abuja, Aba, Kano and PH. FX-sensitive cost protection.",
    href: "/pricing",
  },
  {
    icon: Radar,
    name: "Sentinel AI",
    tag: "Estate infrastructure",
    desc: "Predict generator, borehole and sewage failures before they happen. 24/7 monitoring.",
    href: "/pricing",
  },
];

const stats = [
  { k: "28M+", v: "Housing Deficit" },
  { k: "₦9.6T+", v: "Sector Value" },
  { k: "3", v: "AI Modules" },
  { k: "36", v: "States Coverage" },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-navy">
        <SiteNav />
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gold opacity-40" />
          <div
            className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--gold), transparent 60%)" }}
          />
          <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 md:pt-32">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Built for every Nigerian
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-navy-foreground md:text-7xl">
              Nigeria's <span className="text-gradient-gold">National Trust Layer</span>{" "}
              for Real Estate
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-navy-foreground/70 md:text-xl">
              AI-powered land verification, construction cost protection, and estate
              infrastructure monitoring — in one Bloomberg-grade platform.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/pricing"
                className="group inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-medium text-navy transition hover:brightness-110"
              >
                Start verifying
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 font-medium text-navy-foreground hover:border-gold/50 hover:text-gold"
              >
                Explore modules
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section id="stats" className="border-y border-white/5 bg-navy/60">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/5 px-6 md:grid-cols-4 md:divide-x">
            {stats.map((s) => (
              <div key={s.v} className="px-2 py-10 text-center">
                <div className="text-3xl font-bold tracking-tight text-gold md:text-4xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-navy-foreground/60">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* MODULES */}
      <section id="modules" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal">
            Three modules. One platform.
          </div>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            The infrastructure for{" "}
            <span className="text-gradient-gold">trustworthy</span> real estate.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {modules.map((m) => (
            <div
              key={m.name}
              className="group relative overflow-hidden rounded-2xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elevated"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
              />
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                <m.icon className="h-5 w-5" />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-wider text-teal">
                {m.tag}
              </div>
              <h3 className="mt-2 text-xl font-bold">{m.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              <Link
                to={m.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-teal"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal">
            Trusted across the sector
          </div>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight">
            Built with developers, investors, and estate managers in mind.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                quote:
                  "We verify every plot before we sign. LandGuard caught a duplicate title we would have missed.",
                name: "Adaeze O.",
                role: "Lagos Developer",
                icon: CheckCircle2,
              },
              {
                quote:
                  "CostBot's FX sensitivity model saved us ₦40M during the last devaluation cycle.",
                name: "Tunde B.",
                role: "Project Director",
                icon: TrendingUp,
              },
              {
                quote:
                  "Sentinel warned us about generator failure 9 days early. Zero downtime that quarter.",
                name: "Mrs. Eze",
                role: "Estate Manager",
                icon: MapPin,
              },
            ].map((t) => (
              <figure key={t.name} className="rounded-2xl border bg-card p-7">
                <t.icon className="h-5 w-5 text-teal" />
                <blockquote className="mt-4 text-base leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-navy p-12 text-center md:p-20">
          <div className="absolute inset-0 bg-grid-gold opacity-30" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-navy-foreground md:text-5xl">
              Ready to <span className="text-gradient-gold">trust the title?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-navy-foreground/70">
              Join developers and estates moving Nigerian real estate into the AI era.
            </p>
            <Link
              to="/pricing"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-medium text-navy hover:brightness-110"
            >
              See pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
