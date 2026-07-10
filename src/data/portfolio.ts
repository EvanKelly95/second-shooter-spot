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
  "I bring 10+ years of photography and videography experience to fast-moving, people-focused work. I am comfortable taking direction, matching a lead photographer's pace, and supporting the day without getting in the way.",
  "If a specific setup would help me serve your workflow better, I am open to investing in additional equipment. I am also happy to share videography work if you have a need for wedding video support.",
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
  { label: "Camera Body", items: ["Sony a7S III", "Sony a7S II"] },
  { label: "Lens", items: ["Sigma 24-70mm f/2.8", "Sony 35mm f/1.8"] },
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
