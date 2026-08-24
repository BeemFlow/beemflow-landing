export interface TrustSection {
  heading: string;
  paragraphs: string[];
}

export interface TrustPage {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  sections: TrustSection[];
}

export const ABOUT_PAGE: TrustPage = {
  title: 'About BeemFlow | Founder-Led Product & Automation Studio',
  description:
    'Learn who operates BeemFlow, what the founder-led studio builds, who it serves, and how its product and automation engagements work.',
  eyebrow: 'About BeemFlow',
  heading: 'Built by founders who have operated what they ship.',
  intro:
    'BeemFlow is a founder-led product and automation studio operated by AW Ops LLC. We help established service businesses replace fragile manual handoffs with dependable workflow and AI operations systems, and we help funded software founders turn a clear thesis into a market-ready first product.',
  sections: [
    {
      heading: 'The team',
      paragraphs: [
        'BeemFlow was founded by Alec Wantoch and Zach Pelkey, two engineer-founders who previously co-founded Valist, raised pre-seed capital, led its acquisition into HyperPlay, and then led product and security work through HyperPlay’s Series A and first 100,000-plus downloads. Together, the team has shipped more than 15 production systems across fintech, infrastructure, education, and developer tools.',
        'Client work stays founder-led. Alec and Zach remain responsible for product decisions, architecture, delivery quality, and handoff. A small bench of senior specialists supports product design, infrastructure, and security when a project needs their expertise. BeemFlow does not route engagements through layers of junior account staff.',
      ],
    },
    {
      heading: 'What BeemFlow does',
      paragraphs: [
        'For multi-location and operationally complex service businesses, BeemFlow maps live processes, identifies high-return automation opportunities, deploys production workflows into the client’s existing stack, and can monitor those workflows after launch. The work is organized through an Ops Blueprint, focused Process Automation Sprints, and optional Managed Automation.',
        'For funded software, SaaS, and AI founders, BeemFlow provides product strategy, design, engineering, infrastructure, and security for market-ready V1 builds. Every engagement is planned through BeemSpec, BeemFlow’s AI-native coordination system. Clients own the code, infrastructure accounts, automations, dashboards, and documentation produced for them.',
      ],
    },
    {
      heading: 'Company details',
      paragraphs: [
        'BeemFlow is the trade name used by AW Ops LLC, based in Henderson, Nevada, United States, and serves clients remotely. The company’s canonical website is beemflow.com. Questions about the company, an engagement, or published site information can be sent to alec@beemflow.com.',
      ],
    },
  ],
};

export const CONTACT_PAGE: TrustPage = {
  title: 'Contact BeemFlow | Product & Automation Engagements',
  description:
    'Contact BeemFlow about workflow automation, AI operations systems, market-ready product builds, support, privacy, or company information.',
  eyebrow: 'Contact',
  heading: 'Start with the real process or product you need to change.',
  intro:
    'The direct contact for BeemFlow is alec@beemflow.com. BeemFlow is operated by AW Ops LLC in Henderson, Nevada, United States, and works with clients remotely. Use the guidance below so the founder-led team can route your request and respond with useful context.',
  sections: [
    {
      heading: 'New engagements',
      paragraphs: [
        'For workflow and AI operations work, include your company name, website, approximate revenue range, number of locations, the systems involved, and the manual process that currently causes the most delay or rework. The best starting point is a concrete flow such as lead-to-booking, quote-to-cash, scheduling, billing, inventory, reporting, or customer follow-up.',
        'For a software V1 build, include the user you serve, the core job the product must accomplish, your current stage, any committed launch date, and whether design, engineering, or infrastructure already exists. Do not email passwords, API keys, private customer records, health information, payment-card data, or other production credentials.',
      ],
    },
    {
      heading: 'Existing clients and other requests',
      paragraphs: [
        'Existing clients should use the project or support channel named in their engagement documentation for operational incidents. For privacy questions, data requests, media inquiries, accessibility feedback, security reports, or corrections to information on this website, email alec@beemflow.com with a clear subject line. BeemFlow reviews fit before proposing work and will say directly when a request is outside its scope.',
      ],
    },
    {
      heading: 'Business identity',
      paragraphs: [
        'BeemFlow is a founder-led product and automation studio and a trade name of AW Ops LLC. The business location published for verification is Henderson, Nevada, United States. The company serves clients remotely; meetings are arranged in advance rather than accepted as walk-ins.',
      ],
    },
  ],
};

export const PRIVACY_PAGE: TrustPage = {
  title: 'Privacy Policy | BeemFlow',
  description:
    'How BeemFlow collects, uses, shares, retains, and protects information submitted through beemflow.com, plus privacy contact details.',
  eyebrow: 'Privacy',
  heading: 'Privacy policy for beemflow.com',
  intro:
    'Effective August 22, 2026. This policy explains how AW Ops LLC, doing business as BeemFlow, handles information collected through beemflow.com. It applies to this marketing website and its inquiry and scheduling flows; a client agreement or product-specific policy may govern data processed during a paid engagement.',
  sections: [
    {
      heading: 'Information collected',
      paragraphs: [
        'When you submit an operations inquiry, BeemFlow collects the information you enter, which may include your name, work email, company, website, revenue range, location count, team size, and description of an operational problem. When you schedule a meeting, Cal.com may collect scheduling and contact details under its own privacy terms. BeemFlow also receives ordinary technical request information from hosting systems, such as IP address, browser or user-agent information, requested URL, timestamp, and error or security logs.',
        'Please do not submit passwords, secret keys, payment-card numbers, protected health information, private customer datasets, or other sensitive production information through the public website or ordinary email. BeemFlow will arrange an appropriate secure channel if sensitive information is necessary for an engagement.',
      ],
    },
    {
      heading: 'How information is used and shared',
      paragraphs: [
        'BeemFlow uses submitted information to evaluate and respond to inquiries, prepare for calls, operate and secure the website, diagnose errors, prevent abuse, maintain business records, and comply with legal obligations. Inquiry data may be processed in Attio for relationship management and routed to a private Slack workspace for internal notification. Scheduling data is processed by Cal.com. The website is hosted on Vercel and loads font resources from Google. These providers process information for the services they supply and are subject to their own terms and privacy practices.',
        'BeemFlow does not sell personal information. Information may be disclosed when required by law, to protect the rights or security of BeemFlow and others, in connection with a financing, reorganization, acquisition, or sale of the business, or to professional advisers and service providers that need it to perform work for BeemFlow.',
      ],
    },
    {
      heading: 'Retention, security, and choices',
      paragraphs: [
        'Information is retained only as long as reasonably needed for the purposes described above, including follow-up, contractual and accounting records, security, dispute resolution, and legal compliance. Retention periods vary by record type and relationship. BeemFlow uses reasonable administrative and technical safeguards, but no internet transmission or storage method can be guaranteed completely secure.',
        'You may ask to access, correct, or delete personal information you submitted, or object to future marketing contact, by emailing alec@beemflow.com. BeemFlow may need to verify your identity and may retain information where law, security, fraud prevention, or a contract requires it. Depending on where you live, local law may provide additional privacy rights. The website is not directed to children under 13, and BeemFlow does not knowingly collect their personal information through this site.',
      ],
    },
    {
      heading: 'Changes and contact',
      paragraphs: [
        'This policy may be updated when the website, vendors, or legal requirements change. The effective date above will be revised when a material update is published. Privacy questions or requests should be sent to alec@beemflow.com or addressed to BeemFlow / AW Ops LLC, Henderson, Nevada, United States.',
      ],
    },
  ],
};

export const TRUST_PAGES = {
  about: ABOUT_PAGE,
  contact: CONTACT_PAGE,
  privacy: PRIVACY_PAGE,
};
