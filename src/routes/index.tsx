import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, ArrowRight, MapPin } from "lucide-react";
import {
  profile,
  about,
  experience,
  gallery,
  equipment,
  heroImage,
} from "@/data/portfolio";
import { Lightbox } from "@/components/Lightbox";

export const Route = createFileRoute("/")({
  component: Portfolio,
});


function Portfolio() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-lg tracking-wide">
            Evan Kelly
          </a>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.resumeUrl}
            className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition hover:text-foreground md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </div>
      </header>

      {/* Intro */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
              Photographer · Second Shooter
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </p>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Available to assist, shadow, and second-shoot weddings alongside experienced
              photographers and videographers.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition hover:bg-foreground/85"
              >
                View My Work
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition hover:bg-foreground hover:text-background"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="relative overflow-hidden">
              <img
                src={heroImage}
                alt="Featured photograph by Evan Kelly"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-border/60 bg-secondary/40">
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

      {/* Experience */}
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

      {/* Work */}
      <section id="work" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Selected Work
              </p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">A small edit.</h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Click any image to view larger.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative block overflow-hidden bg-muted text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Open ${img.title}`}
              >
                <img
                  src={img.src}
                  alt={`${img.title} — ${img.caption ?? img.category}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                  <div>
                    <p className="font-serif text-lg text-white">{img.title}</p>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                      {img.category}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
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

      {/* Contact */}
      <section id="contact" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-accent-foreground">
                Contact
              </p>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl">
                Have a wedding coming up?
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
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
                    href={`tel:${profile.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-3 transition hover:text-accent-foreground"
                  >
                    <Phone className="h-4 w-4" /> {profile.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 transition hover:text-accent-foreground"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={profile.resumeUrl}
                    className="inline-flex items-center gap-3 transition hover:text-accent-foreground"
                  >
                    <Download className="h-4 w-4" /> Download resume (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Evan Kelly Photography</p>
          <p className="uppercase tracking-[0.2em]">Atlantic Highlands, NJ</p>
        </div>
      </footer>

      <Lightbox
        images={gallery}
        index={lightbox}
        onClose={() => setLightbox(null)}
        onNavigate={setLightbox}
      />
    </div>
  );
}
