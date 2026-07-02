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
    slug: "editorial-fashion-store",
    title: "Editorial Fashion Store",
    category: "Web",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    role: "Full-stack Dev",
    year: "2024",
    description: "E-commerce storefront with editorial art direction and fast checkout.",
    extra: "Shopify · Custom theme",
    iconColor: "#EC4899",
    client: "Maison Veda",
    date: "August 2024",
    shortBio:
      "A bespoke Shopify storefront built to reflect the brand's editorial identity — high-fashion photography, minimal UI, and a seamless checkout experience optimised for mobile.",
    process:
      "The creative brief was clear: feel like a magazine, convert like a store. We customised a Shopify theme from the ground up, building a full-screen lookbook landing page, product pages with editorial layouts, and a cart drawer that stays out of the way until needed. Performance was a priority — Lighthouse scores above 90 across the board.",
    liveUrl: "https://example.com",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1400&q=85",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&q=85",
    ],
  },
  {
    id: 3,
    slug: "content-planning-management-system",
    title: "Content Planning & Management System",
    category: "Social",
    badge: "Social Media Management",
    image: "/content-planning-dashboard.png",
    role: "Social Media Manager",
    year: "2022 – Present",
    description: "A structured content calendar and workflow system used to plan, schedule, and manage multi-platform social media content.",
    extra: "Notion · Content Calendar",
    iconColor: "#F59E0B",
    client: "Aura Living",
    date: "2022 – Present",
    shortBio:
      "A structured content planning and workflow system built to manage multi-platform social media content at scale — covering ideation, scheduling, visual planning, and performance tracking across Instagram and TikTok.",
    process:
      "The system was designed around a single Notion workspace: a master content calendar with status columns, a moodboard grid for visual consistency checks, and a weekly to-do checklist for batch production days. Templates reduced time-to-publish significantly, and a monthly review cadence kept strategy aligned with performance data. The result was a repeatable, low-friction workflow that scaled across multiple brand accounts.",
    images: [
      "/content-planning-dashboard.png",
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1400&q=85",
      "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=1400&q=85",
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
