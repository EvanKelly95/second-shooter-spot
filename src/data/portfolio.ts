// Edit this file to update all content across the site.

const portfolioImage = (fileName: string) => `${import.meta.env.BASE_URL}portfolio/${fileName}`;

export const profile = {
  name: "Evan Kelly",
  title: "Photographer",
  location: "Atlantic Highlands, NJ",
  age: 31,
  transportation: "Reliable",
  email: "iamevankelly@gmail.com",
  phone: "908 892 6802 (call or text)",
  instagram: "https://instagram.com/your-handle", // replace
  socials: [
    { label: "Instagram", href: "https://instagram.com/your-handle" },
    { label: "Portfolio", href: "https://your-portfolio.com" },
  ],
  resumeUrl: "/resume.pdf", // drop your PDF into /public as resume.pdf
};

export const about = [
  "I'm a photographer based in Atlantic Highlands, NJ, looking to assist, shadow, and second-shoot with experienced wedding photographers and videographers. My goal is straightforward: support your workflow, learn from how you work, and contribute without getting in the way.",
  "I've spent years photographing people in fast-moving, high-pressure environments — from cruise ship galas to seasonal senior portrait work with strict production standards. I show up early, I take direction well, and I understand that on a wedding day the lead's vision is the only one that matters.",
  "I'm reliable, punctual, and easy to work with. I have my own transportation and gear, and I'm comfortable with long days, tight timelines, and last-minute changes.",
];

export const experience = [
  {
    role: "Senior Photographer",
    company: "LORS Photography",
    period: "2016–2018 & 2023–2026",
    description:
      "Seasonal work, roughly 8 months per season. Worked one-on-one with high school seniors, posing them for 10–15 yearbook portraits per session. Balanced strict yearbook standards with creative variations, while keeping every session efficient and on schedule.",
  },
  {
    role: "Photographer",
    company: "Holland America Cruise Line",
    period: "2018",
    description:
      "Covered Gala dinners table-to-table, capturing group photos in a dense, low-light dining room. Between services, worked the ship shooting candid moments and offering portraits to guests — long days, constant reading of the room, and a lot of quick rapport with strangers.",
  },
  {
    role: "Related Experience",
    company: "Events, portraits & production",
    period: "Ongoing",
    description:
      "Event and candid coverage, on-location portraits, customer-facing work, production assistance, and post-processing in Adobe Lightroom and Photoshop. Comfortable working under pressure and adapting to a lead's style and workflow.",
  },
];

export const gallery = [
  {
    title: "Garden Portrait",
    category: "Wedding",
    caption: "Soft outdoor portrait with natural framing.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("DSC07696.jpg"),
  },
  {
    title: "Ceremony Steps",
    category: "Wedding",
    caption: "A quiet directed moment on location.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("DSC07462.jpg"),
  },
  {
    title: "Balcony Portrait",
    category: "Wedding",
    caption: "Natural light portrait with architectural framing.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("DSC07675.jpg"),
  },
  {
    title: "Bride Portrait",
    category: "Wedding",
    caption: "Candid-feeling portrait between formal moments.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("DSC07670.jpg"),
  },
  {
    title: "Couple Moment",
    category: "Wedding",
    caption: "A relaxed couple portrait outdoors.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("DSC07685.jpg"),
  },
  {
    title: "Bridge Walk",
    category: "Family",
    caption: "Documentary-style family movement.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("Bridge-12.jpg"),
  },
  {
    title: "Family Portrait",
    category: "Family",
    caption: "Warm family portrait with natural light.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("Bridge-24.jpg"),
  },
  {
    title: "Bridge Portrait",
    category: "Family",
    caption: "Guided family portrait on location.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("Bridge-15.jpg"),
  },
  {
    title: "Bridge Candid",
    category: "Family",
    caption: "A natural interaction during a portrait session.",
    camera: "Sony a7S III",
    lens: "24-70mm",
    src: portfolioImage("Bridge-19.jpg"),
  },
];

export const equipment = [
  { label: "Camera Bodies", items: ["Sony a7S III", "Sony a7S II"] },
  { label: "Lenses", items: ["Sigma 24-70mm f/2.8", "Sony 35mm f/1.8"] },
  { label: "Lighting", items: ["On-camera light"] },
  {
    label: "Other",
    items: [
      "Zhiyun Crane Plus 3-axis gimbal",
      "Saramonic Ultra 2 wireless mics",
      "Tripod",
    ],
  },
  { label: "Editing", items: ["Adobe Creative Cloud (Lightroom, Photoshop, Premiere)"] },
];

export const heroImage =
  portfolioImage("DSC07696.jpg");
