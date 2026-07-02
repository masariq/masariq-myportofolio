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
      "/design-dev-journal.jpg",
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
  {
    id: 4,
    slug: "tech-startup-campaign",
    title: "Tech Startup Campaign",
    category: "Social",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    role: "Campaign Strategy",
    year: "2024",
    description: "Product launch campaign that drove 3× engagement in two months.",
    extra: "LinkedIn · Meta Ads",
    iconColor: "#8B5CF6",
    client: "Stackly AI",
    date: "February 2024",
    shortBio:
      "A two-month launch campaign for Stackly AI's SaaS product — combining organic thought-leadership content on LinkedIn with targeted Meta ads, resulting in 3× engagement and 1,200 sign-ups.",
    process:
      "The strategy was built around three pillars: educate, demonstrate, convert. We produced a series of LinkedIn carousels explaining the product's core value proposition, short-form video demos for Meta, and a retargeting funnel for warm audiences. Weekly analytics reviews allowed us to shift budget toward what was working fast, keeping CPL well below the target.",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85",
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1400&q=85",
      "https://images.unsplash.com/photo-1553484771-371a605b060b?w=1400&q=85",
    ],
  },
  {
    id: 5,
    slug: "ecommerce-experience",
    title: "E-Commerce Experience",
    category: "Web",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    role: "Web Design · Dev",
    year: "2025",
    description: "Minimal product-first store with seamless mobile checkout flow.",
    extra: "React · Stripe",
    iconColor: "#10B981",
    client: "Timecraft Studio",
    date: "January 2025",
    shortBio:
      "A minimal, product-first online store for Timecraft Studio — a boutique watch accessories brand. The entire experience was designed around reducing friction from first visit to purchase.",
    process:
      "With a very small product catalogue, every pixel needed to earn its place. We stripped the UI down to the essentials: a hero, a product grid, and a single-page checkout powered by Stripe. Mobile performance was the primary constraint — we targeted sub-2s load times and hit them. The result was a 68% mobile conversion uplift in the first month post-launch.",
    liveUrl: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&q=85",
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=1400&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=1400&q=85",
    ],
  },
  {
    id: 6,
    slug: "fb-brand-social-media",
    title: "F&B Brand Social Media",
    category: "Social",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    role: "Content Creator",
    year: "2023",
    description: "Mouth-watering food photography & reels strategy for a local restaurant.",
    extra: "Instagram · Canva",
    iconColor: "#FF5733",
    client: "Warung Senja",
    date: "June 2023",
    shortBio:
      "Social media management for Warung Senja — a local Indonesian restaurant. Transformed their Instagram presence with consistent food photography, Reels, and a brand voice that felt warm and local.",
    process:
      "The challenge was building trust with a local audience while making the food irresistible visually. We shot bi-weekly content batches on-site, maintaining a cohesive warm-toned aesthetic across all posts. Reels featuring behind-the-scenes kitchen footage performed especially well. Within three months, the restaurant saw a measurable uptick in walk-in customers citing Instagram as their discovery channel.",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=85",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=85",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3df1?w=1400&q=85",
    ],
  },
];
