import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site/SiteNav";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — EstateSmart AI" },
      {
        name: "description",
        content:
          "LandGuard, CostBot, and Sentinel pricing. Pay-per-use or Enterprise API access.",
      },
      { property: "og:title", content: "EstateSmart AI Pricing" },
      {
        property: "og:description",
        content: "Transparent pricing for Nigeria's real estate trust layer.",
      },
    ],
  }),
  component: Pricing,
});

const tiers = [
  {
    name: "LandGuard AI",
    tag: "Per verification",
    price: "₦25,000",
    unit: "/ verification",
    enterprise: "₦5,000,000 / yr Enterprise API",
    features: [
      "GIS parcel matching",
      "Satellite boundary analysis",
      "OCR title authenticity",
      "NIN + BVN identity binding",
      "PDF verification certificate",
    ],
    highlight: false,
  },
  {
    name: "CostBot AI",
    tag: "Per project",
    price: "₦500,000",
    unit: "/ project",
    enterprise: "Unlimited materials & FX scenarios",
    features: [
      "Itemised BOQ across 5 markets",
      "FX sensitivity scenarios",
      "Live material price feed",
      "Budget alert thresholds",
      "PDF / Excel export",
    ],
    highlight: true,
  },
  {
    name: "Sentinel AI",
    tag: "Per estate / year",
    price: "₦1,000,000",
    unit: "/ estate / yr",
    enterprise: "Includes predictive alerts & resident portal",
    features: [
      "Generator + borehole health",
      "Predictive failure alerts",
      "Diesel anomaly tracking",
      "Maintenance log + contractors",
      "Resident fault reporting",
    ],
    highlight: false,
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-navy">
        <SiteNav />
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">
            Pricing
          </div>
          <h1 className="mt-3 text-5xl font-bold tracking-tight text-navy-foreground md:text-6xl">
            Pay only for the <span className="text-gradient-gold">trust you need.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-navy-foreground/70">
            Transparent NGN pricing. Diaspora users can pay $50 USD per verification report.
          </p>
        </div>
      </div>

      <section className="mx-auto -mt-10 max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border bg-card p-8 ${
                t.highlight
                  ? "shadow-elevated ring-2 ring-gold"
                  : ""
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy">
                  Most popular
                </div>
              )}
              <div className="text-xs font-semibold uppercase tracking-widest text-teal">
                {t.tag}
              </div>
              <h2 className="mt-2 text-2xl font-bold">{t.name}</h2>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{t.price}</span>
                <span className="text-sm text-muted-foreground">{t.unit}</span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">{t.enterprise}</div>
              <ul className="mt-7 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium transition ${
                  t.highlight
                    ? "bg-navy text-navy-foreground hover:bg-navy/90"
                    : "border hover:border-gold hover:text-gold"
                }`}
              >
                Get started <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border bg-card p-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-teal">
            Diaspora Portal
          </div>
          <h3 className="mt-2 text-2xl font-bold">$50 USD per verification report</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            For Nigerians abroad. Pay by card in USD, receive a full LandGuard certificate.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
