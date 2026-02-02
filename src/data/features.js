import {
  Zap,
  Database,
  Puzzle,
  Target,
  LineChart,
  Settings,
  GraduationCap,
  Users,
  GitBranch,
  MessageSquare,
  FileText,
  Calculator,
  Package,
  FolderKanban,
} from "lucide-react";

export const panelData = [
  {
    id: 1,
    lightIcon: "/assets/images/template/icon-diamond.svg",
    darkIcon: "/assets/images/template/icon-diamond-dark.svg",
    altText: "impact-icon",
    title: "Make an impact",
    description: "We’re building something big. Something that has the power to change the trajectory of any sized business for the better.",
  },
  {
    id: 2,
    lightIcon: "/assets/images/template/icon-trophy.svg",
    darkIcon: "/assets/images/template/icon-trophy-dark.svg",
    altText: "crown-icon",
    title: "Learn",
    description: "Teams are masters of their craft though we’re all experts in our respective fields, we always make time to expand our minds.",
  },
  {
    id: 3,
    lightIcon: "/assets/images/template/icon-crown.svg",
    darkIcon: "/assets/images/template/icon-crown-dark.svg",
    altText: "empathy-icon",
    title: "Empathy",
    description: "We strive to be empathetic to every customer and colleague and by doing so we provide a better experience for all.",
  },
];

export const features = [
  {
    id: 4,
    imgSrc: "/assets/images/template/feature-01.svg",
    imgAlt: "Share tools quickly and confidently in minutes",
    title: "Share tools quickly and confidently in minutes",
    description:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
  },
  {
    id: 5,
    imgSrc: "/assets/images/template/feature-02.svg",
    imgAlt: "Connect every part of your entire business",
    title: "Connect every part of your entire business",
    description: "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
    linkText: "See all integrations",
    linkHref: "#",
  },
  {
    id: 6,
    imgSrc: "/assets/images/template/feature-03.svg",
    imgAlt: "Maintain compliance and control your apps",
    title: "Maintain compliance and control your apps",
    description:
      "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes.",
  },
];

export const features2 = [
  {
    icon: "unicon-document",
    title: "Proposals",
    description: "Share Tools in minutes with pre-built, customizable templates.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
  {
    icon: "unicon-model",
    title: "Quotes",
    description: "Find out in real time when they’re opened, viewed and signed.",
    backgroundColor: "bg-primary text-white",
  },
  {
    icon: "unicon-task-approved",
    title: "Contracts",
    description: "Use our native CRM integrations to pull customer data into your Tools fast.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
  {
    icon: "unicon-touch-interaction",
    title: "eSignatures",
    description: "Keep your data secure with our legally-binding e-Signature software.",
    backgroundColor: "bg-white dark:bg-gray-800",
  },
];

export const features3 = [
  {
    id: 1,
    imgSrc: "/assets/images/template/smart-feature-img-1.jpeg",
    altText: "People & Workforce",
    step: "01.",
    title: "People & Workforce",
    description: `Hire the best talent, onboard them smoothly, manage attendance & leaves, run error-free payroll, and develop high performers — all from one place.`,
    link: {
      href: "#",
      text: "Explore People Solutions",
    },
    points: [
      "Recruitment & Applicant Tracking",
      "Employee Records & Self-Service",
      "Attendance, Leaves & Shifts",
      "Payroll with Full Compliance (EPF/ESI/TDS)",
      "Performance & Goal Management",
      "Learning & Development",
    ],
  },
  {
    id: 2,
    imgSrc: "/assets/images/template/smart-feature-img-2.jpeg",
    altText: "Sales & Customer Growth",
    step: "02.",
    title: "Sales & Customer Growth",
    description: `Capture every lead, nurture them through your pipeline, close deals faster, and turn customers into advocates — with AI-powered insights guiding every step.`,
    link: {
      href: "#",
      text: "Explore Sales Solutions",
    },
    points: [
      "Lead Capture & Scoring",
      "Pipeline & Deal Management",
      "WhatsApp, Email & SMS Campaigns",
      "Quotations & Invoicing",
      "Customer Success & Retention",
      "Sales Analytics & Forecasting",
    ],
  },
  {
    id: 3,
    imgSrc: "/assets/images/template/smart-feature-img-3.jpeg",
    altText: "Finance & Operations",
    step: "03.",
    title: "Finance & Operations",
    description: `Track every rupee, manage inventory, handle purchases, reconcile accounts, and get real-time financial visibility — without switching to separate accounting software.`,
    link: {
      href: "#",
      text: "Explore Finance Solutions",
    },
    points: [
      "Accounting & Chart of Accounts",
      "Bank Reconciliation",
      "Expense Management",
      "Inventory & Warehouse",
      "Purchase Orders & Vendors",
      "Asset Management",
    ],
  },
  {
    id: 4,
    imgSrc: "/assets/images/template/smart-feature-img-4.jpeg",
    altText: "Projects & Productivity",
    step: "04.",
    title: "Projects & Productivity",
    description: `Plan projects, assign tasks, run sprints, track time, monitor productivity, and deliver on time — with complete visibility for managers and teams.`,
    link: {
      href: "#",
      text: "Explore Project Solutions",
    },
    points: [
      "Project Planning & Tracking",
      "Tasks, Sprints & Kanban",
      "Time Tracking & Timesheets",
      "Employee Productivity Monitoring",
      "Client & Vendor Management",
      "Resource Allocation",
    ],
  },
];




export const whatwebelive = [
  {
    id: 1,
    imgSrc: "/assets/images/common/what-we-belive-img-1.png",
    altText: "Business should be easy",
    step: "01.",
    title: "Business should be easy",
    description: ` Not easy as in "no effort required" — building something meaningful always takes work. But easy as in: your tools should help you, not
              slow you down. Your software should work together, not against each other. Your data should be in one place, not scattered across 10
              logins.`,
    link: {
      href: "#",
      text: "Explore People Solutions",
    },
    bg: "#eef2f2",
    textColor: "#000",
    titleColor: "#000",
  },
  {
    id: 2,
    imgSrc: "/assets/images/common/what-we-belive-img-2.png",
    altText: "India deserves world-class software",
    step: "02.",
    title: "India deserves world-class software",
    description: `We're proudly built in India, for Indian businesses first. That means 100% statutory compliance (EPF, ESI, PT, TDS, GST) baked in from
              day one. WhatsApp campaigns because that's how India communicates. UPI payments because that's how India transacts. But also
              global-ready, because ambition knows no borders.`,
    link: {
      href: "#",
      text: "Explore Sales Solutions",
    },
    bg: "#9ec3f9",
    textColor: "#000",
    titleColor: "#000",
  },
  {
    id: 3,
    imgSrc: "/assets/images/common/what-we-belive-img-3.png",
    altText: "AI should be useful, not just impressive",
    step: "03.",
    title: "AI should be useful, not just impressive",
    description: `We don't add AI for marketing buzzwords. Our intelligence features predict problems before they happen, recommend actions that actually
              help, and automate the tedious stuff so your team can focus on what matters.`,
    link: {
      href: "#",
      text: "Explore Finance Solutions",
    },
    bg: "#0868f5",
    textColor: "#fff",
    titleColor: "#fff",
  },
  {
    id: 4,
    imgSrc: "/assets/images/common/what-we-belive-img-4.png",
    altText: "Small businesses deserve big-business tools",
    step: "04.",
    title: "Small businesses deserve big-business tools",
    description: `You shouldn't need a Fortune 500 budget to get Fortune 500 capabilities. We've built enterprise-grade features with startup-friendly pricing.`,
    link: {
      href: "#",
      text: "Explore Project Solutions",
    },
    bg: "#011f99",
    textColor: "#fff",
    titleColor: "#fff",
  },
];


export const features4 = [
  {
    icon: "unicon-document",
    title: "Proposals",
    description: "Share Tools in minutes with pre-built, customizable templates.",
  },
  {
    icon: "unicon-model",
    title: "Quotes",
    description: "Find out in real time when they’re opened, viewed and signed.",
  },
  {
    icon: "unicon-task-approved",
    title: "Contracts",
    description: "Use our native CRM integrations to pull customer data into your Tools fast.",
  },
  {
    icon: "unicon-touch-interaction",
    title: "eSignatures",
    description: "Keep your data secure with our legally-binding e-Signature software.",
  },
  {
    icon: "unicon-sub-volume",
    title: "Forms",
    description: "Share via direct link or by embedding them on your website, no coding necessary.",
  },
  {
    icon: "unicon-currency",
    title: "Payments",
    description: "Collect them instantly right from your contract, while increasing your close rate by 36%.",
  },
];

export const featureItems = [
  {
    imageSrc: "/assets/images/template/home-four-feature-01.png",
    altText: "Ensuring timely delivery and maximum efficiency",
    title: "Ensuring timely delivery and maximum efficiency",
    description: "We offers advanced project management features such as Gantt charts, task dependencies, and resource allocation",
    linkText: "Let's find out",
    icon: "unicon-cloud-download",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-02.png",
    altText: "No more digging endless reports and spreadsheets",
    title: "No more digging endless reports and spreadsheets",
    description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    linkText: "See all spreadsheets",
    icon: "unicon-course",
    reverseOrder: true,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-03.png",
    altText: "Share files, and communicate with your team in real-time",
    title: "Share files, and communicate with your team in real-time",
    description: "You can easily assign tasks, share files, and communicate with your team in real-time, no matter where they are located.",
    linkText: "See apps & integrations",
    icon: "unicon-volume-block-storage",
    reverseOrder: false,
  },
  {
    imageSrc: "/assets/images/template/home-four-feature-04.png",
    altText: "Collaboration is made seamless with Eazy",
    title: "Collaboration is made seamless with Eazy",
    description:
      "Get real-time access to approvals, comments and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
    linkText: "Let's find out",
    icon: "unicon-model",
    reverseOrder: true,
  },
];

export const featureItems2 = [
  {
    order: "order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/zap.svg",
    alt: "feature-icon",
    title: "All-in-One Platform",
    description: "Stop paying for 5-10 different tools. Get HR, Sales, Finance, Projects, and Analytics in one unified system that actually talks to each other.",
  },
  {
    order: "order-0",
    iconSrc: "/assets/images/common/icons/database.svg",
    alt: "feature-icon",
    title: "Built for India",
    description: "100% EPF, ESI, PT, TDS compliance. GST-ready invoicing. WhatsApp campaigns. UPI payments. We understand Indian business.",
    bgClass: "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-bottom-end-0 lg:rounded-bottom-0",
  },
  {
    order: "order-2 sm:order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/puzzle.svg",
    alt: "feature-icon",
    title: "AI That Actually Helps",
    description: "Predict attendance issues, forecast sales, identify flight risks, and get actionable recommendations — not just dashboards.",
  },
  {
    order: "order-1 lg:order-0",
    iconSrc: "/assets/images/common/icons/target.svg",
    alt: "feature-icon",
    title: "Save 30% or More",
    description: "One platform, one subscription. No integration costs, no middleware, no hidden fees. Most customers save 30%+ vs. separate tools.",
    bgClass: "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-start-0 lg:rounded-top-end-0 lg:rounded-start-1-5",
  },
  {
    order: "order-3 lg:order-0",
    iconSrc: "/assets/images/common/icons/line-chart.svg",
    alt: "feature-icon",
    title: "Work From Anywhere",
    description: "Full-featured mobile apps for employees and managers. Apply leave, approve requests, check reports — all from your phone.",
  },
  {
    order: "order-2 lg:order-0",
    iconSrc: "/assets/images/common/icons/settings.svg",
    alt: "feature-icon",
    title: "Enterprise Security",
    description: "Bank-grade encryption, role-based access, audit trails, and data residency in India. Your data is safe with us.",
    bgClass: "bg-gradient-45 from-secondary to-transparent dark:from-gray-700 sm:rounded-top-end-0 lg:rounded-top-start-0 lg:rounded-top-end-1-5",
  },
];

export const features5 = [
  {
    Icon: Zap,
    alt: "feature-icon",
    title: "Recruitment",
    desc: "Find and hire the best talent faster",
  },
  {
    Icon: Database,
    alt: "feature-icon",
    title: "Onboarding",
    desc: "Welcome new hires with automated workflows",
  },
  {
    Icon: Puzzle,
    alt: "feature-icon",
    title: "Attendance",
    desc: "Track time with biometric, geo, or mobile",
  },
  {
    Icon: Target,
    alt: "feature-icon",
    title: "Leave Management",
    desc: "Flexible policies, instant approvals",
  },
  {
    Icon: LineChart,
    alt: "feature-icon",
    title: "Payroll",
    desc: "100% compliant Indian payroll",
  },
  {
    Icon: Settings,
    alt: "feature-icon",
    title: "Performance",
    desc: "Goals, reviews & continuous feedback",
  },
  {
    Icon: GraduationCap,
    alt: "feature-icon",
    title: "Learning (LMS)",
    desc: "Train & upskill your workforce",
  },
  {
    Icon: Users,
    alt: "feature-icon",
    title: "Lead Management",
    desc: "Capture, score & convert leads",
  },
  {
    Icon: GitBranch,
    alt: "feature-icon",
    title: "Pipeline",
    desc: "Visual deal tracking & forecasting",
  },
  {
    Icon: MessageSquare,
    alt: "feature-icon",
    title: "Campaigns",
    desc: "WhatsApp, Email & SMS outreach",
  },
  {
    Icon: FileText,
    alt: "feature-icon",
    title: "Invoicing",
    desc: "Professional quotes & invoices",
  },
  {
    Icon: Calculator,
    alt: "feature-icon",
    title: "Accounting",
    desc: "Books, journals & reconciliation",
  },
  {
    Icon: Package,
    alt: "feature-icon",
    title: "Inventory",
    desc: "Stock, warehouse & variants",
  },
  {
    Icon: FolderKanban,
    alt: "feature-icon",
    title: "Projects",
    desc: "Plan, track & deliver on time",
  },
];

export const features6 = [
  {
    id: 1,
    imgSrc: "/assets/images/template/feature-01.svg",
    imgAlt: "Share tools quickly and confidently in minutes",
    title: "Share tools quickly and confidently in minutes",
    description:
      "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions.",
    link: null,
  },
  {
    id: 2,
    imgSrc: "/assets/images/template/feature-02.svg",
    imgAlt: "Connect every part of your entire business",
    title: "Connect every part of your entire business",
    description: "Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.",
    link: { text: "See all integrations", href: "#" },
  },
  {
    id: 3,
    imgSrc: "/assets/images/template/feature-03.svg",
    imgAlt: "Maintain compliance and control your apps",
    title: "Maintain compliance and control your apps",
    description:
      "Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks, and lock all legal information to prevent costly mistakes.",
    link: null,
  },
  {
    id: 4,
    imgSrc: "/assets/images/template/feature-04.svg",
    imgAlt: "Review quickly and confidently",
    title: "Review quickly and confidently",
    description:
      "Get real-time access to approvals, comments, and version tracking. Smart features like variables and conditional logic help you eliminate Tool errors.",
    link: null,
  },
];
