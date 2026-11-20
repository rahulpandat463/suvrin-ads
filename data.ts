/**
 * ==============================================================================
 * SUVRIN TECHNOLOGIES — ALL WEBSITE DATA (SINGLE CONSOLIDATED DATA FILE)
 * ==============================================================================
 * This single file contains all content, mock data, and dropdown options used
 * across the entire application.
 */

// ------------------------------------------------------------------------------
// 1. COMPANY & CONTACT INFORMATION
// ------------------------------------------------------------------------------
export interface CompanyContact {
  phoneDisplay: string;
  phoneTel: string;
  whatsappUrl: string;
  whatsappNumber: string;
  email: string;
  address: string;
  legalName: string;
  globalPresence: string;
}

export const COMPANY_INFO: CompanyContact = {
  phoneDisplay: "+91 95604 55637",
  phoneTel: "+919560455637",
  whatsappUrl:
    "https://wa.me/919560455637?text=Hi%20Suvrin%20team,%20I'm%20interested%20in%20Odoo%20Business%20ERP%20in%20Gurgaon",
  whatsappNumber: "919560455637",
  email: "sudeep@suvrin.com",
  address: "P1/55, DLF Phase 2, Cyber City, Gurgaon — 122002",
  legalName: "Suvrin Technologies Pvt. Ltd.",
  globalPresence: "UAE (Dubai) • USA (Delaware)",
};

// ------------------------------------------------------------------------------
// 2. NAVIGATION & CHAPTER PROGRESS RAIL
// ------------------------------------------------------------------------------
export interface ChapterInfo {
  id: string;
  number: string;
  title: string;
}

export const CHAPTERS: ChapterInfo[] = [
  { id: "chapter-hero", number: "01", title: "Overview" },
  { id: "chapter-transformation", number: "02", title: "Transformation" },
  { id: "chapter-pipeline", number: "03", title: "Connected Flow" },
  { id: "chapter-compliance", number: "04", title: "India Compliance" },
  { id: "chapter-included", number: "05", title: "What's Included" },
  { id: "chapter-ownership", number: "06", title: "Ownership" },
  { id: "chapter-pricing", number: "07", title: "Pricing Levers" },
  { id: "chapter-faq", number: "08", title: "FAQs" },
];

// ------------------------------------------------------------------------------
// 3. HERO SECTION HIGHLIGHTS
// ------------------------------------------------------------------------------
export interface HeroHighlight {
  title: string;
  subtitle: string;
}

export const HERO_HIGHLIGHTS: HeroHighlight[] = [
  { title: "Odoo MRP", subtitle: "Shop Floor App" },
  { title: "Multi-WH", subtitle: "Gurgaon / NCR" },
  { title: "GST Ready", subtitle: "e-Invoice & e-Way" },
  { title: "Costing", subtitle: "Live Job Costing" },
  { title: "Bilingual", subtitle: "Hindi & English" },
  { title: "Audits", subtitle: "On-Site in Gurgaon" },
];

// ------------------------------------------------------------------------------
// 4. ADVISORY PILLARS
// ------------------------------------------------------------------------------
export interface AdvisoryPillar {
  num: string;
  title: string;
  desc: string;
  borderColor: string;
  numColor: string;
}

export const ADVISORY_PILLARS: AdvisoryPillar[] = [
  {
    num: "01 / CONSULTING",
    title: "Business-First Consulting",
    desc: "We audit your shop floor routing, scrap percentages, and multi-currency supply chain before configuring Odoo.",
    borderColor: "border-brand-blue",
    numColor: "text-brand-blue",
  },
  {
    num: "02 / MASTERY",
    title: "Odoo Enterprise Mastery",
    desc: "Certified specialists delivering custom Python modules, automated workflow triggers, and legacy data cleansing.",
    borderColor: "border-brand-blue",
    numColor: "text-brand-blue",
  },
  {
    num: "03 / DEPTH",
    title: "Business Depth",
    desc: "Engineered for multi-level BOMs, finite work center scheduling, sub-assembly staging, and batch traceability.",
    borderColor: "border-brand-green",
    numColor: "text-brand-green-deep",
  },
  {
    num: "04 / PRESENCE",
    title: "Gurgaon & Pan-India Delivery",
    desc: "Direct Gurgaon desk. Rapid on-site factory visits across IMT Manesar, Udyog Vihar, Faridabad, Okhla, and Greater Noida.",
    borderColor: "border-brand-green",
    numColor: "text-brand-green-deep",
  },
];

// ------------------------------------------------------------------------------
// 5. CONNECTED PIPELINE STEPS
// ------------------------------------------------------------------------------
export interface PipelineStep {
  num: string;
  icon: string;
  title: string;
  desc: string;
  linkText: string;
}

export const PIPELINE_STEPS: PipelineStep[] = [
  {
    num: "01",
    icon: "trending_up",
    title: "Sales & Demand Forecast",
    desc: "INR (₹) sales orders convert automatically into business demand forecasts and delivery commitments.",
    linkText: "➔ Feeds MRP engine",
  },
  {
    num: "02",
    icon: "account_tree",
    title: "BOM & MRP Engine",
    desc: "Multi-level BOM breakdown verifies component availability, lead times, scrap allowance, and sub-assemblies.",
    linkText: "➔ Triggers auto-procurement",
  },
  {
    num: "03",
    icon: "shopping_cart",
    title: "Automated Procurement",
    desc: "Auto-generate RFQs and purchase orders based on minimum stock rules and supplier lead times with multi-tier approvals.",
    linkText: "➔ Routes to Goods Receipt",
  },
  {
    num: "04",
    icon: "fact_check",
    title: "Goods Receipt & QC Quarantine",
    desc: "Barcode-scanned raw material intake with lot/batch tracking, test cert verification, and quarantine routing.",
    linkText: "➔ Releases raw stock to floor",
  },
  {
    num: "05",
    icon: "precision_manufacturing",
    title: "Work Center Tablets",
    desc: "Shop floor tablets guide operators with digital work instructions, machine logging, and real-time scrap recording.",
    linkText: "➔ Monitors live work center OEE",
  },
  {
    num: "06",
    icon: "rule",
    title: "In-Line Quality Checkpoints",
    desc: "Quality gates trigger automated Non-Conformance Reports (NCR) immediately upon parameter deviation.",
    linkText: "➔ Validates finished quality",
  },
  {
    num: "07",
    icon: "local_shipping",
    title: "Packaging & Dispatch / e-Way Bill",
    desc: "Serialised finished goods packaging, automated packing lists, delivery notes, and e-way bill transport dispatch.",
    linkText: "➔ Triggers customer delivery",
  },
  {
    num: "08",
    icon: "receipt_long",
    title: "Job Costing & Indian GST",
    desc: "Instant WIP-to-COGS entries, actual cost vs standard variance analysis, and GST-compliant e-invoicing & e-way bills.",
    linkText: "✓ Live Financial Settlement",
  },
];

// ------------------------------------------------------------------------------
// 6. INDIA COMPLIANCE & INDUSTRY SECTORS
// ------------------------------------------------------------------------------
export interface CompliancePoint {
  title: string;
  desc: string;
}

export interface IndustrySector {
  title: string;
  desc: string;
}

export const COMPLIANCE_POINTS: CompliancePoint[] = [
  {
    title: "Indian GST & e-Invoicing Ready:",
    desc: "Automated CGST/SGST/IGST tax reports, e-Way bills, and B2B e-invoicing generation.",
  },
  {
    title: "INR-Centric Accounting:",
    desc: "Multi-currency conversion (USD, EUR, AED, GBP) with live FX rates.",
  },
  {
    title: "Multi-State & SEZ/EOU:",
    desc: "Unified consolidation for multi-state GSTINs and SEZ/EOU units.",
  },
  {
    title: "Multi-Warehouse Routing:",
    desc: "Inter-warehouse transfers between Gurgaon, Manesar, Delhi NCR, and regional depots.",
  },
  {
    title: "Bilingual System:",
    desc: "Native English and Hindi documentation, reports, and UI toggles.",
  },
  {
    title: "On-Site Factory Audits:",
    desc: "Suvrin engineers physically walk your production lines in IMT Manesar, Udyog Vihar, Faridabad, or Greater Noida.",
  },
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  { title: "Metal & Steel", desc: "MT/KG & scrap" },
  { title: "Equipment & ETO", desc: "Serial tracking" },
  { title: "Plastics & Polymers", desc: "Extrusion & regrind" },
  { title: "Packaging", desc: "GSM & die-cuts" },
  { title: "Joinery & Wood", desc: "Project BOMs" },
  { title: "Food & Beverage", desc: "FSSAI & expiry" },
  { title: "Switchgear", desc: "Testing sign-offs" },
  { title: "Chemicals", desc: "MSDS & blending" },
];

// ------------------------------------------------------------------------------
// 7. WHAT'S INCLUDED (DELIVERABLES)
// ------------------------------------------------------------------------------
export interface DeliverableItem {
  number: string;
  title: string;
  desc: string;
  icon: string;
  highlight: string;
}

export const DELIVERABLES: DeliverableItem[] = [
  {
    number: "01",
    title: "One-week discovery",
    desc: "Process mapping, current-system audit, gap analysis, and a written diagnostic. Output usable on its own even if you don't proceed.",
    icon: "explore",
    highlight: "Standalone Diagnostic Report",
  },
  {
    number: "02",
    title: "Fixed-scope blueprint",
    desc: "Module map, integration list, custom-development scope, data-migration plan, training plan, and a written quote. No hourly billing surprises.",
    icon: "assignment",
    highlight: "Guaranteed Scope & Price",
  },
  {
    number: "03",
    title: "Module configuration",
    desc: "All standard Odoo modules configured to your business processes — Sales, Purchase, Inventory, Manufacturing, Accounting, HR, Project, and CRM as scoped.",
    icon: "tune",
    highlight: "Tailored to Your Operations",
  },
  {
    number: "04",
    title: "Custom modules and workflows",
    desc: "Python-based custom development for behavior the standard modules don't cover, written to upgrade-safe patterns.",
    icon: "terminal",
    highlight: "Upgrade-Safe Architecture",
  },
  {
    number: "05",
    title: "Data migration",
    desc: "Master-data and transactional-data migration from your current system, including parallel-run reconciliation and a clean cutover.",
    icon: "move_up",
    highlight: "Reconciled Clean Cutover",
  },
  {
    number: "06",
    title: "Integrations",
    desc: "Two-way connectors to your CRM, payment gateway, shipping carriers, e-commerce, and any vertical SaaS your team relies on.",
    icon: "hub",
    highlight: "Real-Time Two-Way Connectors",
  },
  {
    number: "07",
    title: "Role-based training",
    desc: "On-site or remote training for end users, super-admins, and finance/operations leadership. Recorded sessions and a playbook for ongoing onboarding.",
    icon: "school",
    highlight: "Recorded Onboarding Playbooks",
  },
  {
    number: "08",
    title: "90-day hypercare",
    desc: "Dedicated post-launch support team for 90 days, average 18-minute first-response time during business hours, with a clean handoff to retainer or on-demand support.",
    icon: "support_agent",
    highlight: "18-Min Avg Business Response",
  },
];

// ------------------------------------------------------------------------------
// 8. STAGE-BY-STAGE OWNERSHIP
// ------------------------------------------------------------------------------
export interface StageItem {
  step: string;
  title: string;
  duration: string;
  icon: string;
  clientRole: string;
  clientDetail: string;
  suvrinRole: string;
  suvrinDetail: string;
}

export const STAGES: StageItem[] = [
  {
    step: "01",
    title: "Discovery",
    duration: "Week 1",
    icon: "manage_search",
    clientRole: "Process Walkthroughs & Data Access",
    clientDetail: "Process walkthroughs with department heads; access to current ERP and historical data.",
    suvrinRole: "Diagnostic & Risk Register",
    suvrinDetail: "A written diagnostic report with complete module map and pre-emptive risk register.",
  },
  {
    step: "02",
    title: "Blueprint",
    duration: "Weeks 2 – 3",
    icon: "architecture",
    clientRole: "Scope & Spec Sign-Off",
    clientDetail: "Sign off the fixed-scope quote, custom workflow list, and configuration spec.",
    suvrinRole: "Guaranteed Architecture Quote",
    suvrinDetail: "Fixed-price quote, config spec, custom-dev list, integration and data migration plans.",
  },
  {
    step: "03",
    title: "Build",
    duration: "Weeks 4 – 8",
    icon: "precision_manufacturing",
    clientRole: "Weekly Review & Feedback",
    clientDetail: "Weekly demo reviews and continuous hands-on validation in the dedicated UAT sandbox.",
    suvrinRole: "2-Week Sprints & Live UAT",
    suvrinDetail: "Iterative two-week agile sprints, with a live working UAT environment from week one.",
  },
  {
    step: "04",
    title: "User Acceptance",
    duration: "Weeks 9 – 10",
    icon: "assignment_turned_in",
    clientRole: "Real Workflow Execution",
    clientDetail: "End users run their day-to-day operational workflows against a sign-off checklist.",
    suvrinRole: "Role Training & Bug Triage",
    suvrinDetail: "Hands-on role training, onboarding playbooks, and rapid 24h bug triage before cutover.",
  },
  {
    step: "05",
    title: "Go-Live",
    duration: "Cutover Weekend",
    icon: "rocket_launch",
    clientRole: "Cutover Availability",
    clientDetail: "Key department leads available across cutover weekend for final balance validation.",
    suvrinRole: "72h On-Call & Rollback Plan",
    suvrinDetail: "Delta data migration, rehearsed rollback protocols, and 72 hours of uninterrupted cover.",
  },
  {
    step: "06",
    title: "Hypercare",
    duration: "90 Days Post-Launch",
    icon: "verified_user",
    clientRole: "Direct Ticket Channel",
    clientDetail: "Raise queries and operational tweak requests through the dedicated named channel.",
    suvrinRole: "Dedicated India Support Team",
    suvrinDetail: "90 days of dedicated India-based support with named senior Odoo consultants.",
  },
];

// ------------------------------------------------------------------------------
// 9. TYPICAL IMPLEMENTATION TIMELINE TIERS
// ------------------------------------------------------------------------------
export interface TimelineTier {
  title: string;
  badge: string;
  duration: string;
  scope: string;
  desc: string;
  features: string[];
  isPopular?: boolean;
}

export const TIMELINE_TIERS: TimelineTier[] = [
  {
    title: "Starter Implementation",
    badge: "Quick-Start",
    duration: "6 – 8 Weeks",
    scope: "2–3 Modules • Clean Data",
    desc: "Smaller starter projects with focused scope and ready master data, delivering rapid time-to-value with standard configurations.",
    features: [
      "Standard Odoo core workflows",
      "Master data clean import",
      "Essential role-based training",
      "Go-live support & handoff",
    ],
  },
  {
    title: "Mid-Market Enterprise",
    badge: "Most Common",
    duration: "12 – 20 Weeks",
    scope: "50–500 Employees • 4–8 Modules • 3 Integrations",
    desc: "A typical mid-market implementation runs 12–20 weeks from kickoff to go-live, covering end-to-end departmental operations.",
    features: [
      "End-to-end manufacturing & inventory",
      "Indian GST, e-Invoicing & multi-currency accounting",
      "3 external API / ERP integrations",
      "Live UAT sandbox & parallel dry-run",
    ],
    isPopular: true,
  },
  {
    title: "Large Multi-Entity",
    badge: "Holding Groups",
    duration: "6 – 9 Months",
    scope: "Multi-Company • Phased by Business Unit",
    desc: "Large multi-entity rollouts phased by subsidiary or manufacturing division to maintain complete business continuity.",
    features: [
      "Inter-company automation & consolidation",
      "Phased rollout across divisions/states",
      "Multi-facility shop floor tablet routing",
      "Dedicated Gurgaon engineering team on-site",
    ],
  },
];

// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 10. WHAT AFFECTS THE PRICE (PRICING & IMPLEMENTATION LEVERS)
// ------------------------------------------------------------------------------
export interface PricingLever {
  id: string;
  number: string;
  title: string;
  category: string;
  badge: string;
  badgeType: "savings" | "timeline" | "variable" | "integration" | "data" | "compliance" | "training";
  icon: string;
  summary: string;
  keyPoints: string[];
  impactCallout: {
    label: string;
    value: string;
    subtext: string;
  };
  comparison: {
    leanTitle: string;
    leanDesc: string;
    scaleTitle: string;
    scaleDesc: string;
  };
  discoveryAdvantage: string;
}

export const PRICING_LEVERS: PricingLever[] = [
  {
    id: "lever-licence-mix",
    number: "01",
    title: "Licence Mix: Full Users vs. Light Users",
    category: "License Mix & Users",
    badge: "Largest Ongoing Budget Factor (Up to 70% Savings)",
    badgeType: "savings",
    icon: "badge",
    summary:
      "Not our implementation fee, but usually the biggest number in the overall ERP budget. Since Odoo 20, staff who only need time off, expenses, attendance, shop-floor kiosks, barcode scanning, or field-service screens can be configured as Light Users instead of full users. Our discovery models the split before you order.",
    keyPoints: [
      "Odoo 20 Light User Pricing: Staff who only access shop-floor apps, barcode scanners, time off, attendance, or expenses qualify as Light Users (₹195 per user per month in India on Odoo's price list, 22 October 2026) instead of standard Full Users (~₹800–₹1,200/user/mo).",
      "Shop-Floor Reality: In a 100-person factory or warehouse, typically 65–80 floor workers only need barcode scanning or tablet clocking. Placing them on Light User seats saves 60–75% annually on subscription fees.",
      "Discovery Seat Modeling: During our 1-Week Discovery, we audit your organizational chart and model the precise split before you order licenses from Odoo, preventing multi-year license overspend.",
    ],
    impactCallout: {
      label: "Annual License Savings",
      value: "Up to 70%",
      subtext: "via precise Light vs. Full seat modeling",
    },
    comparison: {
      leanTitle: "Unoptimized (100% Full Users)",
      leanDesc: "Paying full license fees for shop floor operators who only clock in or scan barcodes.",
      scaleTitle: "Optimized Hybrid Model",
      scaleDesc: "Floor workers on Light seats (₹195/mo); managers on Full seats.",
    },
    discoveryAdvantage:
      "Discovery models your exact seat split before contract signing so you never overpay Odoo for unneeded full seats.",
  },
  {
    id: "lever-module-count",
    number: "02",
    title: "Number of Modules & Functional Footprint",
    category: "Functional Scope",
    badge: "Scope & Timeline Driver (6–8w vs 12–20w)",
    badgeType: "timeline",
    icon: "view_quilt",
    summary:
      "Each module adds configuration time, data models, workflow rules, security roles, and user testing. A 3-module starter (Sales + Inventory + Accounting) is faster to scope and deploy than a 12-module ERP-wide rollout.",
    keyPoints: [
      "Starter Baseline (3–4 Modules): Sales, Purchase, Inventory, and Accounting — rapid configuration, minimal change resistance, and fast go-live in 6–8 weeks with immediate inventory clarity.",
      "Operations Suite (8–14 Modules): Adds Manufacturing MRP, Multi-level BOM, Quality Control, Maintenance CMMS, Barcode routing, and Subcontracting — requires deeper process engineering.",
      "Phased Strategy Advantage: Deploying core operational modules in Phase 1 and scheduling HR, Payroll, CRM, or Project Accounting in Phase 2 guarantees seamless user adoption without production pauses.",
    ],
    impactCallout: {
      label: "Starter Deployment",
      value: "6 – 8 Wks",
      subtext: "3-module core vs 12-module ERP",
    },
    comparison: {
      leanTitle: "Starter Suite (3–4 Modules)",
      leanDesc: "Sales, Inventory, Purchase & Accounting for rapid time-to-value and low operational friction.",
      scaleTitle: "Full Plant MRP (8–14 Modules)",
      scaleDesc: "End-to-end discrete production, automated work centers, QA gates & live job costing.",
    },
    discoveryAdvantage:
      "We build a modular roadmap in Week 1 so you launch high-value operational fixes first without ERP bloat.",
  },
  {
    id: "lever-custom-dev",
    number: "03",
    title: "Custom Development Scope vs. Standard Odoo",
    category: "Custom Development",
    badge: "Variable Cost Driver (~80% Standard / ~20% Custom)",
    badgeType: "variable",
    icon: "terminal",
    summary:
      "Standard Odoo handles ~80% of common requirements out of the box. The remaining 20% — custom workflows, vertical-specific reports, and unusual approval chains — drives most of the variable project cost.",
    keyPoints: [
      "Standard-First Discipline: We rigorously map your operational requirements against standard Odoo features and automated actions first before writing custom code, keeping your budget lean.",
      "Targeted Custom Python: Reserved strictly for proprietary competitive edges (specialized cutting algorithms, non-standard yield formulas, or complex multi-tier approval matrices).",
      "100% Upgrade-Safe: Every custom module is written by certified senior Python engineers using Odoo's official modular inheritance, ensuring painless upgrades to future Odoo versions.",
    ],
    impactCallout: {
      label: "Out-of-the-Box Coverage",
      value: "~80%",
      subtext: "Standard Odoo core with 0 custom code",
    },
    comparison: {
      leanTitle: "Standard Configuration (~80%)",
      leanDesc: "Native workflows, automated triggers, and standard views with lowest maintenance overhead.",
      scaleTitle: "Bespoke Extensions (~20%)",
      scaleDesc: "Custom Python modules built for proprietary shop-floor algorithms and custom approval logic.",
    },
    discoveryAdvantage:
      "Our gap analysis eliminates redundant custom code, cutting up to 35% off variable development quotes.",
  },
  {
    id: "lever-integrations",
    number: "04",
    title: "Third-Party Integrations & Connectors",
    category: "External Integrations",
    badge: "1–3 Weeks Engineering per Connector",
    badgeType: "integration",
    icon: "hub",
    summary:
      "Each connector to a third-party system (CRM, e-commerce, payment, shipping, vertical SaaS, or plant hardware) is roughly 1–3 weeks of work depending on complexity and the third party's API quality.",
    keyPoints: [
      "Modern REST/GraphQL APIs: E-commerce platforms (Shopify, WooCommerce, Amazon India) and payment gateways (Razorpay, Cashfree, PayU) typically take 1–2 weeks for bi-directional order and stock sync.",
      "Legacy ERP & Finance Bridges: Bi-directional sync with Tally Prime or legacy custom software requires reconciliation rules and data transformation (~2 weeks).",
      "Factory Floor Hardware: Weighbridges (RS-232 serial), machine cycle PLCs/SCADA, and thermal barcode printers require 2–3 weeks including on-site factory floor calibration.",
    ],
    impactCallout: {
      label: "Connector Timeline",
      value: "1 – 3 Wks",
      subtext: "per third-party system or hardware",
    },
    comparison: {
      leanTitle: "Modern REST / Webhook APIs",
      leanDesc: "Standard JSON payloads, webhooks, and documented developer sandbox environments.",
      scaleTitle: "Legacy & Hardware Protocols",
      scaleDesc: "Serial COM ports, custom SOAP endpoints, batch flat files, or banking host-to-host.",
    },
    discoveryAdvantage:
      "We test third-party API credentials, rate limits, and schemas in Week 1 to prevent mid-project blockers.",
  },
  {
    id: "lever-data-migration",
    number: "05",
    title: "Data Migration Complexity & Hygiene",
    category: "Data Readiness",
    badge: "Effort Factor: 1–4 Weeks Data Prep",
    badgeType: "data",
    icon: "database",
    summary:
      "Migrating from a clean modern system is fast. Migrating from a legacy ERP with inconsistent data, duplicate item masters, custom fields, or no API costs more — usually 2–4 weeks of additional cleanup.",
    keyPoints: [
      "Master Data Deduplication: Cleaning up raw material codes, standardizing units of measure (UoMs), and organizing supplier pricing matrices.",
      "Transactional History Depth: Migrating clean opening balance sheets and active open orders (fast, recommended) vs. reconstructing 3–5 years of closed journal entries.",
      "Parallel Reconciliation Dry-Run: We run pre-cutover reconciliation tests comparing trial balance and inventory valuation down to the exact Rupee/paise.",
    ],
    impactCallout: {
      label: "Data Cleanup Window",
      value: "2 – 4 Wks",
      subtext: "for complex or unnormalized legacy data",
    },
    comparison: {
      leanTitle: "Clean Structured Master Data",
      leanDesc: "Normalized CSV templates, verified opening balances, and deduplicated item catalogs.",
      scaleTitle: "Fragmented Legacy Archives",
      scaleDesc: "Multi-year spreadsheets, duplicate SKUs, and missing audit trails requiring deep scrubbing.",
    },
    discoveryAdvantage:
      "We provide structured migration templates in Week 1 to streamline your team's cleanup effort and avoid delays.",
  },
  {
    id: "lever-entities-countries",
    number: "06",
    title: "Number of Countries & Legal Entities",
    category: "Multi-Entity Compliance",
    badge: "+1–2 Weeks per Additional Legal Entity",
    badgeType: "compliance",
    icon: "domain",
    summary:
      "Multi-country or multi-state rollouts add localization (statutory GST, e-invoicing, e-way bills, regional payroll) and consolidated reporting. Each additional legal entity adds roughly 1–2 weeks.",
    keyPoints: [
      "Statutory GST Localization: Indian GST (CGST/SGST/IGST), automated e-Invoicing (IRN generation via IRP), e-Way bill integration, and GSTR-1/3B reconciliation.",
      "SEZ vs. DTA: Handling inter-entity transfers between Special Economic Zones (SEZ) and Domestic Tariff Area (DTA) with bill of entry and customs tracking.",
      "Inter-Company Automation: Automated SO-to-PO mirroring between subsidiaries, central purchasing, and consolidated multi-currency financial balance sheets (INR, USD, EUR, AED).",
    ],
    impactCallout: {
      label: "Per Entity Addition",
      value: "+1–2 Wks",
      subtext: "for localized tax & inter-company setup",
    },
    comparison: {
      leanTitle: "Single Domestic Entity",
      leanDesc: "Unified chart of accounts, single VAT registration, and standard local warehouse rules.",
      scaleTitle: "Multi-Company Holding Group",
      scaleDesc: "Multi-entity consolidation, automated inter-company invoicing, and multi-tax zones.",
    },
    discoveryAdvantage:
      "Our modular entity architecture lets you add future subsidiaries with zero financial restructuring.",
  },
  {
    id: "lever-training-depth",
    number: "07",
    title: "Training Depth & Change Management",
    category: "Change Management",
    badge: "Role-Based Included • Advanced Scoped Separately",
    badgeType: "training",
    icon: "school",
    summary:
      "Standard role-based training is included in every Suvrin proposal. Train-the-trainer programs, recorded course libraries, and ongoing onboarding kits are scoped separately as modular add-ons.",
    keyPoints: [
      "Included Role-Based Training: Interactive hands-on training for department heads, warehouse workers, machine operators, and finance administrators.",
      "Train-the-Trainer Programs: Specialized coaching for internal champions so your team can onboard future factory workers independently.",
      "Custom Video Learning Library: Dedicated screen recordings covering your customized Odoo workflows, shop-floor tablet steps, and approval chains.",
    ],
    impactCallout: {
      label: "Standard Training Included",
      value: "100%",
      subtext: "Role-based training in every quote",
    },
    comparison: {
      leanTitle: "Role-Based Training (Included)",
      leanDesc: "Hands-on live training sessions, SOP cheat sheets, and super-admin handover documentation.",
      scaleTitle: "Enterprise Academy (Optional)",
      scaleDesc: "Bilingual video LMS library, laminated shop-floor SOP cards, and ongoing onboarding playbooks.",
    },
    discoveryAdvantage:
      "We run training in real operational sprints during UAT so users build muscle memory before cutover.",
  },
];

// ------------------------------------------------------------------------------
// 11. FREQUENTLY ASKED QUESTIONS (FAQS)
// ------------------------------------------------------------------------------
export interface FAQItem {
  q: string;
  a: string;
}

export const FAQS: FAQItem[] = [
  {
    q: "1. What is Business ERP vs basic accounting software?",
    a: "Basic accounting records historical numbers after production finishes. Business ERP actively coordinates the physical plant: multi-level BOMs, machine routing, scrap % calculation, WIP buffers, and barcode scanning, generating automated GST ledger entries on execution.",
  },
  {
    q: "2. Why choose Odoo over Tier-1 ERPs (SAP/Oracle)?",
    a: "Odoo delivers 90% of Tier-1 capability at a fraction of the cost of ownership, deploying in weeks instead of 18+ months. Its modern mobile and tablet UI is adopted easily by shop floor workers.",
  },
  {
    q: "3. Can Odoo handle multi-level nested BOMs?",
    a: "Yes. Odoo supports unlimited hierarchical BOM nesting from parent assemblies through sub-assemblies to raw fasteners and chemicals, with engineering change orders (ECO) and scrap management.",
  },
  {
    q: "4. Can Odoo track raw materials and WIP across Indian states and warehouses?",
    a: "Yes. Every movement is barcode-scanned in real time: from raw stock intake at port or vendor depots, to production floor WIP staging at Gurgaon and Manesar, through to finished stock at Delhi NCR and regional fulfillment hubs.",
  },
  {
    q: "5. Is the system compliant with Indian GST & e-Invoicing?",
    a: "Completely. Suvrin India deployments come pre-configured with GST rate rules, HSN/SAC code mapping, automated e-invoicing (IRN generation), e-Way bill integration, and push-button generation of GSTR-1 and GSTR-3B reports.",
  },
  {
    q: "6. Can you integrate Odoo with our existing Tally software?",
    a: "Yes. If your finance team wants to retain Tally Prime while running shop floor and inventory in Odoo, we provide a bidirectional sync bridge. Or we can migrate historical ledgers fully into Odoo.",
  },
  {
    q: "7. How long does a typical implementation take?",
    a: "A focused implementation for a single-plant discrete business takes 8 to 12 weeks from initial audit to live go-live. Multi-plant hybrid operations typically range from 14 to 20 weeks.",
  },
  {
    q: "8. Do you offer physical on-site audits in Gurgaon & Delhi NCR?",
    a: "Yes. Our team is stationed at DLF Cyber City, Gurgaon. We conduct physical walkthroughs and scoping sessions in IMT Manesar, Udyog Vihar, Faridabad, Okhla, Noida, and across Delhi NCR and India.",
  },
  {
    q: "9. How does fixed-scope pricing work and what affects our quote?",
    a: "Every Suvrin implementation is 100% fixed-scope following our 1-week discovery. Your quote is determined by 7 objective levers: user license mix (Full vs. Odoo 20 Light Users), module footprint, custom Python scope (aiming for 80% standard), third-party integrations (1–3 weeks each), legacy data hygiene, number of legal entities, and training depth. Once scoped, your price is guaranteed with zero hourly billing overruns.",
  },
];

// ------------------------------------------------------------------------------
// 11. MANUFACTURING BOTTLENECKS
// ------------------------------------------------------------------------------
export interface BottleneckStep {
  num: string;
  badge: string;
  icon: string;
  title: string;
  desc: string;
  impact: string;
  impactIcon: string;
}

export const BOTTLENECK_STEPS: BottleneckStep[] = [
  {
    num: "01",
    badge: "Data Friction",
    icon: "table_chart",
    title: "Excel Spreadsheet Dependency",
    desc: "Production schedules, inventory valuation, and job costing spreadsheets diverge across teams. Planners and accountants operate on conflicting numbers.",
    impact: "Triggers zero shop-floor visibility & blindspots",
    impactIcon: "arrow_downward",
  },
  {
    num: "02",
    badge: "Blindspots",
    icon: "visibility_off",
    title: "Zero Shop Floor Visibility",
    desc: "Leadership cannot determine machine utilization, live downtime, or bottleneck work centers until the month ends.",
    impact: "Causes unmonitored material drift & stockouts",
    impactIcon: "arrow_downward",
  },
  {
    num: "03",
    badge: "Capital Lockup",
    icon: "inventory_2",
    title: "Inventory Drift & Stockouts",
    desc: "Raw materials, WIP buffers, and finished stock numbers do not align. High-value stock remains tied up while critical components stock out.",
    impact: "Forces reactive emergency purchasing via chat",
    impactIcon: "arrow_downward",
  },
  {
    num: "04",
    badge: "Lead Times",
    icon: "local_shipping",
    title: "Procurement Lag & Manual POs",
    desc: "Purchasing teams place orders reactively via WhatsApp instead of relying on dynamic MRP reordering rules driven by real production demand.",
    impact: "Distorts true business & labor cost metrics",
    impactIcon: "arrow_downward",
  },
  {
    num: "05",
    badge: "Margin Erosion",
    icon: "request_quote",
    title: "Inaccurate Job Costing",
    desc: "True business costs—combining direct materials, machine electricity, and labor hours—are calculated weeks too late.",
    impact: "Creates accounting silos & tax filing delays",
    impactIcon: "arrow_downward",
  },
  {
    num: "06",
    badge: "Accounting Silos",
    icon: "account_balance_wallet",
    title: "Isolated Accounting (Tally Silos)",
    desc: "Legacy systems operate disconnected from shop floor reality, forcing duplicate entries and delayed Indian GST & e-invoicing filings.",
    impact: "Culminates in direct annual profit margin drain",
    impactIcon: "warning",
  },
];

// ------------------------------------------------------------------------------
// 12. CASE STUDY & VERIFIED KPIS
// ------------------------------------------------------------------------------
export interface CaseStudyKPI {
  stat: string;
  label: string;
  sub: string;
  color: string;
}

export const CASE_STUDY_KPIS: CaseStudyKPI[] = [
  {
    stat: "95%",
    label: "Excel Reduction",
    sub: "Live Odoo work orders",
    color: "text-brand-blue",
  },
  {
    stat: "< 24h",
    label: "Cost Reconciliation",
    sub: "Down from 21 days",
    color: "text-brand-green-deep",
  },
  {
    stat: "99.4%",
    label: "On-Time Dispatch",
    sub: "Across North India fleet",
    color: "text-brand-ink",
  },
  {
    stat: "4.8x",
    label: "ROI in 6 Months",
    sub: "Via scrap & admin savings",
    color: "text-brand-blue",
  },
];

// ------------------------------------------------------------------------------
// 13. ODOO MODULES & INTEGRATIONS
// ------------------------------------------------------------------------------
export interface OdooModule {
  num: string;
  title: string;
  desc: string;
}

export interface IntegrationItem {
  title: string;
  desc: string;
}

export const ODOO_MODULES: OdooModule[] = [
  {
    num: "01",
    title: "Business MRP",
    desc: "Work center load planning, routing, and operator tablet apps.",
  },
  {
    num: "02",
    title: "Multi-Level BOM",
    desc: "Version control, sub-assemblies, scrap % and alternative RM rules.",
  },
  {
    num: "03",
    title: "Production MPS",
    desc: "Master production schedules, bottleneck flags & shift planning.",
  },
  {
    num: "04",
    title: "Multi-Warehouse",
    desc: "Gurgaon, Manesar & regional hub transfers with live barcode lot tracking.",
  },
  {
    num: "05",
    title: "Auto Procurement",
    desc: "Min-stock automated RFQ triggers and tiered LPO approvals.",
  },
  {
    num: "06",
    title: "Quality Control",
    desc: "In-line QC gates, raw material tests, NCR logs & ISO 9001 audit.",
  },
  {
    num: "07",
    title: "Maintenance CMMS",
    desc: "Preventive machine maintenance, MTBF/MTTR tracking & spares.",
  },
  {
    num: "08",
    title: "Precise Job Costing",
    desc: "True cost breakdown per batch: RM, machine power, and labor.",
  },
  {
    num: "09",
    title: "Sales & MO Sync",
    desc: "Auto-convert quotations directly into shop floor business orders.",
  },
  {
    num: "10",
    title: "Indian GST Finance",
    desc: "GST e-invoicing, e-Way bills, GSTR returns, multi-currency ledger (INR/USD/EUR/AED).",
  },
];

export const INTEGRATIONS: IntegrationItem[] = [
  { title: "Tally Prime", desc: "Bi-directional bridge" },
  { title: "SCADA / PLCs", desc: "Machine cycle sync" },
  { title: "Indian Banks", desc: "HDFC, ICICI, SBI, Axis" },
  { title: "Weighbridges", desc: "RS232 Serial sync" },
];

// ------------------------------------------------------------------------------
// 14. AUDIT & CONSULTATION FORM OPTIONS
// ------------------------------------------------------------------------------
export interface SectorOption {
  value: string;
  label: string;
}

export interface SoftwareOption {
  value: string;
  label: string;
}

export const SECTOR_OPTIONS: SectorOption[] = [
  { value: "metal", label: "Metal & Steel Fabrication" },
  { value: "plastics", label: "Plastics, Polymers & Extrusion" },
  { value: "packaging", label: "Packaging, Paper & Corrugated" },
  { value: "equipment", label: "Engineering, Machinery & ETO" },
  { value: "food", label: "Food, Beverage & Halal Processing" },
  { value: "chemical", label: "Industrial Chemicals & Coatings" },
  { value: "joinery", label: "Joinery, Fitout & Woodworking" },
  { value: "other", label: "Other Discrete / Process Business" },
];

export const SOFTWARE_OPTIONS: SoftwareOption[] = [
  { value: "excel", label: "Excel Spreadsheets & WhatsApp" },
  { value: "tally", label: "Tally Prime / ERP 9" },
  { value: "legacy", label: "Legacy Custom ERP" },
  { value: "quickbooks", label: "QuickBooks / Zoho Books" },
  { value: "sap_oracle", label: "SAP / Oracle / Dynamics" },
  { value: "greenfield", label: "Greenfield Factory Buildout" },
];
