// ─── Solution Page Types ───

export interface SolutionFitBullet {
  text: string;
}

export interface WorkflowStep {
  label: string;
  description: string;
}

export interface BuildItem {
  title: string;
  description: string;
}

export interface Outcome {
  metric: string;
  description: string;
}

export interface TimelinePhase {
  phase: string;
  duration: string;
  description: string;
}

export interface Story {
  /** One-line label, e.g. "Composite case study" */
  label: string;
  /** Short narrative: the situation, what changed, the result */
  narrative: string;
  /** Disclaimer footnote */
  footnote: string;
}

export interface Solution {
  /** URL slug (used in routing: /solutions/[slug]/) */
  slug: string;

  /** Short nav/hub label */
  navLabel: string;

  /** Hub card description */
  hubDescription: string;

  /** SEO */
  seo: {
    title: string;
    description: string;
    ogImageAlt: string;
  };

  /** Section 1: Hero */
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    body: string;
  };

  /** Section 2: Who it's for */
  fit: {
    heading: string;
    bullets: SolutionFitBullet[];
  };

  /** Section 3: The ugly "Before" */
  before: {
    heading: string;
    narrative: string;
    bullets: string[];
  };

  /** Section 4: The "After" workflow map */
  after: {
    heading: string;
    steps: WorkflowStep[];
  };

  /** Section 5: What we actually build */
  build: {
    heading: string;
    items: BuildItem[];
  };

  /** Section 6: Outcomes & proof */
  outcomes: {
    heading: string;
    items: Outcome[];
    footnote?: string;
  };

  /** Section 6b: Composite case study / story (optional) */
  story?: Story;

  /** Section 7: Implementation & timeline */
  timeline: {
    heading: string;
    phases: TimelinePhase[];
  };

  /** Section 8: Risk & ownership */
  risk: {
    heading: string;
    points: string[];
  };

  /** Section 9: CTA / Contact form */
  cta: {
    heading: string;
    body: string;
    buttonText: string;
  };
}

// ─── Solution: Manufacturing Quote\u2011to\u2011Production ───

export const SOLUTION_MANUFACTURING: Solution = {
  slug: 'manufacturing-quote-to-production',
  navLabel: 'Manufacturing: Quote\u2011to\u2011Production',
  hubDescription:
    'Job shops lose 25\u201350 hours/month to re\u2011keying quotes, chasing job status, and compiling reports by hand. We automate the full RFQ\u2011to\u2011delivery lifecycle so that time goes back to the floor.',

  seo: {
    title:
      'BeemFlow | Manufacturing Quote\u2011to\u2011Production Automation for Job Shops',
    description:
      'Automate the full RFQ\u2011to\u2011delivery lifecycle for industrial manufacturers. Quote follow\u2011up, job handoff, shop floor tracking, and same\u2011day invoicing. Deployed in weeks, not months.',
    ogImageAlt:
      'BeemFlow manufacturing quote-to-production automation overview',
  },

  // ── 1. Hero ──
  hero: {
    eyebrow: 'Industrial manufacturing',
    headline: 'Stop losing money between the quote and the\u00A0floor.',
    headlineAccent:
      'RFQ to delivery, automated.',
    body: 'Your estimators are also your project managers. Accepted jobs get thrown over the wall with missing specs. Invoices lag weeks behind shipments. We deploy production\u2011ready process automation across your entire quote\u2011to\u2011delivery lifecycle, starting in 2\u00A0weeks.',
  },

  // ── 2. Who it's for ──
  fit: {
    heading: 'Built for manufacturers who recognize\u00A0this',
    bullets: [
      { text: '$3M\u2013$50M+ revenue, job shop or contract manufacturing' },
      { text: 'PE\u2011backed, family\u2011owned, or recently recapitalized' },
      { text: '50\u2013500 employees across estimating, production, and admin' },
      { text: 'Running some mix of ERP, CRM, spreadsheets, email, and whiteboards' },
      { text: 'Leadership wants operational visibility without a 2\u2011year ERP migration' },
    ],
  },

  // ── 3. The ugly "Before" ──
  before: {
    heading: 'The process you\u2019re actually\u00A0running',
    narrative:
      'You don\u2019t have a \u201Ctechnology problem.\u201D You have a \u201Cpeople\u2011as\u2011glue\u201D problem. Quotes live in inboxes. Accepted jobs become clipboards on the shop floor. Nobody knows where a job stands without walking the floor or calling someone. And leadership asks for weekly throughput numbers that take half a day to compile.',
    bullets: [
      'RFQs arrive by email, phone, and text with no single intake and no follow\u2011up system. Every missed or late quote is $5K\u2013$50K in potential work that goes to a competitor',
      'Estimating happens in spreadsheets or the owner\u2019s head; quotes go cold. A 10% improvement in close rate on a $3M pipeline is $300K',
      'Job handoff to production is a printout, a verbal walk, or a forwarded email. Missing specs and wrong materials drive 5\u201310% rework costs on affected jobs',
      'Job status on the floor is a whiteboard, a shared spreadsheet, or \u201Cask Dave.\u201D Leadership can\u2019t see throughput without a 30\u2011minute walk or a phone call',
      'Invoicing lags 2\u20113 weeks behind delivery. On a $500K/month shop, that\u2019s $250K\u2013$375K perpetually sitting in unbilled limbo',
      'Monthly reporting to leadership is a half\u2011day scramble to merge 4 different systems. That\u2019s 6+ hours of admin time that repeats every single month',
    ],
  },

  // ── 4. The "After" workflow map ──
  after: {
    heading: 'What it looks like after\u00A0BeemFlow',
    steps: [
      {
        label: 'RFQ Captured & Triaged',
        description:
          'Inbound requests auto\u2011logged from email and web forms, routed to the right estimator with job specs pre\u2011parsed by AI.',
      },
      {
        label: 'Quote Tracked & Followed Up',
        description:
          'Automated follow\u2011up sequences keep quotes alive. Win/loss tracking and quote\u2011to\u2011close metrics are visible without asking anyone.',
      },
      {
        label: 'Job Handoff to Production',
        description:
          'Accepted quotes auto\u2011generate work orders with full specs, materials, and routing. No re\u2011keying, no missing information.',
      },
      {
        label: 'Floor Visibility',
        description:
          'Job status updated from simple shop floor inputs (scan, tap, or phone form). Real\u2011time backlog and throughput dashboards replace the whiteboard.',
      },
      {
        label: 'Invoice & Report',
        description:
          'Delivery triggers invoicing automatically. Weekly production reports are generated without anyone compiling a spreadsheet.',
      },
    ],
  },

  // ── 5. What we actually build ──
  build: {
    heading: 'What we deploy',
    items: [
      {
        title: 'No more RFQs dying in inboxes',
        description:
          'Every RFQ from email, phone, and web forms lands in one queue. Specs are parsed and routed to the right estimator automatically.',
      },
      {
        title: 'Quotes that don\u2019t go cold',
        description:
          'Open quotes get systematic multi\u2011touch follow\u2011up until they close or you kill them. No estimate dies from neglect.',
      },
      {
        title: 'Clean handoffs, zero re\u2011keying',
        description:
          'Accepted quotes produce work orders with validated specs, materials, and routing. The shop floor gets what it needs without re\u2011keying.',
      },
      {
        title: 'The whiteboard, replaced',
        description:
          'Techs update job status from a phone or tablet. Scan, tap, done. Real\u2011time backlog and throughput replace the whiteboard.',
      },
      {
        title: 'Invoices that go out when the truck does',
        description:
          'Shipping confirmation triggers invoicing. BOLs, packing slips, and line items flow through without anyone re\u2011entering data.',
      },
      {
        title: 'Reports that build themselves',
        description:
          'Throughput, backlog, pipeline, and cash conversion reports generated automatically. Overdue jobs and stalled quotes trigger alerts early.',
      },
    ],
  },

  // ── 6. Outcomes & proof ──
  outcomes: {
    heading: 'What changes',
    items: [
      {
        metric: 'Quote response: days \u2192 hours',
        description:
          'RFQs are logged and routed the moment they arrive. Estimators see a clean queue, not a buried inbox.',
      },
      {
        metric: 'Follow\u2011up rate: sporadic \u2192 100% systematic',
        description:
          'Every open quote gets a defined follow\u2011up sequence. Nothing falls through because someone got busy.',
      },
      {
        metric: 'Job handoff errors: eliminated',
        description:
          'Work orders are generated from the accepted quote. Same specs, same materials, no telephone game.',
      },
      {
        metric: 'Invoice lag: 2\u20113 weeks \u2192 same day it ships',
        description:
          'Delivery confirmation triggers the invoice automatically. The delay between shipment and billing closes.',
      },
      {
        metric: 'Reporting: half\u2011day scramble \u2192 auto\u2011generated',
        description:
          'Leadership gets the numbers they need without anyone pulling data from 4 systems.',
      },
      {
        metric: '25\u201350 hours/month reclaimed',
        description:
          'Across estimating, scheduling, admin, and reporting. Hours that go back to running the business.',
      },
    ],
    footnote:
      'Metrics are directional based on typical engagement outcomes. Your Blueprint will identify specific targets for your operation.',
  },

  story: {
    label: 'What this looks like in practice',
    narrative:
      'A 45\u2011employee contract machine shop was quoting $6M/year but closing under 30%. RFQs sat in the owner\u2019s inbox for 2\u20113 days before anyone touched them. Accepted jobs were handed off on paper; the shop ran roughly 8% rework on missing\u2011spec errors. Invoicing lagged shipments by 18 days on average, leaving $200K+ in perpetual AR float. After deploying automated RFQ intake, quote follow\u2011up sequences, and delivery\u2011triggered invoicing, quote response dropped to under 4 hours, rework from handoff errors fell to near zero, and invoicing moved to same\u2011day. The owner estimated the automation reclaimed 35\u201340 hours/month of admin time across estimating, production, and billing.',
    footnote:
      'Composite illustration based on common engagement patterns. Specific results depend on your operation\u2019s starting point and scope.',
  },

  // ── 7. Implementation & timeline ──
  timeline: {
    heading: 'How we get there',
    phases: [
      {
        phase: 'Blueprint',
        duration: '2 weeks',
        description:
          'We map your live quote\u2011to\u2011delivery process, identify 3\u20115 high\u2011ROI automation targets, and deliver an ROI snapshot with a 90\u2011day automation roadmap. $3K, credited toward your first Sprint.',
      },
      {
        phase: 'Process Automation Sprint',
        duration: '4 weeks',
        description:
          'We deploy 2\u20113 production automations from the BeemFlow template library, configured and integrated into your stack. One process area per sprint, for example the full quote\u2011to\u2011work\u2011order pipeline.',
      },
      {
        phase: 'Managed Automation',
        duration: 'Ongoing',
        description:
          'Monitoring, incident handling, quarterly reviews, and new automation targets as your operation evolves. Clear SLAs so your team knows what BeemFlow manages vs. what they own.',
      },
    ],
  },

  // ── 8. Risk & ownership ──
  risk: {
    heading: 'Your operation, your\u00A0systems',
    points: [
      'Everything runs on your infrastructure, your accounts. No vendor lock\u2011in.',
      'If, by the end of the Blueprint, we haven\u2019t identified at least one automation you believe is worth deploying and shown a realistic path to reclaiming 10+ hours/month, we\u2019ll keep working the Blueprint at our cost until we do.',
      'All automations, dashboards, and documentation are yours. We build on n8n and open tools wherever practical.',
      '30\u2011day stabilization included on every deployment. If something we built breaks under normal use, we fix it.',
      'Managed Automation required for critical\u2011path automations (minimum 6 months). After that, continue month\u2011to\u2011month or transition to per\u2011incident support.',
    ],
  },

  // ── 9. CTA ──
  cta: {
    heading: 'Map this process to your\u00A0stack',
    body: 'The Blueprint takes 2 weeks. You\u2019ll get a structured map of your quote\u2011to\u2011delivery process, a prioritized list of automation targets with ROI projections, and a 90\u2011day automation roadmap.',
    buttonText: 'Book the Blueprint',
  },
};

// ─── Solution: Home Services Groups ───

export const SOLUTION_HOME_SERVICES: Solution = {
  slug: 'home-services-lead-to-invoice',
  navLabel: 'Home Services: Lead\u2011to\u2011Invoice',
  hubDescription:
    'Multi\u2011location home services groups lose 15\u201330 hours/month to missed after\u2011hours leads, manual dispatch, and dead estimates. We automate lead\u2011to\u2011invoice so nothing falls through.',

  seo: {
    title:
      'BeemFlow | Lead\u2011to\u2011Invoice Automation for Home Services Groups',
    description:
      'Automate lead intake, dispatch, estimate follow\u2011up, and invoicing for multi\u2011location home services companies. HVAC, plumbing, electrical, roofing. Deployed in weeks on your existing stack.',
    ogImageAlt:
      'BeemFlow home services lead-to-invoice automation overview',
  },

  hero: {
    eyebrow: 'Home services groups',
    headline: 'Stop letting leads fall through after\u00A0hours.',
    headlineAccent: 'Lead to invoice, automated.',
    body: 'You\u2019re running a multi\u2011location home services group and the dispatch, follow\u2011up, and invoicing still happen the way they always have: manually, inconsistently, and depending on who remembers. We deploy production\u2011ready process automation across your entire lead\u2011to\u2011invoice lifecycle, starting in 2\u00A0weeks.',
  },

  fit: {
    heading: 'Built for home services groups who recognize\u00A0this',
    bullets: [
      { text: '$3M\u2013$50M+ revenue across HVAC, plumbing, electrical, roofing, or pest control' },
      { text: 'PE\u2011backed, roll\u2011up, or recently recapitalized' },
      { text: 'Multiple locations or brands under one portfolio' },
      { text: 'Running ServiceTitan, Housecall Pro, Jobber, or a mix of tools nobody fully uses' },
      { text: 'Leadership wants consolidated visibility without ripping out existing systems' },
    ],
  },

  before: {
    heading: 'The process you\u2019re actually\u00A0running',
    narrative:
      'Leads come in from Google, Angi, Thumbtack, referrals, your website, and the office phone. Some get logged. Some don\u2019t. Dispatch is a coordinator juggling a whiteboard, a group text, and the CRM calendar. Open estimates are sitting in a system nobody checks. And every board meeting, someone spends a day pulling numbers from multiple ServiceTitan instances into one deck.',
    bullets: [
      'Leads arrive from 5+ channels with no single intake. After\u2011hours calls go to voicemail and get returned whenever someone remembers. Each missed lead is $500\u2013$3,000 in lifetime job value',
      'Dispatch is manual: coordinators juggle availability, geography, and skill sets by memory. Techs get double\u2011booked or sit idle. One empty truck day costs $800\u20111,200 in lost revenue',
      'Open estimates die because nobody called back. A $5K roof job goes cold while it sits in the CRM. At 20 dead estimates/month, that\u2019s $100K in annual revenue left on the table',
      'Job completion to invoice has a gap. Techs finish the work, paperwork trickles in days later. That\u2019s 5\u201310 days of cash float on every job',
      'Multi\u2011brand reporting is a monthly fire drill. Each location runs their own version of the process. Nobody trusts the numbers',
      'Leadership wants consolidated revenue, close rates, and dispatch efficiency. Compiling it takes half a day every week',
    ],
  },

  after: {
    heading: 'What it looks like after\u00A0BeemFlow',
    steps: [
      {
        label: 'Lead Captured & Routed',
        description:
          'Every inbound channel (web, phone, marketplace) auto\u2011logged and routed to the right dispatcher or location based on service type and zip code.',
      },
      {
        label: 'Dispatch Optimized',
        description:
          'Scheduled jobs matched to available techs by skill, location, and capacity. Conflicts flagged before they become missed appointments.',
      },
      {
        label: 'Estimate Follow\u2011Up Automated',
        description:
          'Open estimates get systematic follow\u2011up sequences. Nothing goes cold unless you decide to let it.',
      },
      {
        label: 'Job\u2011to\u2011Invoice Closed',
        description:
          'Completed jobs trigger invoicing automatically. No waiting for paperwork to trickle in from the field.',
      },
      {
        label: 'Portfolio Visibility',
        description:
          'Consolidated dashboards across all locations and brands. Revenue, close rates, dispatch efficiency, and aging estimates, generated automatically.',
      },
    ],
  },

  build: {
    heading: 'What we deploy',
    items: [
      {
        title: 'Every lead in one place, instantly',
        description:
          'Every call, web form, and marketplace lead lands in one queue. Automatic routing by service type, zip code, and urgency.',
      },
      {
        title: 'After\u2011hours calls that don\u2019t go to voicemail',
        description:
          'Calls and forms outside business hours get logged and acknowledged instantly. Your morning crew sees a clean queue, not a voicemail backlog.',
      },
      {
        title: 'Dead estimates that come back to life',
        description:
          'Open estimates get systematic multi\u2011touch outreach until they close or you kill them. That $5K roof job stops dying in a CRM nobody checks.',
      },
      {
        title: 'Dispatch without the juggling act',
        description:
          'Jobs matched to available techs by skill, location, and capacity. Conflicts and double\u2011bookings get flagged before they reach the customer.',
      },
      {
        title: 'Invoices the same day the job\u2019s done',
        description:
          'Tech marks a job complete, invoicing kicks off. Hours, materials, and job details flow through without anyone re\u2011entering paperwork.',
      },
      {
        title: 'One dashboard for the whole portfolio',
        description:
          'Revenue, close rates, and dispatch efficiency across every location and brand. Stalled estimates and missed callbacks trigger alerts early.',
      },
    ],
  },

  outcomes: {
    heading: 'What changes',
    items: [
      {
        metric: 'Lead response: hours \u2192 minutes',
        description:
          'Every lead is logged and routed the moment it arrives. No more next\u2011day callbacks on after\u2011hours calls.',
      },
      {
        metric: 'Estimate follow\u2011up: sporadic \u2192 100% systematic',
        description:
          'Every open estimate gets a defined follow\u2011up sequence. The $5K roof job doesn\u2019t die in a CRM nobody checks.',
      },
      {
        metric: 'Invoice lag: days \u2192 same\u2011day',
        description:
          'Job completion triggers invoicing automatically. Cash conversion accelerates across the portfolio.',
      },
      {
        metric: 'Reporting: manual merge \u2192 auto\u2011generated',
        description:
          'Consolidated numbers across all brands and locations without anyone building a spreadsheet.',
      },
      {
        metric: '15\u201330 hours/month reclaimed',
        description:
          'Across dispatch, admin, follow\u2011up, and reporting. Hours that go back to running the business.',
      },
    ],
    footnote:
      'Metrics are directional based on typical engagement outcomes. Your Blueprint will identify specific targets for your operation.',
  },

  story: {
    label: 'What this looks like in practice',
    narrative:
      'A PE\u2011backed HVAC and plumbing roll\u2011up with 8 locations was losing an estimated 25\u201340 after\u2011hours leads per month to voicemail. Open estimates over $3K were sitting in ServiceTitan with no follow\u2011up. Roughly $80K/month in potential revenue going cold. Invoicing ran 4\u20117 days behind job completion across most locations. After deploying after\u2011hours lead capture, automated estimate follow\u2011up sequences, and job\u2011triggered invoicing, lead response moved to under 15 minutes, estimate close rate improved measurably, and invoice lag dropped to same\u2011day. The ops director estimated the portfolio reclaimed 20\u201325 hours/month across dispatch, admin, and billing.',
    footnote:
      'Composite illustration based on common engagement patterns. Specific results depend on your operation\u2019s starting point and scope.',
  },

  timeline: {
    heading: 'How we get there',
    phases: [
      {
        phase: 'Blueprint',
        duration: '2 weeks',
        description:
          'We map your live lead\u2011to\u2011invoice process, identify 3\u20115 high\u2011ROI automation targets, and deliver an ROI snapshot with a 90\u2011day automation roadmap. $3K, credited toward your first Sprint.',
      },
      {
        phase: 'Process Automation Sprint',
        duration: '4 weeks',
        description:
          'We deploy 2\u20113 production automations from the BeemFlow template library, configured for your stack (ServiceTitan, Housecall Pro, Jobber, CRM, accounting). One process area per sprint.',
      },
      {
        phase: 'Managed Automation',
        duration: 'Ongoing',
        description:
          'Monitoring, incident handling, quarterly reviews, and new automation targets as your operation evolves. Clear SLAs so your team knows what BeemFlow manages vs. what they own.',
      },
    ],
  },

  risk: {
    heading: 'Your operation, your\u00A0systems',
    points: [
      'Everything runs on your infrastructure, your accounts. No vendor lock\u2011in.',
      'If, by the end of the Blueprint, we haven\u2019t identified at least one automation you believe is worth deploying and shown a realistic path to reclaiming 10+ hours/month, we\u2019ll keep working the Blueprint at our cost until we do.',
      'All automations, dashboards, and documentation are yours. We build on n8n and open tools wherever practical.',
      '30\u2011day stabilization included on every deployment. If something we built breaks under normal use, we fix it.',
      'Managed Automation required for critical\u2011path automations (minimum 6 months). After that, continue month\u2011to\u2011month or transition to per\u2011incident support.',
    ],
  },

  cta: {
    heading: 'Map this process to your\u00A0stack',
    body: 'The Blueprint takes 2 weeks. You\u2019ll get a structured map of your lead\u2011to\u2011invoice process, a prioritized list of automation targets with ROI projections, and a 90\u2011day automation roadmap.',
    buttonText: 'Book the Blueprint',
  },
};

// ─── Solution: Dental, Vet & Clinic Groups ───

export const SOLUTION_HEALTHCARE: Solution = {
  slug: 'clinic-lead-to-booking',
  navLabel: 'Clinic Groups: Lead\u2011to\u2011Booking',
  hubDescription:
    'Clinic groups lose an estimated 30\u201350 new patients/month to slow callbacks and inconsistent follow\u2011up. We automate inquiry\u2011to\u2011booked\u2011visit so patients book with you, not whoever answers first.',

  seo: {
    title:
      'BeemFlow | Patient Lead\u2011to\u2011Booking Automation for Dental, Vet & Clinic Groups',
    description:
      'Automate patient lead intake, booking sequences, no\u2011show prevention, and lapsed patient reactivation for DSOs, vet groups, and multi\u2011location practices. Deployed in weeks on your existing PMS.',
    ogImageAlt:
      'BeemFlow clinic group patient lead-to-booking automation overview',
  },

  hero: {
    eyebrow: 'Dental, vet & multi\u2011location clinic groups',
    headline: 'Stop losing new patients to whoever picks up the phone\u00A0first.',
    headlineAccent: 'Lead to booked visit, automated.',
    body: 'You\u2019ve consolidated 12 offices and the front desks are still running like independent practices. New patient calls go to voicemail at lunch. No\u2011show rates vary wildly by location. We deploy production\u2011ready process automation across your entire patient acquisition lifecycle, starting in 2\u00A0weeks.',
  },

  fit: {
    heading: 'Built for clinic groups who recognize\u00A0this',
    bullets: [
      { text: '$3M\u2013$50M+ revenue across dental, veterinary, urgent care, med spa, or PT' },
      { text: 'PE\u2011backed DSO, consolidator, or multi\u2011location founder\u2011operator' },
      { text: '5\u201330+ locations with front\u2011office staff as the bottleneck' },
      { text: 'Running a PMS (Dentrix, Open Dental, Eaglesoft, etc.) that each office uses differently' },
      { text: 'Corporate needs patient volume, no\u2011show rates, and new patient pipeline without calling each office' },
    ],
  },

  before: {
    heading: 'The process you\u2019re actually\u00A0running',
    narrative:
      'Patient inquiries come from Google, insurance directories, social, your website, and the phone. The front desk is already handling check\u2011ins, insurance verification, and in\u2011office questions. New patient calls go to voicemail and get returned hours later, if at all. The patient has already booked with someone else. Across a group of locations, nobody at corporate can see it happening.',
    bullets: [
      'New patient inquiries arrive across 5+ channels. Front desk can\u2019t chase every one while handling in\u2011office patients. Each lost new patient is $500\u2013$1,200 in first\u2011year revenue',
      'Callback speed is hours or next\u2011day. Patients book with whoever answers first. That\u2019s $200\u2013$400 in lifetime patient value walking out the door every time',
      'No\u2011show rates run 10\u201320% at some locations. At $150\u2013$300/visit, a 15\u2011location group with 10 no\u2011shows/week is bleeding $80K\u2013$230K/year in empty chair time',
      'Lapsed patients sit in dormant charts. A group with 50,000 patients and 20% lapsed has 10,000 potential reactivations nobody is working',
      'Canceled appointment slots go unfilled. No waitlist backfill process. Every empty slot is $150\u2013$300 in revenue that evaporates',
      'Corporate compiles new patient counts and no\u2011show rates by calling each office manager. That\u2019s 4\u20118 hours of phone tag every month for a number that\u2019s still approximate',
    ],
  },

  after: {
    heading: 'What it looks like after\u00A0BeemFlow',
    steps: [
      {
        label: 'Inquiry Captured & Routed',
        description:
          'Every patient inquiry (web, phone, directory) auto\u2011logged and routed to the right office with context. No lead sits in voicemail.',
      },
      {
        label: 'Booking Sequence Triggered',
        description:
          'Automated outreach gets patients scheduled within hours, not days. Multi\u2011touch sequences across SMS, email, and phone queue.',
      },
      {
        label: 'No\u2011Show Prevention',
        description:
          'Confirmation and reminder sequences reduce no\u2011shows. Canceled slots trigger backfill automation from the waitlist.',
      },
      {
        label: 'Reactivation Running',
        description:
          'Lapsed patients get systematic recall sequences. Hygiene, follow\u2011up treatment, and annual visits stay on track across every location.',
      },
      {
        label: 'Portfolio Dashboard',
        description:
          'New patient pipeline, no\u2011show rates, reactivation conversion, and revenue per location. Auto\u2011generated, real\u2011time, no phone calls required.',
      },
    ],
  },

  build: {
    heading: 'What we deploy',
    items: [
      {
        title: 'No inquiry left in voicemail',
        description:
          'Every inquiry from web, phone, and insurance directories lands in one queue. Automatic routing to the right office with full context.',
      },
      {
        title: 'Patients booked in hours, not days',
        description:
          'Multi\u2011touch outreach via SMS and email gets patients scheduled within hours. Escalation if they don\u2019t respond, not silence.',
      },
      {
        title: 'No\u2011shows that actually get prevented',
        description:
          'Confirmation and reminder sequences timed to each appointment. Configurable by location, provider, or visit type.',
      },
      {
        title: 'Empty chairs that fill themselves',
        description:
          'Canceled slots trigger automatic outreach to your waitlist. Empty chair time gets filled before it becomes lost revenue.',
      },
      {
        title: 'Dormant charts that actually get worked',
        description:
          'Lapsed patients get systematic recall for hygiene, follow\u2011ups, and annuals. Dormant charts get worked instead of forgotten.',
      },
      {
        title: 'Corporate visibility without the phone calls',
        description:
          'New patient pipeline, no\u2011show rates, booking speed, and reactivation across every location. Spikes and drops trigger alerts early.',
      },
    ],
  },

  outcomes: {
    heading: 'What changes',
    items: [
      {
        metric: 'Booking speed: next\u2011day \u2192 under 2 hours',
        description:
          'New patient inquiries get contacted the same day. Patients book with you instead of whoever answers the phone first.',
      },
      {
        metric: 'No\u2011show rate: meaningfully reduced',
        description:
          'Consistent confirmation and reminder sequences across every location, not dependent on individual front desk habits. The Blueprint will identify your baseline.',
      },
      {
        metric: 'Reactivation: dormant \u2192 systematically contacted',
        description:
          'Lapsed patients get recall outreach on a defined schedule instead of sitting in the PMS indefinitely.',
      },
      {
        metric: 'Reporting: phone calls \u2192 auto\u2011generated dashboards',
        description:
          'Corporate sees real\u2011time patient volume, no\u2011show rates, and new patient pipeline across the group.',
      },
      {
        metric: '15\u201335 hours/month reclaimed',
        description:
          'Across front desk staff, office managers, and corporate ops. Hours that go back to patient care and practice growth.',
      },
    ],
    footnote:
      'Metrics are directional based on typical engagement outcomes. Your Blueprint will identify specific targets for your group.',
  },

  story: {
    label: 'What this looks like in practice',
    narrative:
      'A 12\u2011location dental group was losing an estimated 30\u201350 new patients per month to slow callback times. Front desks were too busy with in\u2011office patients to chase web inquiries; after\u2011hours calls went to voicemail and sat until the next morning. No\u2011show rates averaged 15% across the group, with some offices as high as 22%. Dormant patient charts numbered in the tens of thousands, and nobody was working them. After deploying automated inquiry capture, same\u2011day booking sequences, confirmation/reminder workflows, and a reactivation drip, new patient booking speed dropped from next\u2011day to under 2 hours, no\u2011show rates fell meaningfully group\u2011wide, and the reactivation campaign booked several hundred lapsed patients in its first quarter. Corporate gained real\u2011time visibility into new patient volume and no\u2011show rates without calling individual offices.',
    footnote:
      'Composite illustration based on common engagement patterns. Specific results depend on your group\u2019s starting point and scope.',
  },

  timeline: {
    heading: 'How we get there',
    phases: [
      {
        phase: 'Blueprint',
        duration: '2 weeks',
        description:
          'We map your live patient acquisition process, identify 3\u20115 high\u2011ROI automation targets, and deliver an ROI snapshot with a 90\u2011day automation roadmap. $3K, credited toward your first Sprint.',
      },
      {
        phase: 'Process Automation Sprint',
        duration: '4 weeks',
        description:
          'We deploy 2\u20113 production automations from the BeemFlow template library, configured for your PMS, CRM, and communication tools. One process area per sprint.',
      },
      {
        phase: 'Managed Automation',
        duration: 'Ongoing',
        description:
          'Monitoring, incident handling, quarterly reviews, and new automation targets as your group evolves. Clear SLAs so your team knows what BeemFlow manages vs. what they own.',
      },
    ],
  },

  risk: {
    heading: 'Your operation, your\u00A0systems',
    points: [
      'Everything runs on your infrastructure, your accounts. No vendor lock\u2011in.',
      'If, by the end of the Blueprint, we haven\u2019t identified at least one automation you believe is worth deploying and shown a realistic path to reclaiming 10+ hours/month, we\u2019ll keep working the Blueprint at our cost until we do.',
      'All automations, dashboards, and documentation are yours. We build on n8n and open tools wherever practical.',
      'We work around your PMS, not inside clinical records. Early automations focus on front\u2011office operations: intake, scheduling, reminders, and reporting.',
      '30\u2011day stabilization included on every deployment. If something we built breaks under normal use, we fix it.',
      'Managed Automation required for critical\u2011path automations (minimum 6 months). After that, continue month\u2011to\u2011month or transition to per\u2011incident support.',
    ],
  },

  cta: {
    heading: 'Map this process to your\u00A0group',
    body: 'The Blueprint takes 2 weeks. You\u2019ll get a structured map of your patient acquisition process, a prioritized list of automation targets with ROI projections, and a 90\u2011day automation roadmap.',
    buttonText: 'Book the Blueprint',
  },
};

// ─── Solution: Commercial Cleaning & Facility Services ───

export const SOLUTION_CLEANING: Solution = {
  slug: 'cleaning-bid-to-inspect',
  navLabel: 'Facility Services: Bid\u2011to\u2011Inspect',
  hubDescription:
    'Commercial cleaning companies lose 20\u201340 hours/month to manual scheduling, missed\u2011site scrambles, and invoice reconciliation. We automate bid\u2011to\u2011inspect so every site is covered and every contract is profitable.',

  seo: {
    title:
      'BeemFlow | Bid\u2011to\u2011Inspect Automation for Commercial Cleaning & Facility Services',
    description:
      'Automate bid tracking, contract\u2011to\u2011schedule generation, daily dispatch, quality inspections, and invoice reconciliation for commercial cleaning and facility services companies.',
    ogImageAlt:
      'BeemFlow commercial cleaning bid-to-inspect automation overview',
  },

  hero: {
    eyebrow: 'Commercial cleaning & facility services',
    headline: 'Stop managing 60 sites with a spreadsheet and a group\u00A0text.',
    headlineAccent: 'Bid to inspect, automated.',
    body: 'New contracts get built into schedules by hand. A site gets missed because someone called out and nobody rerouted coverage. The client calls to complain before you know there\u2019s a problem. We deploy production\u2011ready process automation across your entire bid\u2011to\u2011inspect lifecycle, starting in 2\u00A0weeks.',
  },

  fit: {
    heading: 'Built for facility services companies who recognize\u00A0this',
    bullets: [
      { text: '$3M\u2013$50M+ revenue in commercial cleaning, janitorial, or facility maintenance' },
      { text: 'PE\u2011backed, roll\u2011up, or founder\u2011operated with growth pressure' },
      { text: 'Multi\u2011site contracts with 50\u2013500+ field employees' },
      { text: 'Running a mix of cleaning management software, spreadsheets, group texts, and clipboards' },
      { text: 'Leadership wants per\u2011contract margin visibility and consistent quality across every site' },
    ],
  },

  before: {
    heading: 'The process you\u2019re actually\u00A0running',
    narrative:
      'Bids are built in Word docs. Nobody tracks which ones are pending or what the win rate looks like. A new contract starts and someone manually builds the cleaning schedule from a PDF scope of work. Cleaners don\u2019t always know which site they\u2019re going to until they call in. Inspections happen when a manager has time, which means they don\u2019t. And your monthly P&L by contract is an approximation because time tracking and invoicing don\u2019t talk to each other.',
    bullets: [
      'Bids and proposals are built in Word or spreadsheets. No standard template, no pipeline tracking, no systematic follow\u2011up. You don\u2019t even know your win rate',
      'Contract\u2011to\u2011schedule is manual. Someone reads the contract and builds the recurring schedule by hand. Scope changes don\u2019t propagate. One missed schedule change can cost a $10K\u2013$50K contract',
      'Daily scheduling is a group text or a clipboard. Cleaners don\u2019t always know their assignment until they call the office. That\u2019s 15\u201320 minutes of dead time per crew, per day',
      'Call\u2011outs leave sites uncovered. Nobody reroutes coverage until the client complains. Every missed\u2011site incident puts the contract relationship at risk',
      'Quality inspections are inconsistent. Some sites get checked, some don\u2019t. Client complaints are the de facto QA system, and complaints drive churn',
      'Hours worked don\u2019t reconcile cleanly with contract terms. You\u2019re guessing at margin by contract. A 3\u20115% margin miss across a $5M book of business is $150K\u2013$250K in invisible leakage',
    ],
  },

  after: {
    heading: 'What it looks like after\u00A0BeemFlow',
    steps: [
      {
        label: 'Bid Tracked & Followed Up',
        description:
          'Every open bid is logged, tracked, and followed up systematically. Win/loss data is captured, not guessed.',
      },
      {
        label: 'Contract \u2192 Schedule Generated',
        description:
          'New contracts auto\u2011generate recurring schedules with site details, scope, and staffing requirements. Changes propagate automatically.',
      },
      {
        label: 'Daily Dispatch & Coverage',
        description:
          'Cleaners get their assignments automatically. Call\u2011outs trigger coverage reassignment before a site gets missed.',
      },
      {
        label: 'Inspection Workflow',
        description:
          'Scheduled inspections with simple mobile checklists. Results logged, issues flagged, client\u2011facing reports generated automatically.',
      },
      {
        label: 'Invoice Reconciliation & Reporting',
        description:
          'Hours, contract terms, and invoicing reconciled automatically. Margin by contract, by site, visible in real time.',
      },
    ],
  },

  build: {
    heading: 'What we deploy',
    items: [
      {
        title: 'A pipeline you can actually see',
        description:
          'Every open bid logged and followed up systematically. Win/loss data captured so you can see what\u2019s converting and what\u2019s not.',
      },
      {
        title: 'New contracts that schedule themselves',
        description:
          'New contracts auto\u2011generate recurring schedules with site details, scope, and staffing. Scope changes propagate without manual rework.',
      },
      {
        title: 'Crews that know where to go',
        description:
          'Cleaners get site assignments via SMS or app with location, scope, and access notes. No calling the office to find out where to go.',
      },
      {
        title: 'Call\u2011outs handled before the client knows',
        description:
          'When someone calls out, the automation finds available coverage and reassigns before the site gets missed. You hear about it, not the client.',
      },
      {
        title: 'Quality that\u2019s tracked, not assumed',
        description:
          'Scheduled inspections on mobile with photo capture and issue routing. Results feed a quality dashboard you can share with clients.',
      },
      {
        title: 'Margin you can see by contract',
        description:
          'Hours reconciled against contract terms automatically. Per\u2011contract margin and portfolio P&L in real time. Missed sites and renewals trigger alerts early.',
      },
    ],
  },

  outcomes: {
    heading: 'What changes',
    items: [
      {
        metric: 'Bid follow\u2011up: sporadic \u2192 100% systematic',
        description:
          'Every open bid gets a defined follow\u2011up sequence. Pipeline visibility replaces guesswork.',
      },
      {
        metric: 'Missed\u2011site incidents: reactive \u2192 prevented',
        description:
          'Call\u2011outs trigger automatic coverage reassignment. The client doesn\u2019t find out before you do.',
      },
      {
        metric: 'Inspection coverage: ad\u2011hoc \u2192 scheduled and tracked',
        description:
          'Inspections run on a defined cadence with accountability. Quality issues get flagged and routed, not discovered at contract renewal.',
      },
      {
        metric: 'Invoice accuracy: approximation \u2192 reconciled automatically',
        description:
          'Hours and contract terms match. Margin visibility by contract, by site, in real time.',
      },
      {
        metric: '25\u201345 hours/month reclaimed',
        description:
          'Across ops managers, schedulers, and admin. Hours that go back to winning new contracts and managing quality.',
      },
    ],
    footnote:
      'Metrics are directional based on typical engagement outcomes. Your Blueprint will identify specific targets for your operation.',
  },

  story: {
    label: 'What this looks like in practice',
    narrative:
      'A PE\u2011backed commercial cleaning company managing 85 sites was running scheduling through a shared spreadsheet and a group text. Call\u2011outs left 2\u20113 sites uncovered per week on average. The client usually reported the problem before the ops team knew. Inspections happened when a manager had time, which was roughly 40% of contracted sites. Invoice reconciliation against contract terms took the office manager a full day each month, and margin by contract was largely a guess. After deploying contract\u2011to\u2011schedule automation, call\u2011out coverage reassignment, scheduled inspection workflows, and automated hour/contract reconciliation, missed\u2011site incidents dropped to near zero, inspection coverage reached 95%+, and the company gained per\u2011contract margin visibility for the first time. The ops team estimated 30\u201335 hours/month reclaimed across scheduling, dispatch, and admin.',
    footnote:
      'Composite illustration based on common engagement patterns. Specific results depend on your operation\u2019s starting point and scope.',
  },

  timeline: {
    heading: 'How we get there',
    phases: [
      {
        phase: 'Blueprint',
        duration: '2 weeks',
        description:
          'We map your live bid\u2011to\u2011inspect process, identify 3\u20115 high\u2011ROI automation targets, and deliver an ROI snapshot with a 90\u2011day automation roadmap. $3K, credited toward your first Sprint.',
      },
      {
        phase: 'Process Automation Sprint',
        duration: '4 weeks',
        description:
          'We deploy 2\u20113 production automations from the BeemFlow template library, configured for your cleaning management platform, CRM, and scheduling tools. One process area per sprint.',
      },
      {
        phase: 'Managed Automation',
        duration: 'Ongoing',
        description:
          'Monitoring, incident handling, quarterly reviews, and new automation targets as your operation evolves. Clear SLAs so your team knows what BeemFlow manages vs. what they own.',
      },
    ],
  },

  risk: {
    heading: 'Your operation, your\u00A0systems',
    points: [
      'Everything runs on your infrastructure, your accounts. No vendor lock\u2011in.',
      'If, by the end of the Blueprint, we haven\u2019t identified at least one automation you believe is worth deploying and shown a realistic path to reclaiming 10+ hours/month, we\u2019ll keep working the Blueprint at our cost until we do.',
      'All automations, dashboards, and documentation are yours. We build on n8n and open tools wherever practical.',
      '30\u2011day stabilization included on every deployment. If something we built breaks under normal use, we fix it.',
      'Managed Automation required for critical\u2011path automations (minimum 6 months). After that, continue month\u2011to\u2011month or transition to per\u2011incident support.',
    ],
  },

  cta: {
    heading: 'Map this process to your\u00A0operation',
    body: 'The Blueprint takes 2 weeks. You\u2019ll get a structured map of your bid\u2011to\u2011inspect process, a prioritized list of automation targets with ROI projections, and a 90\u2011day automation roadmap.',
    buttonText: 'Book the Blueprint',
  },
};

// ─── Solution: Field Services ───

export const SOLUTION_FIELD_SERVICES: Solution = {
  slug: 'field-services-quote-to-invoice',
  navLabel: 'Field Services: Quote\u2011to\u2011Invoice',
  hubDescription:
    'B2B field service companies lose 20\u201340 hours/month to manual dispatch, missing field data, and 10\u201114\u2011day invoice lag. We automate quote\u2011to\u2011invoice so the office stops being the bottleneck.',

  seo: {
    title:
      'BeemFlow | Quote\u2011to\u2011Invoice Automation for B2B Field Service Companies',
    description:
      'Automate quoting, dispatch, field completion capture, service reporting, and invoicing for multi\u2011crew field service contractors. Deployed in weeks on your existing stack.',
    ogImageAlt:
      'BeemFlow field services quote-to-invoice automation overview',
  },

  hero: {
    eyebrow: 'B2B field service companies',
    headline: 'Stop running your operation through one person\u2019s\u00A0head.',
    headlineAccent: 'Quote to invoice, automated.',
    body: 'When they\u2019re out, things break. Techs call the office for info that should have been in the work order. Invoices don\u2019t go out until billing chases the field. We deploy production\u2011ready process automation across your entire quote\u2011to\u2011invoice lifecycle, starting in 2\u00A0weeks.',
  },

  fit: {
    heading: 'Built for field service companies who recognize\u00A0this',
    bullets: [
      { text: '$3M\u2013$50M+ revenue in recurring or project\u2011based B2B field services' },
      { text: 'PE\u2011backed, roll\u2011up, or founder\u2011operated with growth pressure' },
      { text: '10\u2013200 field techs across multiple crews or service territories' },
      { text: 'Running a scheduling platform, a shared calendar, or a mix of both' },
      { text: 'Leadership wants service completion rates and billing visibility without asking the coordinator' },
    ],
  },

  before: {
    heading: 'The process you\u2019re actually\u00A0running',
    narrative:
      'Your service coordinator is the system. They know which crew is available, which sites have access quirks, which clients have pending proposals, and which contracts are up for renewal. When they\u2019re out, things break. Techs call the office for information that should have been in the work order. Invoices don\u2019t go out until billing chases down the field. Renewal conversations happen late, if at all.',
    bullets: [
      'Proposals get built from a template, sent by email, and disappear into a thread. No pipeline, no follow\u2011up. At a 30% close rate, every 10 unfollowed proposals is $50K\u2013$200K in lost annual contract value',
      'Scheduling lives in a platform the office uses 60% of. Jobs get double\u2011assigned. Crews show up at the wrong site. Each wasted truck roll is $200\u2013$500 in labor and fuel',
      'Techs leave the yard without full site info. Wrong equipment, missing access details, outdated scope. Return trips and callbacks eat 5\u201310% of field capacity',
      'Job completion reaches the office when the tech calls or doesn\u2019t. Billing waits. That\u2019s $50K\u2013$150K in unbilled work sitting in limbo at any given time',
      'Service checklists and sign\u2011offs live on paper forms or not at all. Client\u2011facing reports are a manual scramble that takes 2\u20114 hours per major account',
      'Invoicing is 10\u201314 days behind because nothing closes until field data makes it back to the office. On a $500K/month operation, that\u2019s $250K perpetually in AR float',
      'Contract renewal dates sit in a spreadsheet. Renewals slip because there was no trigger. Lost renewals are the most expensive kind of churn',
    ],
  },

  after: {
    heading: 'What it looks like after\u00A0BeemFlow',
    steps: [
      {
        label: 'Quote Tracked & Followed Up',
        description:
          'Every proposal logged, tracked, and followed up automatically. Renewal quotes triggered before contracts lapse.',
      },
      {
        label: 'Work Order Generated & Dispatched',
        description:
          'Accepted jobs auto\u2011generate work orders with scope, site details, access info, and equipment. Techs get what they need before they leave.',
      },
      {
        label: 'Field Completion Captured',
        description:
          'Techs mark jobs done from their phone. Notes, photos, and readings captured on site, not reconstructed later.',
      },
      {
        label: 'Service Report Delivered',
        description:
          'Completed job data generates a client\u2011facing service report automatically. No formatting, no chasing the tech for notes.',
      },
      {
        label: 'Invoice & Renew',
        description:
          'Completion triggers invoicing. Renewal dates trigger outreach in advance. Nothing lapse because nobody remembered to check.',
      },
    ],
  },

  build: {
    heading: 'What we deploy',
    items: [
      {
        title: 'Proposals that don\u2019t disappear into email',
        description:
          'Every open proposal logged and followed up systematically. Nothing goes cold while it sits in an email thread.',
      },
      {
        title: 'Work orders the field can actually use',
        description:
          'Accepted jobs produce work orders with site details, scope, access info, and tech assignment. The field gets what it needs before dispatch.',
      },
      {
        title: 'Dispatch without calling the office',
        description:
          'Techs get job details and site info automatically. No calling the office to find out where to go or what to bring.',
      },
      {
        title: 'Job data captured on site, not reconstructed later',
        description:
          'Simple phone\u2011based forms for notes, photos, and readings. Job data captured on site and fed back to the office in real time.',
      },
      {
        title: 'Client reports that write themselves',
        description:
          'Completion data generates client\u2011facing reports automatically. Contract renewal dates trigger advance outreach before the window closes.',
      },
      {
        title: 'Invoices out the same day the job closes',
        description:
          'Job sign\u2011off kicks off invoicing the same day. Completion rates, open billing, and renewal pipeline visible without asking the coordinator.',
      },
    ],
  },

  outcomes: {
    heading: 'What changes',
    items: [
      {
        metric: 'Quote follow\u2011up: sporadic \u2192 systematic',
        description:
          'Every open proposal gets a defined follow\u2011up sequence. Renewal quotes go out before the contract window closes.',
      },
      {
        metric: 'Techs arrive prepared',
        description:
          'Scope, site access, and equipment in the work order before they leave the yard. Fewer callbacks, fewer wasted trips.',
      },
      {
        metric: 'Invoice lag: 10\u201314 days \u2192 same day',
        description:
          'Job completion triggers the invoice. The gap between finishing the work and sending the bill closes.',
      },
      {
        metric: 'Service reports: manual scramble \u2192 auto\u2011generated',
        description:
          'Field data flows directly into client\u2011facing reports. No formatting, no chasing techs for notes after the fact.',
      },
      {
        metric: '20\u201335 hours/month reclaimed',
        description:
          'Across scheduling, dispatch, admin, and billing. Hours that go back to running the business, not being the system.',
      },
    ],
    footnote:
      'Metrics are directional based on typical engagement outcomes. Your Blueprint will identify specific targets for your operation.',
  },

  story: {
    label: 'What this looks like in practice',
    narrative:
      'A B2B mechanical services contractor with 35 field techs was running the entire operation through one service coordinator\u2019s head. Proposals disappeared into email. The team didn\u2019t track win rates and had no follow\u2011up process. Techs regularly left the yard without complete site info, driving 2\u20113 return trips per week at $300\u2013$500 each. Invoicing ran 12 days behind job completion on average, creating a persistent $120K AR float. Contract renewals were tracked on a spreadsheet that nobody checked. After deploying proposal tracking with follow\u2011up sequences, auto\u2011generated work orders with site details, mobile job completion forms, and completion\u2011triggered invoicing, invoice lag dropped to same\u2011day, return trips fell by roughly 80%, and the company caught three contract renewals that would have lapsed. The coordinator estimated 25\u201330 hours/month freed up across the office and billing team.',
    footnote:
      'Composite illustration based on common engagement patterns. Specific results depend on your operation\u2019s starting point and scope.',
  },

  timeline: {
    heading: 'How we get there',
    phases: [
      {
        phase: 'Blueprint',
        duration: '2 weeks',
        description:
          'We map your live quote\u2011to\u2011invoice process, identify 3\u20115 high\u2011ROI automation targets, and deliver an ROI snapshot with a 90\u2011day automation roadmap. $3K, credited toward your first Sprint.',
      },
      {
        phase: 'Process Automation Sprint',
        duration: '4 weeks',
        description:
          'We deploy 2\u20113 production automations from the BeemFlow template library, configured for your scheduling platform, CRM, and field tools. One process area per sprint.',
      },
      {
        phase: 'Managed Automation',
        duration: 'Ongoing',
        description:
          'Monitoring, incident handling, quarterly reviews, and new automation targets as your operation evolves. Clear SLAs so your team knows what BeemFlow manages vs. what they own.',
      },
    ],
  },

  risk: {
    heading: 'Your operation, your\u00A0systems',
    points: [
      'Everything runs on your infrastructure, your accounts. No vendor lock\u2011in.',
      'If, by the end of the Blueprint, we haven\u2019t identified at least one automation you believe is worth deploying and shown a realistic path to reclaiming 10+ hours/month, we\u2019ll keep working the Blueprint at our cost until we do.',
      'All automations, dashboards, and documentation are yours. We build on n8n and open tools wherever practical.',
      '30\u2011day stabilization included on every deployment. If something we built breaks under normal use, we fix it.',
      'Managed Automation required for critical\u2011path automations (minimum 6 months). After that, continue month\u2011to\u2011month or transition to per\u2011incident support.',
    ],
  },

  cta: {
    heading: 'Map this process to your\u00A0operation',
    body: 'The Blueprint takes 2 weeks. You\u2019ll get a structured map of your quote\u2011to\u2011invoice process, a prioritized list of automation targets with ROI projections, and a 90\u2011day automation roadmap.',
    buttonText: 'Book the Blueprint',
  },
};

// ─── All Solutions (used by hub and nav) ───

export const SOLUTIONS: Solution[] = [
  SOLUTION_MANUFACTURING,
  SOLUTION_FIELD_SERVICES,
  SOLUTION_CLEANING,
  SOLUTION_HOME_SERVICES,
  SOLUTION_HEALTHCARE,
];
