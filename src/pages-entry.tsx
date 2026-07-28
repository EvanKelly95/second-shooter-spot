import { StrictMode, type ReactNode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Mail, MapPin, Phone } from "lucide-react";

import "./styles.css";
import { about, equipment, experience as existingExperience, profile } from "./data/portfolio";

type Page = "photography" | "cinematography" | "about" | "contact";

const basePath = import.meta.env.BASE_URL;
const asset = (path: string) => `${basePath}${path}`;

const navItems: { label: string; page: Page; href: string }[] = [
  { label: "Photography", page: "photography", href: "photography/" },
  { label: "Cinematography", page: "cinematography", href: "cinematography/" },
  { label: "About Me", page: "about", href: "about/" },
  { label: "Contact Me", page: "contact", href: "contact/" },
];

const photoCollections = [
  {
    name: "Himali & Brian",
    kind: "Courthouse wedding",
    images: ["himali-brian-01.jpg", "himali-brian-02-crop.jpg", "himali-brian-03-crop.jpg", "himali-brian-04.jpg", "himali-brian-05.jpg"],
  },
  {
    name: "Family Portraits",
    kind: "Natural-light family session",
    images: ["family-01.jpg", "family-02.jpg", "family-03.jpg", "family-04.jpg"],
  },
];

const videos = [
  { title: "Please You Music Video", source: "please-you", description: "A featured music video presented as a web-optimized portfolio cut." },
  { title: "Mad Times Music Video", source: "mad-times", description: "A narrative-forward music video with an emphasis on energy, scene coverage, and editing flow." },
  { title: "Experiment 626 Music Video", source: "experiment-626", description: "A stylized music video focused on visual rhythm, performance coverage, and a polished final edit." },
  { title: "Chrisean Rock Promo Video", source: "chrisean-promo", description: "A short-form promotional edit built around pace, personality, and immediate impact." },
];

const experience = [
  ...existingExperience,
  {
    role: "Freelance",
    company: "Photo, film, and post-production",
    period: "Ongoing",
    description: "I have shot 50+ music videos, photographed artist events, family portraits, and courthouse weddings, and edited for large YouTubers and content creators. My editing work includes full-length YouTube films, shaping 40+ hours of raw footage into focused 30-45 minute final films.",
  },
];

function currentPage(): Page {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("cinematography")) return "cinematography";
  if (path.includes("about")) return "about";
  if (path.includes("contact")) return "contact";
  return "photography";
}

function Layout({ page, children }: { page: Page; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#17110e]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
          <a href={basePath} className="font-serif text-2xl leading-none tracking-[0.04em] text-primary md:text-3xl">
            Evan Kelly
          </a>
          <nav className="flex items-center gap-3 overflow-x-auto text-[0.68rem] uppercase tracking-[0.16em] md:gap-6 md:text-xs" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.page} href={asset(item.href)} className={`whitespace-nowrap transition ${page === item.page ? "text-[#e3a073]" : "text-[#eee4d8]/68 hover:text-[#eee4d8]"}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-white/10 bg-[#100c0a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-9 text-sm text-[#eee4d8]/70 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="font-serif text-xl text-[#eee4d8]">Evan Kelly</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a className="inline-flex items-center gap-2 hover:text-[#e3a073]" href={`tel:${profile.phone.replace(/\D/g, "")}`}><Phone className="size-4" /> {profile.phone}</a>
            <a className="inline-flex items-center gap-2 hover:text-[#e3a073]" href={`mailto:${profile.email}`}><Mail className="size-4" /> {profile.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="max-w-2xl">
    <p className="text-xs uppercase tracking-[0.28em] text-[#e3a073]">{eyebrow}</p>
    <h1 className="mt-4 font-serif text-5xl leading-[0.92] text-primary sm:text-6xl">{title}</h1>
    {copy && <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{copy}</p>}
  </div>;
}

function GearList() {
  return <div className="grid gap-6 border-y border-white/10 py-8 sm:grid-cols-2 lg:grid-cols-5">
    {equipment.map((group) => <div key={group.label}>
      <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[#e3a073]">{group.label}</p>
      <div className="mt-3 space-y-1 text-sm leading-relaxed text-[#eee4d8]/84">{group.items.map((item) => <p key={item}>{item}</p>)}</div>
    </div>)}
  </div>;
}

function PhotographyPage() {
  return <Layout page="photography">
    <section className="border-b border-white/10 bg-[#1a120f]">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="overflow-hidden bg-[#100c0a]"><img src={asset("portfolio/himali-brian-05.jpg")} alt="Wedding portrait by Evan Kelly" className="h-auto max-h-[78svh] w-full object-contain" /></div>
        <div className="mt-8 max-w-2xl"><p className="text-xs uppercase tracking-[0.3em] text-[#e3a073]">Wedding & portrait photography</p><h1 className="mt-5 font-serif text-6xl leading-[.85] text-primary sm:text-8xl">Honest moments, beautifully held.</h1><p className="mt-6 max-w-lg leading-relaxed text-[#eee4d8]/82">A growing collection of intimate wedding, portrait, and family work from around New Jersey.</p></div>
      </div>
    </section>
    {photoCollections.map((collection) => <section key={collection.name} className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-2 md:flex-row md:items-end md:justify-between"><div><p className="text-xs uppercase tracking-[0.28em] text-[#e3a073]">Selected work</p><h2 className="mt-3 font-serif text-5xl text-primary">{collection.name}</h2></div><p className="text-sm text-muted-foreground">{collection.kind}</p></div>
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">{collection.images.map((image, index) => <figure key={image} className="mb-5 break-inside-avoid overflow-hidden bg-[#251915] p-2"><img loading={index > 1 ? "lazy" : "eager"} className="h-auto w-full" src={asset(`portfolio/${image}`)} alt={`${collection.name} photograph ${index + 1}`} /></figure>)}</div>
      </div>
    </section>)}
    <section className="border-t border-white/10 bg-[#211713]"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="grid min-h-64 place-items-center border border-dashed border-[#e3a073]/35 bg-[#17100d] p-8 text-center"><div><p className="text-xs uppercase tracking-[0.28em] text-[#e3a073]">Next collection</p><h2 className="mt-3 font-serif text-5xl text-primary">Sam & Ruby</h2><p className="mt-4 text-sm text-muted-foreground">Photos coming soon.</p></div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><SectionHeading eyebrow="Equipment" title="What I bring." /><div className="mt-10"><GearList /></div></section>
  </Layout>;
}

function PortfolioVideo({ source, title, poster }: { source: string; title: string; poster?: string }) {
  const player = useRef<HTMLVideoElement>(null);
  const resumeAt = useRef(0);
  const resumePlaying = useRef(false);
  const [quality, setQuality] = useState<"480" | "720">("720");

  useEffect(() => {
    player.current?.load();
  }, [quality]);

  const changeQuality = (nextQuality: "480" | "720") => {
    const element = player.current;
    resumeAt.current = element?.currentTime ?? 0;
    resumePlaying.current = Boolean(element && !element.paused);
    setQuality(nextQuality);
  };

  return <div className="overflow-hidden bg-black shadow-2xl">
    <video ref={player} aria-label={title} className="aspect-video w-full" controls controlsList="nodownload" poster={poster ? asset(poster) : undefined} preload="metadata" onLoadedMetadata={(event) => { event.currentTarget.currentTime = resumeAt.current; if (resumePlaying.current) void event.currentTarget.play(); }}>
      <source src={asset(`cinematography/${source}-${quality}.mp4`)} type="video/mp4" />
    </video>
    <div className="flex items-center justify-end gap-3 border-t border-white/10 bg-[#17110e] px-4 py-3 text-xs text-[#eee4d8]/70">
      <label htmlFor={`${source}-quality`} className="uppercase tracking-[.15em]">Quality</label>
      <select id={`${source}-quality`} value={quality} onChange={(event) => changeQuality(event.target.value as "480" | "720")} className="bg-transparent text-sm text-[#eee4d8] outline-none">
        <option value="720">720p</option>
        <option value="480">480p</option>
      </select>
    </div>
  </div>;
}

function CinematographyPage() {
  return <Layout page="cinematography"><section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><SectionHeading eyebrow="Cinematography" title="Films made to move." copy="Music, live moments, and story-driven work. Each piece is selected for its editing rhythm, visual coverage, and energy." /><div className="mt-14 grid gap-12">{videos.map((video, index) => <article key={video.title} className="grid gap-6 border-t border-white/10 pt-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start"><PortfolioVideo source={video.source} title={video.title} poster={video.source === "please-you" ? "cinematography/pleaseyou-poster.jpg" : undefined} /><div><p className="text-xs uppercase tracking-[0.25em] text-[#e3a073]">Video work {String(index + 1).padStart(2, "0")}</p><h2 className="mt-3 font-serif text-4xl text-primary">{video.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{video.description}</p></div></article>)}</div></section><section className="border-t border-white/10 bg-[#211713]"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8"><GearList /></div></section></Layout>;
}

function AboutPage() {
  return <Layout page="about"><section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><SectionHeading eyebrow="About Evan" title="A steady hand on a fast-moving day." /><div className="mt-14 grid gap-10 lg:grid-cols-[.85fr_1.15fr]"><div className="flex aspect-[4/5] items-end bg-[radial-gradient(circle_at_50%_18%,rgba(227,160,115,.36),transparent_24%),linear-gradient(150deg,#2d1c16,#120e0c)] p-8"><p className="text-xs uppercase tracking-[.28em] text-[#e3a073]">Portrait coming soon</p></div><div className="space-y-6 text-lg leading-relaxed text-[#eee4d8]/84">{about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<div className="grid gap-3 border-y border-white/10 py-6 text-sm sm:grid-cols-3"><p><span className="block text-xs uppercase tracking-[.18em] text-[#e3a073]">Based in</span><span className="mt-2 block">{profile.location}</span></p><p><span className="block text-xs uppercase tracking-[.18em] text-[#e3a073]">Experience</span><span className="mt-2 block">10+ years</span></p><p><span className="block text-xs uppercase tracking-[.18em] text-[#e3a073]">Availability</span><span className="mt-2 block">NJ + travel</span></p></div></div></div></section><section className="border-t border-white/10 bg-[#211713]"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><p className="text-xs uppercase tracking-[.28em] text-[#e3a073]">Experience</p><h2 className="mt-3 font-serif text-5xl text-primary">Where I have worked.</h2><ul className="mt-10 divide-y divide-white/10">{experience.map((item) => <li key={item.role} className="grid gap-4 py-7 md:grid-cols-[1fr_180px]"><div><h3 className="font-serif text-3xl text-primary">{item.role}</h3><p className="mt-1 text-sm text-[#e3a073]">{item.company}</p><p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">{item.description}</p></div><p className="text-sm text-muted-foreground md:text-right">{item.period}</p></li>)}</ul></div></section><section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><SectionHeading eyebrow="Equipment" title="What I bring." /><div className="mt-10"><GearList /></div></section></Layout>;
}

function ContactPage() {
  return <Layout page="contact"><section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><SectionHeading eyebrow="Work together" title="Looking for my first five weddings." copy="I am opening a limited introductory offer for couples who want thoughtful wedding photo or video coverage on a realistic budget." /><div className="mt-12 grid gap-5 lg:grid-cols-[.8fr_1.2fr]"><div className="bg-[#e3a073] p-8 text-[#1b120e]"><p className="text-xs uppercase tracking-[.25em]">Introductory wedding rate</p><p className="mt-4 font-serif text-6xl leading-none">$800–$950</p><p className="mt-5 max-w-sm text-sm leading-relaxed">For the first five weddings I book. Exact pricing is based on the coverage time, travel, and needs of your day.</p></div><div className="border border-white/10 bg-[#211713] p-8"><p className="text-xs uppercase tracking-[.25em] text-[#e3a073]">For studios and lead creatives</p><h2 className="mt-3 font-serif text-4xl text-primary">Second shooter support for photo or video.</h2><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">Available to assist, shadow, or second-shoot weddings alongside photographers and videographers. I work calmly, take direction well, and show up ready to support your workflow.</p></div></div></section><section className="border-t border-white/10 bg-[#211713]"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="grid gap-8 lg:grid-cols-2"><Deliverables title="Photography deliverables" items={["Wedding-day coverage tailored to your timeline", "A curated gallery of edited high-resolution images", "Private online gallery for viewing and downloading", "A planning conversation before the wedding day"]} /><Deliverables title="Video deliverables" items={["A 3–10 minute highlight film", "All footage captured from the wedding day", "A planning conversation to align on the feel of the film", "Delivery in a private online gallery"]} /></div></div></section><section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><div className="grid gap-8 border-y border-white/10 py-12 md:grid-cols-[1fr_auto]"><div><p className="text-xs uppercase tracking-[.28em] text-[#e3a073]">Get in touch</p><h2 className="mt-3 font-serif text-5xl text-primary">Tell me about your date.</h2><p className="mt-5 max-w-xl text-muted-foreground">Whether you are planning a wedding or staffing one, email or call with the date, location, and the kind of support you need.</p></div><div className="flex flex-col justify-center gap-4 text-sm"><a className="inline-flex items-center gap-3 hover:text-[#e3a073]" href={`mailto:${profile.email}`}><Mail className="size-5" />{profile.email}</a><a className="inline-flex items-center gap-3 hover:text-[#e3a073]" href={`tel:${profile.phone.replace(/\D/g, "")}`}><Phone className="size-5" />{profile.phone}</a><span className="inline-flex items-center gap-3 text-muted-foreground"><MapPin className="size-5" />{profile.location}</span></div></div></section></Layout>;
}

function Deliverables({ title, items }: { title: string; items: string[] }) { return <article className="border border-white/10 bg-[#17110e] p-8"><p className="text-xs uppercase tracking-[.25em] text-[#e3a073]">Deliverables</p><h2 className="mt-3 font-serif text-4xl text-primary">{title}</h2><ul className="mt-7 space-y-4">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#eee4d8]/80"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#e3a073]" />{item}</li>)}</ul></article>; }

function ContactPageV2() {
  return <Layout page="contact">
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
      <div className="grid gap-8 border-y border-white/10 py-12 md:grid-cols-[1fr_auto]">
        <div><p className="text-xs uppercase tracking-[.28em] text-[#e3a073]">Get in touch</p><h1 className="mt-3 font-serif text-5xl text-primary">Tell me about your date.</h1><p className="mt-5 max-w-xl text-muted-foreground">Whether you are planning a wedding or staffing one, email or call with the date, location, and the kind of support you need.</p></div>
        <div className="flex flex-col justify-center gap-4 text-sm"><a className="inline-flex items-center gap-3 hover:text-[#e3a073]" href={`mailto:${profile.email}`}><Mail className="size-5" />{profile.email}</a><a className="inline-flex items-center gap-3 hover:text-[#e3a073]" href={`tel:${profile.phone.replace(/\D/g, "")}`}><Phone className="size-5" />{profile.phone}</a><span className="inline-flex items-center gap-3 text-muted-foreground"><MapPin className="size-5" />{profile.location}</span></div>
      </div>
    </section>
    <section className="border-t border-white/10 bg-[#211713]"><div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><SectionHeading eyebrow="Wedding coverage" title="Looking for my first five weddings." copy="A limited introductory offer for couples who want thoughtful wedding photo or video coverage on a realistic budget." /><div className="mt-12 grid gap-8"><div className="bg-[#e3a073] p-8 text-[#1b120e]"><p className="text-xs uppercase tracking-[.25em]">Introductory wedding rate</p><p className="mt-4 font-serif text-6xl leading-none">$800-$950</p><p className="mt-5 max-w-xl text-sm leading-relaxed">For the first five weddings I book. Exact pricing is based on the coverage time, travel, and needs of your day.</p></div><div className="grid gap-8 lg:grid-cols-2"><Deliverables title="Photography deliverables" items={["Wedding-day coverage tailored to your timeline", "A curated gallery of edited high-resolution images", "Private online gallery for viewing and downloading", "A planning conversation before the wedding day"]} /><Deliverables title="Video deliverables" items={["A 3-10 minute highlight film", "All footage captured from the wedding day", "A planning conversation to align on the feel of the film", "Delivery in a private online gallery"]} /></div></div></div></section>
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"><p className="text-xs uppercase tracking-[.28em] text-[#e3a073]">For studios and lead creatives</p><h2 className="mt-3 font-serif text-5xl text-primary">Second shooter support for photo or video.</h2><p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">Available to assist, shadow, or second-shoot weddings alongside photographers and videographers. I work calmly, take direction well, and show up ready to support your workflow.</p></section>
  </Layout>;
}

function App() { const page = currentPage(); if (page === "cinematography") return <CinematographyPage />; if (page === "about") return <AboutPage />; if (page === "contact") return <ContactPageV2 />; return <PhotographyPage />; }

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
