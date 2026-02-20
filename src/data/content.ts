// --- Types ---

export interface Step {
  title: string;
  subtitle: string;
  timeline: string;
  price: string;
  description: string;
  deliverables?: string[];
  endState?: string | string[];
  callout?: { label: string; text: string };
}

export interface Service {
  icon: string;
  label: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  headline: string;
  role: string;
  resultSummary: string;
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
  { num: "10+", label: "years building together" },
  { num: "15+", label: "products shipped" },
  { num: "1", label: "VC\u2011backed company founded & exited" },
];

// --- How We Work: Three-Step Journey ---

export const STEPS: Step[] = [
  {
    title: "Milestone Blueprint",
    subtitle: "Strategy Sprint",
    timeline: "1\u20132 weeks",
    price: "$8K",
    description:
      "We map your users, core jobs, and constraints into a story\u2011mapped v1 that is actually buildable by real engineers on a real timeline.",
    deliverables: [
      "A release\u2011by\u2011release story map",
      "Technical architecture and stack decisions",
      "A clear \u201Claunch milestone\u201D tied to a business goal (raise, sell, or onboard first customers)",
      "Structured so both human engineers and AI agents can execute",
    ],
    endState: [
      "A buildable v1 plan your board and engineers can\u2019t easily poke holes in",
      "You can build with us or any team",
    ],
    callout: { label: "Launch Build credit: ", text: "If we\u2019re a fit and you roll into the Launch Build within 60 days, we credit the full $8K Blueprint fee toward your build." },
  },
  {
    title: "Launch Build",
    subtitle: "",
    timeline: "6\u20138 weeks",
    price: "From $80K",
    description:
      "We take the Blueprint and ship a market\u2011ready v1 to production: live, demoable, and ready to onboard.",
    deliverables: [
      "AI coding agents for repetitive implementation while we own architecture, product decisions, and quality",
      "Weekly releases so you can see real progress and click through the product early",
      "Analytics, logging, and basic onboarding wired so you can invite users in and see what they actually do",
    ],
    endState: [
      "Deployed product, on your infrastructure",
      "Analytics wired and a coherent on\u2011brand UI",
      "A polished demo script for investor conversations",
      "A short technical appendix for your next investor update",
    ],
    callout: { label: "Milestone overrun protection: ", text: "If we miss your agreed v1 launch by more than 2 weeks for reasons in our control, we eat the overage." },
  },
  {
    title: "Scale & Stewardship",
    subtitle: "Optional",
    timeline: "Ongoing",
    price: "From $8K/mo",
    description:
      "Available once your v1 is live. This is for ongoing leadership and fast iteration on the product we\u2019ve shipped together based on real user feedback, not a net\u2011new product build.",
    deliverables: [
      "Help you define the roles, vet candidates, and onboard your first engineers",
      "Iterate on the live product based on user behavior (small improvements, refining flows)",
      "Guide roadmap, architecture decisions, and smaller improvements to the existing product",
      "When you\u2019re ready for a major new module or product line, we\u2019ll Blueprint and price that as its own sprint",
    ],
    callout: { label: "Love shipping with us?", text: "If you love how we ship together and want us embedded more deeply, we can design an engagement that feels like an internal squad while keeping the same clarity on scope and timelines we use for our builds." },
  },
];

// --- Services ---

export const SERVICES: Service[] = [
  {
    icon: "\u{1F680}",
    label: "Core",
    title: "AI\u2011Accelerated Product Engineering",
    description:
      "From fuzzy idea to market\u2011ready v1 in 6\u20138 weeks once scope is locked. A small senior squad that owns product strategy, UX/UI design, engineering, and security, led by the two founders and powered by our BeemSpec coordination system. We design and build the first version of your product so it\u2019s ready for real users, investor demos, and your next round of conversations.",
  },
  {
    icon: "\u{1F512}",
    label: "Built\u2011in",
    title: "Security & Infrastructure",
    description:
      "Security\u2011minded architecture and hardening by default, with deeper pentesting and cryptographic design when the product warrants it. We set up infrastructure on accounts you own, with logging, monitoring, and basic incident response so your early usage doesn\u2019t turn into a fire drill.",
  },
  {
    icon: "\u26A1",
    label: "Automate",
    title: "Operations Automation",
    description:
      "Once the product works, we automate the work around it: reporting, alerts, back\u2011office workflows, and integrations between your tools. Often built on n8n and other open\u2011source tools where it makes sense, and paired with SaaS vendors when that\u2019s the better choice for reliability or speed.",
  },
  {
    icon: "\u{1F91D}",
    label: "Partnership",
    title: "Fractional CTO",
    description:
      "Ongoing technical strategy, architecture decisions, and engineering team building once you\u2019re past v1 and need a real engineering org, not just a contractor. We help you hire, onboard, and transition to an internal team while keeping the roadmap and architecture coherent.",
  },
];

// --- Case Studies ---

export const CASE_STUDIES: CaseStudy[] = [
  {
    headline: "Valist \u2192 HyperPlay \u2013 Founded, Funded, and Acquired",
    role: "Co-founders",
    resultSummary:
      "Two\u2011engineer founding team \u2192 pre\u2011seed from 2048 Ventures \u2192 acquisition and integration into a platform with 100K+ users.",
    situation:
      "We co\u2011founded Valist, a developer\u2011first software distribution platform.",
    result:
      "We built the core product, raised pre\u2011seed from 2048 Ventures, and led the full acquisition process: due diligence, negotiations, and integration into HyperPlay\u2019s ecosystem.",
    metrics: [
      "2 founders \u2192 pre-seed raise \u2192 acquisition",
      "Product integrated into platform with 100K+ users",
    ],
  },
  {
    headline: "HyperPlay Labs \u2013 0\u2192100K+ Downloads, $12M Series A",
    role: "Head of Product & VP Engineering",
    resultSummary:
      "Led product from zero to 100K+ downloads across Windows, Mac, Linux, and Steam Deck. Supported a $12M Series A raise.",
    situation:
      "Post\u2011acquisition, HyperPlay needed to ship a desktop gaming platform and raise a Series A fast.",
    result:
      "We led product development and security across Windows, Mac, Linux, and Steam Deck, established key partnerships, and contributed to the fundraising strategy through HyperPlay\u2019s $12M Series A. We continue as Strategic Advisors.",
    metrics: [
      "0 \u2192 100K+ downloads",
      "$12M Series A raised",
      "Transitioned to Strategic Advisors",
    ],
  },
  {
    headline: "Travel Money \u2013 0\u21921 Fintech Product",
    role: "CTO",
    resultSummary:
      "Shipped a production iOS app and Chrome extension with AI\u2011powered product detection, payments, and French customs integration from zero internal tech team.",
    situation:
      "A non\u2011technical founder had a fintech thesis around VAT export arbitrage, seed funding, and French customs to navigate, but no product and no tech team.",
    result:
      "We acted as sole CTO and built the full iOS app and Chrome extension: AI\u2011powered product detection, payment processing, and customs integration (PABLO / Article 275 CGI), plus the underlying infrastructure.",
    metrics: [
      "Sole CTO, entire technical operation",
      "iOS app + AI detection + payments + customs integration",
    ],
  },
  {
    headline: "2U FinTech Bootcamp \u2013 Curriculum Engineering Across 60+ Universities",
    role: "Curriculum Engineering",
    resultSummary:
      "Production\u2011quality full\u2011stack and distributed systems curriculum deployed at 60+ universities, including Columbia, Rice, and University of Toronto.",
    situation:
      "2U needed scalable, production\u2011grade curriculum in full\u2011stack development, distributed systems, and cryptography for their university partner network.",
    result:
      "We authored the curriculum and built production apps used as teaching tools, which have since been deployed across 60+ universities.",
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
    a: "Funded software, SaaS, and AI\u2011product founders (pre\u2011seed to Series A) who need a real v1, not just a prototype, and don\u2019t have senior product + engineering in\u2011house.",
  },
  {
    q: "How are you faster than a typical agency?",
    a: "We only take a few builds at a time, we\u2019re the ones actually doing the work, and we use BeemSpec to coordinate AI agents instead of handing tasks to layers of juniors. That lets us commit to aggressive timelines without playing games on quality.",
  },
  {
    q: "Do I own everything you build?",
    a: "Yes. Code, infra accounts, automations, and documentation are all yours. We set everything up in accounts you control and avoid hard vendor lock\u2011in wherever practical. When paid tools or cloud vendors are the better choice, we pick ones that are easy to migrate away from later.",
  },
  {
    q: "Do you also get us users?",
    a: "No. You bring the users (or audience, or pipeline). We design and build the product, onboarding, and analytics so those users can actually use it and you can learn from real data.",
  },
  {
    q: "Aren\u2019t you just two people? What if something happens or you get busy?",
    a: "Day\u2011to\u2011day, you work directly with the two founders. Every build starts with the same core pod: both founders plus a product designer we\u2019ve shipped with before.\n\nWhen a project needs more implementation horsepower, we scale the pod with senior engineers, infra, and security specialists from our regular bench. They work inside our BeemSpec system, our repos, and our review process. We stay responsible for product decisions, architecture, and final code.\n\nWe cap concurrent builds and book in sprints so we don\u2019t oversell capacity. All plans, decisions, and code live in shared systems you own, so the work isn\u2019t stuck in one person\u2019s head and can be handed off cleanly as you grow your internal team.",
  },
  {
    q: "What happens if things take longer than expected?",
    a: "Before we start, we agree on V1 scope and a launch milestone. Our launch guarantee applies to that scope, as long as you\u2019re giving feedback and access within a few business days. If we miss that milestone by more than 2 weeks for reasons in our control, we eat the overage.\n\nIf you decide to expand scope mid\u2011sprint (it happens!), the default is we park those ideas in the next sprint. If you want them pulled into this sprint, we\u2019ll adjust the budget and timeline together so there are no surprises.",
  },
  // Equity FAQ removed from public site. Keep as internal lever only.
];

// --- About ---

export const CREDENTIALS = [
  {
    label: "2048 Ventures",
    href: "https://www.2048.vc/blog/our-investment-in-valist",
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
    label: "2nd Place, HACKtheMACHINE at MIT",
    href: "https://www.cma.fraunhofer.org/en/News/Fraunhofer_places_second_in_US_Navys_HackTheMachine_Cyber_Competition.html",
  },
  {
    label: 'IPFS "Building Web3" Series',
    href: "https://blog.ipfs.tech/2021-12-07-building-web3-valist/",
  },
  {
    label: "Central Penn Business Journal",
    href: "https://www.cpbj.com/its-still-reeds-vision-were-just-living-in-it/",
  },
];
