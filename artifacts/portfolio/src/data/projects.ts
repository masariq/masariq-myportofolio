export type Project = {
  id: number;
  slug: string;
  title: string;
  category: "Web" | "Social";
  badge?: string;
  image: string;
  role: string;
  year: string;
  description: string;
  extra: string;
  iconColor: string;
  client: string;
  date: string;
  shortBio: string;
  process: string;
  liveUrl?: string;
  images: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "sudutloka-home-decor-export",
    title: "Sudutloka — Home Decor Export",
    category: "Web",
    image: "/sudutloka.png",
    role: "Web Design · Dev",
    year: "2024 – Present",
    description: "Brand website for a natural home decor export business, built to attract international B2B buyers.",
    extra: "Hostinger Website Builder",
    iconColor: "#A67C52",
    client: "Sudutloka",
    date: "2024 – Present",
    shortBio:
      "Brand website for Sudutloka — an Indonesian natural home décor export business specialising in handwoven rattan and sustainable materials. Built to attract international B2B buyers and showcase the brand's earthy, artisan identity.",
    process:
      "The brief was to communicate craftsmanship and reliability to overseas buyers. We developed a warm, minimal visual language rooted in natural tones — cream, beige, and wood — that reflects the products themselves. The site was built on Hostinger Website Builder for ease of client management, with a collections showcase, ordering guide, and a catalog request flow targeted at wholesale buyers.",
    liveUrl: "https://sudutloka.com",
    images: [
      "/sudutloka.png",
      "/sudutloka-products.png",
      "/sudutloka-collections.png",
      "/sudutloka-contact.png",
    ],
  },
  {
    id: 2,
    slug: "design-dev-journal",
    title: "Design & Dev Journal",
    category: "Web",
    badge: "Blog / Editorial",
    image: "/design-dev-journal.jpg",
    role: "Web Design · Front-end Dev",
    year: "2025",
    description: "An editorial-style blog concept covering web design trends, front-end development tips, and AI-assisted workflow insights...",
    extra: "React · Tailwind",
    iconColor: "#EC4899",
    client: "Design & Dev Journal",
    date: "2025",
    shortBio:
      "An editorial-style blog concept covering web design trends, front-end development tips, and AI-assisted workflow insights — built with a minimalist magazine aesthetic and modern editorial typography.",
    process:
      "The concept was designed to feel like a premium digital magazine: clean white space, bold black headlines, and a layout that lets content breathe. Built with React and Tailwind CSS, the project explores how editorial design principles — borrowed from print — can elevate a web publication. AI-assisted workflows were integrated into the content pipeline to streamline research, drafting, and SEO optimisation.",
    images: [
      "/ddj-img1.jpg",
      "/ddj-img2.jpg",
      "/ddj-img3.jpg",
    ],
  },
  {
    id: 3,
    slug: "content-planning-management-system",
    title: "Content Planning & Management System",
    category: "Social",
    badge: "Social Media Management",
    image: "/content-planning-dashboard.png",
    role: "Social Media Manager · Content Strategist",
    year: "2022 – Present",
    description: "A structured content calendar and workflow system used to plan, schedule, and manage multi-platform social media content.",
    extra: "Notion · Content Calendar",
    iconColor: "#F59E0B",
    client: "Concept / Internal System",
    date: "2022 – Present",
    shortBio:
      "A structured content management workflow designed to plan, organize, and track social media content across multiple platforms. Built to demonstrate a systematic approach to content calendars, campaign planning, and cross-platform consistency — the same workflow used to manage real client accounts across Instagram, TikTok, and Facebook.",
    process:
      "The system was designed around a single Notion workspace: a master content calendar with status columns, a moodboard grid for visual consistency checks, and a weekly to-do checklist for batch production days. Each platform got its own section, with post trackers running from Idea → Draft → Scheduled → Published. Templates reduced time-to-publish significantly, and a monthly review cadence kept strategy aligned with performance data.",
    images: [
      "/content-planning-dashboard.png",
      "/cms-dashboard-home.jpg",
      "/cms-calendar.jpg",
      "/cms-post-tracker.jpg",
      "/cms-platform-breakdown.jpg",
    ],
  },
];
