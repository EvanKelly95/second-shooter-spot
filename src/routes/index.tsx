import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  profile,
  about,
  experience,
  gallery,
  equipment,
  heroImage,
} from "@/data/portfolio";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

export function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <section id="top" className="relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(176,104,63,0.22),transparent_32%),linear-gradient(135deg,rgba(19,14,12,0.96),rgba(36,27,22,0.84)_48%,rgba(16,13,12,0.98))]" />
        <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 py-12 md:grid-cols-[0.88fr_1.12fr] md:px-10 lg:px-14">
          <div className="z-10 max-w-xl py-8">
            <p className="text-xs uppercase tracking-[0.42em] text-accent">
              Photographer · Second Shooter
            </p>
            <h1 className="mt-7 font-serif text-6xl leading-[0.95] text-primary md:text-8xl">
              {profile.name}
            </h1>
            <p className="mt-6 flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              <MapPin className="h-4 w-4 text-accent" /> {profile.location}
            </p>
            <p className="mt-10 max-w-lg text-xl leading-relaxed text-foreground/86">
              Available to assist, shadow, and second-shoot weddings alongside experienced
              photographers and videographers.
            </p>
            <div className="mt-10 h-px w-28 bg-accent" />
          </div>

          <div className="relative z-0">
            <img
              src={heroImage}
              alt="Featured photograph by Evan Kelly"
              className="mx-auto max-h-[82vh] w-full object-contain shadow-[0_34px_90px_rgba(0,0,0,0.38)]"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border/60 bg-secondary/35">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:py-28">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">About</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">A steady hand on the day.</h2>
            <dl className="mt-8 space-y-3 text-sm">
              <div className="flex justify-between border-b border-border/60 pb-2">
                <dt className="text-muted-foreground">Age</dt>
                <dd>{profile.age}</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <dt className="text-muted-foreground">Based in</dt>
                <dd>{profile.location}</dd>
              </div>
              <div className="flex justify-between border-b border-border/60 pb-2">
                <dt className="text-muted-foreground">Transportation</dt>
                <dd>{profile.transportation}</dd>
              </div>
            </dl>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:col-span-2">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Experience
              </p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">Where I've worked.</h2>
            </div>
            <div className="md:col-span-2">
              <ul className="divide-y divide-border/60">
                {experience.map((e, i) => (
                  <li key={i} className="grid gap-2 py-6 md:grid-cols-[1fr_auto] md:gap-8">
                    <div>
                      <h3 className="font-serif text-xl">{e.role}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {e.description}
                      </p>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground md:text-right">
                      {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-border/60 bg-secondary/35">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28 lg:px-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
              Selected Work
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">Full-frame previews.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              A clean edit of the full photos, shown without hidden crops, titles, or extra clicks.
            </p>
          </div>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.map((img, i) => (
              <figure
                key={i}
                className="mb-5 break-inside-avoid overflow-hidden bg-card/70 p-2 shadow-[0_22px_60px_rgba(0,0,0,0.18)] ring-1 ring-border/70"
              >
                <img
                  src={img.src}
                  alt={img.caption ?? img.category}
                  loading="lazy"
                  className="h-auto w-full object-contain"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Equipment
              </p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">What I bring.</h2>
            </div>
            <div className="md:col-span-2">
              <dl className="grid gap-8 sm:grid-cols-2">
                {equipment.map((cat) => (
                  <div key={cat.label}>
                    <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {cat.label}
                    </dt>
                    <dd className="mt-3 space-y-1 text-sm">
                      {cat.items.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-border/60 bg-secondary/35">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Have a wedding coming up?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              If you're a lead photographer or videographer looking for a reliable second
              shooter or assistant, I'd love to hear about your upcoming dates. Happy to
              travel from the Jersey Shore area.
            </p>

            <ul className="mt-10 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-3 transition hover:text-accent-foreground"
                >
                  <Mail className="h-4 w-4" /> {profile.email}
                </a>
              </li>
              <li>
                <a
                  href="tel:9088926802"
                  className="inline-flex items-center gap-3 transition hover:text-accent-foreground"
                >
                  <Phone className="h-4 w-4" /> {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Evan Kelly Photography</p>
          <p className="uppercase tracking-[0.2em]">Atlantic Highlands, NJ</p>
        </div>
      </footer>
    </div>
  );
}
