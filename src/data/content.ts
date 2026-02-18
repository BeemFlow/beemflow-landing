// --- Types ---

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  timeline: string;
  price: string;
  description: string;
  deliverables?: string[];
  endState?: string;
}

export interface Service {
  icon: string;
  label: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  label: string;
  company: string;
  role: string;
  situation: string;
  result: string;
  metrics: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface FAQ {
  q: string;
  a: string;
}

// --- Proof Bar ---

export const PROOF_CLIENTS = [
  "HyperPlay",
  "Travel Money",
  "Valist (acquired)",
  "2U",
  "Ethos.io",
  "Highmark",
];

export const PROOF_STATS = [
  { num: "15+", label: "products shipped to production" },
  { num: "10+", label: "years building together" },
  { num: "1", label: "company founded & exited" },
];

// --- How We Work: Three-Step Journey ---

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Milestone Blueprint",
    subtitle: "Strategy Sprint",
    timeline: "1\u20132 weeks",
    price: "$8K",
    description:
      "We map your users, core jobs, and constraints into a story\u2011mapped v1 that is actually buildable.",
    deliverables: [
      "A release\u2011by\u2011release story map",
      "Technical architecture and stack decisions",
      "A clear \u201Claunch milestone\u201D tied to a business goal (raise, sell, or onboard first customers)",
    ],
    endState:
      "Structured so both human engineers and AI agents can execute. You can build with us or any team.",
  },
  {
    number: "02",
    title: "Launch Build",
    subtitle: "",
    timeline: "6\u20138 weeks",
    price: "From $40K",
    description:
      "We take the Blueprint and ship a market\u2011ready v1: live in production, demoable, with analytics wired and real users hitting it.",
    deliverables: [
      "We use AI coding agents for repetitive implementation while we own architecture, product decisions, and quality",
      "Weekly releases, real users, real data",
    ],
    endState:
      "End state: deployed product, real users, analytics wired, a polished demo script, and a short technical appendix for your next investor update.",
  },
  {
    number: "03",
    title: "Scale & Stewardship",
    subtitle: "Optional",
    timeline: "Ongoing",
    price: "From $8K/mo",
    description:
      "Once you\u2019re live, we help you grow and transition:",
    deliverables: [
      "Hire and onboard your first engineers",
      "Automate key ops around the product (alerts, reporting, workflows)",
      "Transition cleanly to an internal team, or keep us on as fractional product & engineering leadership",
    ],
    endState:
      "You keep everything: code, infra, automations, documentation.",
  },
];

// --- Services ---

export const SERVICES: Service[] = [
  {
    icon: "\u{1F680}",
    label: "Core",
    title: "AI\u2011Accelerated Product Engineering",
    description:
      "From fuzzy idea to market\u2011ready v1 with real users, typically in 6\u20118 weeks once scope is locked. One team that owns product, engineering, and security, powered by our BeemSpec coordination system.",
  },
  {
    icon: "\u{1F512}",
    label: "Built\u2011in",
    title: "Security & Infrastructure",
    description:
      "Security\u2011minded architecture and hardening by default. Deeper pentesting and cryptographic design when the product warrants it.",
  },
  {
    icon: "\u26A1",
    label: "Expansion",
    title: "Operations Automation",
    description:
      "Once the product works, we automate the work around it: reporting, alerts, back\u2011office workflows, integrations between your tools. Built on n8n and open\u2011source infrastructure you own.",
  },
  {
    icon: "\u{1F91D}",
    label: "Upsell",
    title: "Fractional CTO",
    description:
      "Ongoing technical strategy, architecture decisions, and engineering team building once you\u2019re past v1.",
  },
];

// --- Case Studies ---

export const CASE_STUDIES: CaseStudy[] = [
  {
    label: "0\u21921 Product",
    company: "Travel Money",
    role: "CTO",
    situation:
      "Non-technical founder had a fintech thesis around VAT export arbitrage, seed funding, and French customs regulations to navigate\u2014but no product and no tech team.",
    result:
      "Built full iOS application with AI-powered product detection, payment processing, and French customs integration (PABLO/Article 275 CGI). Sole technical leadership from day one.",
    metrics: [
      "Sole CTO \u2014 entire technical operation",
      "iOS app + AI detection + payments + customs integration",
    ],
  },
  {
    label: "Founded & Exited",
    company: "Valist \u2192 HyperPlay",
    role: "Co-founders",
    situation:
      "Two engineers, no funding, one thesis: build a developer-first software distribution platform.",
    result:
      "Built the core product, raised pre-seed from 2048 Ventures, led the full acquisition process\u2014due diligence, negotiations, and integration into HyperPlay.",
    metrics: [
      "2 founders \u2192 pre-seed raise \u2192 acquisition",
      "Product integrated into platform with 100K+ users",
    ],
  },
  {
    label: "Scale",
    company: "HyperPlay Labs",
    role: "Head of Product",
    situation:
      "Post-acquisition, HyperPlay needed to ship a desktop gaming platform and raise a Series A. Fast.",
    result:
      "Led product development and security across Windows, Mac, Linux, and Steam Deck. Established partnerships, contributed to fundraising strategy. Now serving as Strategic Advisors.",
    metrics: [
      "0 \u2192 100K+ downloads",
      "$12M Series A raised",
      "Transitioned to Strategic Advisors",
    ],
  },
  {
    label: "Education at Scale",
    company: "2U FinTech Bootcamp",
    role: "Curriculum Engineering",
    situation:
      "2U needed production-quality full-stack and distributed systems curriculum that could scale across their university partner network.",
    result:
      "Authored comprehensive curriculum covering distributed systems, cryptography, and full-stack development. Built production apps used as teaching tools across 60+ universities.",
    metrics: [
      "0 \u2192 60+ university deployments",
      "Columbia, Rice, University of Toronto",
    ],
  },
];

// --- Testimonials ---
// [TODO] Get real quotes. Priority order:
//   1. Travel Money founder
//   2. HyperPlay / 2048 Ventures
//   3. Any other client or collaborator

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "[TODO: Get quote from Travel Money founder. Prompt: 'What was it like going from no technical team to a working product? What would you tell another founder about the experience?']",
    name: "[TODO: founder first + last name]",
    role: "Founder",
    company: "Travel Money",
  },
  {
    quote:
      "[TODO: Get quote from HyperPlay team or 2048 Ventures. Prompt: 'What stood out about working with Alec and Zach during the Valist acquisition / HyperPlay build?']",
    name: "[TODO: name]",
    role: "[TODO: role]",
    company: "[TODO: HyperPlay or 2048 Ventures]",
  },
];

// --- FAQ ---

export const FAQS: FAQ[] = [
  {
    q: "Who is this for?",
    a: "Funded SaaS and AI\u2011product founders (pre\u2011seed to Series A) who need a real v1, not just a prototype, and don\u2019t have senior product + engineering in\u2011house.",
  },
  {
    q: "How are you faster than a typical agency?",
    a: "We only take a few builds at a time, we\u2019re the ones actually doing the work, and we use BeemSpec to coordinate AI agents instead of handing tasks to layers of juniors. That lets us commit to aggressive timelines without playing games on quality.",
  },
  {
    q: "Do I own everything you build?",
    a: "Yes. Code, infra, automations, and documentation are all yours. We build on open\u2011source stacks so you\u2019re never locked into us or a vendor.",
  },
  // Equity FAQ removed from public site. Keep as internal lever only.
];

// --- About ---

export const CREDENTIALS = [
  {
    label: "2nd Place \u2014 HACKtheMACHINE at MIT",
    href: "https://www.cma.fraunhofer.org/en/News/Fraunhofer_places_second_in_US_Navys_HackTheMachine_Cyber_Competition.html",
  },
  {
    label: 'IPFS "Building Web3" Series',
    href: "https://blog.ipfs.tech/2021-12-07-building-web3-valist/",
  },
  {
    label: "Nasdaq",
    href: "https://www.nasdaq.com/articles/more-retailers-are-preparing-to-accept-crypto%3A-why-you-should-buy-it-now",
  },
  {
    label: "Coinbase Bytes",
    href: "https://www.coinbase.com/bytes/archive/themes-to-watch-in-2024",
  },
  {
    label: "Central Penn Business Journal",
    href: "https://www.cpbj.com/its-still-reeds-vision-were-just-living-in-it/",
  },
];
