export interface Service {
  icon: string;
  title: string;
  timeline: string;
  description: string;
  note?: string;
}

export interface CaseStudy {
  label: string;
  company: string;
  situation: string;
  action: string;
  outcome: string;
  role: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export const SERVICES: Service[] = [
  {
    icon: "\u{1F9ED}",
    title: "Product Strategy",
    timeline: "1\u20132 weeks \u00B7 Fixed price",
    description:
      "We get embedded in your business: your market, your users, your constraints. You get a product spec, technical architecture, and development roadmap. A complete blueprint you can execute with us or take to any team.",
    note: "This is how every engagement starts.",
  },
  {
    icon: "\u{1F680}",
    title: "Product Engineering",
    timeline: "Ongoing \u00B7 Project or retainer",
    description:
      "End-to-end product delivery. We take the blueprint and turn it into a working product in the market. Architecture, engineering, deployment, iteration. We handle it. You handle your customers.",
    note: "Deliverable: a shipped product, not a prototype.",
  },
  {
    icon: "\u{1F512}",
    title: "Security & Infrastructure",
    timeline: "Standalone or add-on",
    description:
      "Most dev shops can\u2019t audit their own code. We come from a security engineering background: penetration testing, applied cryptography, secure key management. We build things right the first time, and we can harden what\u2019s already there.",
    note: "Especially relevant for fintech, healthtech, and anything handling sensitive data.",
  },
  {
    icon: "\u26A1",
    title: "Business Automation",
    timeline: "Standalone or add-on",
    description:
      "Your team is drowning in manual processes. Onboarding, reporting, operations, internal tools. We audit your workflows, identify what should be automated, and build the systems that let your team focus on what matters.",
  },
  {
    icon: "\u{1F91D}",
    title: "Fractional CTO",
    timeline: "Ongoing \u00B7 Monthly retainer",
    description:
      "A long-term technical partner without a full-time hire. We own your product roadmap, make technical decisions, and guide architecture as you scale. When you\u2019re ready, we help you hire your first engineers and hand off cleanly.",
    note: "We\u2019ve done this role. Not as consultants, as the actual CTO.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    label: "0 \u2192 1 Product",
    company: "Travel Money",
    situation:
      "A non-technical founder had a VAT export arbitrage thesis and capital, but no product, no tech team, and a regulatory maze to navigate.",
    action:
      "Came on as CTO and sole technical leader. Designed the product from scratch, built the full stack: iOS app with custom in-app browser, AI-powered product detection, payment processing, and French customs integration (PABLO/Article 275 CGI).",
    outcome: "Product built and operational with a single engineer.",
    role: "CTO",
  },
  {
    label: "Acquisition",
    company: "Valist \u2192 HyperPlay",
    situation:
      "Two engineers, no funding, one idea: make software distribution work for Web3 the way npm works for JavaScript.",
    action:
      "Co-founded the company, built the core product with cryptographic signatures and distributed storage, raised a pre-seed round from tier-one investors including 2048 Ventures, and led the full acquisition process: due diligence, negotiations, and integration.",
    outcome:
      "Company acquired. Product integrated into a platform with 100K+ users.",
    role: "Co-founders",
  },
  {
    label: "Scale",
    company: "HyperPlay Labs",
    situation:
      "Post-acquisition, HyperPlay needed to ship a desktop gaming platform and raise a Series A. Fast.",
    action:
      "Led product development, coordinated cross-functional teams, and oversaw security architecture for wallet integration across Windows, Mac, Linux, and Steam Deck. Established partner relationships with game publishers and contributed to fundraising strategy.",
    outcome:
      "100K+ downloads. $12M Series A raised. Now serving as Strategic Advisors.",
    role: "Product & Engineering Leadership",
  },
  {
    label: "Consulting",
    company: "Akashic Technologies",
    situation:
      "Enterprise clients needed cryptographic systems and cybersecurity expertise they couldn\u2019t find in-house.",
    action:
      "Co-founded and ran a consulting firm delivering secure cryptocurrency wallet implementations with HSM integration, secure key management protocols, and satellite communication software built on libp2p requiring low-latency, resilient network protocols.",
    outcome:
      "Delivered production systems for multiple enterprise clients. The work directly led to founding Valist.",
    role: "Co-founders",
  },
  {
    label: "Education at Scale",
    company: "2U FinTech Bootcamp",
    situation:
      "2U needed production-quality blockchain and full-stack curriculum that could scale across their university partner network.",
    action:
      "Led curriculum development. Authored comprehensive course material covering distributed systems, cryptography, smart contract security, and full-stack development. Built production dApps used as teaching tools.",
    outcome:
      "Deployed across 60+ universities including Columbia, Rice, and University of Toronto.",
    role: "Curriculum Engineering",
  },
];

export const FAQS: FAQ[] = [
  {
    q: "How is this different from a dev shop or freelancer?",
    a: "A dev shop gives you a team of juniors managed by a project manager who\u2019s never built a company. A freelancer gives you code without context. We give you senior technical leadership that owns the outcome: product thinking, architecture, engineering, security, and deployment, from a team that\u2019s built and exited a company. And we stick around to help you scale.",
  },
  {
    q: "Do you only work with funded startups?",
    a: "No. We work with anyone who needs to build or optimize a product. Funded startups, bootstrapped companies with revenue, existing businesses looking to automate or modernize. The common thread is you need senior technical help without the risk and overhead of hiring.",
  },
  {
    q: "What happens when I\u2019m ready to build my own team?",
    a: "That\u2019s the goal. We help you write job descriptions, screen candidates, conduct technical interviews, and onboard your first hires. We want to build ourselves out of a job. That means you\u2019ve succeeded. And we\u2019re happy to stay on in an advisory capacity.",
  },
  {
    q: "Who will I be working with?",
    a: "You work directly with us, the founders. On larger projects, we bring in trusted collaborators we\u2019ve shipped with before, but one of us is always the one accountable for the work. No handoffs, no surprises.",
  },
  {
    q: "What does the equity hybrid look like?",
    a: "On the right projects, we discount our cash rate in exchange for a small equity stake, typically 0.5\u20132%. It means we have real skin in the game and a reason to stick around long after launch.",
  },
];

export const PROOF_CLIENTS = [
  "HyperPlay",
  "Travel Money",
  "Valist (acquired)",
  "2U",
  "Ethos.io",
  "Highmark",
];

export const WHY_US = [
  {
    title: "Strategy first, not just code",
    text: "We help you figure out what to build, not just how. Product requirements, user research, technical architecture. We think through the hard questions before writing a line of code.",
  },
  {
    title: "Small team, full-team output",
    text: "We ship faster than a traditional agency because we\u2019ve spent years building AI into our development workflow. What used to take a 6-person team and 3 months, we deliver in weeks. Senior-level architecture, not duct tape.",
  },
  {
    title: "We\u2019ve been in your seat",
    text: "We\u2019ve co-founded a company, raised capital, shipped 20+ products, and served as CEO and CTO at early-stage startups. We know which corners you can cut and which ones will cost you later. We\u2019ve made the expensive mistakes already.",
  },
  {
    title: "Security is built in, not bolted on",
    text: "We come from a security engineering background: penetration testing, applied cryptography, infrastructure hardening. Your product gets built right the first time, not patched after the breach.",
  },
];

export const STATS = [
  { num: "12+", label: "products shipped to production" },
  { num: "10+", label: "years professional experience" },
  { num: "4", label: "industries" },
  { num: "1", label: "acquisition" },
];

export const CREDENTIALS = [
  { label: "Nasdaq", href: "https://www.nasdaq.com/articles/more-retailers-are-preparing-to-accept-crypto%3A-why-you-should-buy-it-now" },
  { label: "Coinbase Bytes", href: "https://www.coinbase.com/bytes/archive/themes-to-watch-in-2024" },
  { label: 'IPFS "Building Web3" Series', href: "https://blog.ipfs.tech/2021-12-07-building-web3-valist/" },
  { label: "2nd Place \u2014 HACKtheMACHINE at MIT", href: "https://www.cma.fraunhofer.org/en/News/Fraunhofer_places_second_in_US_Navys_HackTheMachine_Cyber_Competition.html" },
  { label: "Central Penn Business Journal", href: "https://www.cpbj.com/its-still-reeds-vision-were-just-living-in-it/" },
];

export const CONTACT_FIELDS = [
  { id: "name", label: "Your name", type: "text", placeholder: "Jane Smith" },
  { id: "company", label: "Company", type: "text", placeholder: "Acme, Inc." },
  {
    id: "project",
    label: "What are you building?",
    type: "textarea",
    placeholder: "One or two sentences about your product...",
  },
  {
    id: "stage",
    label: "Stage",
    type: "select",
    options: ["Pre-seed", "Seed", "Series A", "Bootstrapped w/ revenue"],
  },
  { id: "email", label: "Email", type: "email", placeholder: "jane@acme.com" },
];
