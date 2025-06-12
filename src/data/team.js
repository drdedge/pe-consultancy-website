// Import images at the top of the file
import davidPhoto from '../assets/images/about/team/david-edgeley.jpg';
import jamalPhoto from '../assets/images/about/team/jamal-ahmad.jpg';

export const teamMembers = [
  {
    id: 'david-edgeley',
    name: 'David Edgeley',
    role: 'Co-Founder & AI Strategy Lead',
    photo: davidPhoto,
    background: [
      "Vice President of AI at Alcentra (BSP, Franklin Templeton) architecting enterprise AI solutions",
      "Former PwC Deals Generative AI Architect who delivered 12+ POCs and production applications",
      "Chartered Accountant with PhD in Computational Chemistry bridging finance and technology",
      "10+ years developing end-to-end AI/ML solutions from ideation to production rollout"
    ],
    expertise: [
      "Enterprise AI Architecture",
      "Financial Services & Private Equity",
      "Cloud & ML Engineering",
      "Entrepreneurship & Innovation"
    ],
    achievements: [
      "Built Deals-wide 'Generative Analytics Toolkit' used to address some of the core challnges Deal teams repeatedly have to address",
      "Generated £4M annual revenue through customer analytics solutions at PwC",
      "Founded property management and export businesses alongside corporate career",
      "Associate Lecturer pioneering AI module at XJTLU with exceptional student feedback"
    ]
  },
  {
    id: 'jamal-ahmad',
    name: 'Jamal Ahmad',
    role: 'Co-Founder & Financial Modelling Expert',
    photo: jamalPhoto,
    background: [
      "Senior financial modelling specialist with deep M&A and restructuring expertise",
      "Led complex transactions including Barclays' £1.8bn options pricing and Intu plc restructuring",
      "Pioneered innovative solutions using Monte Carlo simulations and genetic algorithms",
      "Expert in automating financial processes with AI/ML and advanced analytics"
    ],
    expertise: [
      "Financial Modelling & Valuation",
      "M&A Advisory & Due Diligence",
      "Options Pricing & Stochastic Modelling",
      "AI/ML & Process Automation"
    ],
    achievements: [
      "Advised on £6bn+ in complex transactions including family disputes and restructurings",
      "Built genetic algorithm model for $6bn Project Carbon, enabling fair asset allocation",
      "Developed automated reporting solutions for Rothschild Direct Lending using Azure AI",
      "Created value for startups through working capital optimization and cost reduction"
    ]
  }
];

export const approachMetrics = [
  {
    value: "6-8",
    label: "Weeks to POC"
  },
  {
    value: "50+",
    label: "PE Transactions"
  },
  {
    value: "20+",
    label: "Portfolio Deployments"
  },
  {
    value: "15-20%",
    label: "Average Revenue Uplift"
  }
];

export const engagementModels = [
  {
    icon: "🏢",
    title: "Embedded Delivery",
    description: "We work hands-on in your environment, ensuring full compliance with your data governance and architecture standards. Our team integrates seamlessly with your existing infrastructure.",
    features: [
      "On-site or remote integration",
      "Use your tools and platforms",
      "Follow your security protocols",
      "Knowledge transfer throughout"
    ]
  },
  {
    icon: "🔧",
    title: "Build & Transfer",
    description: "We develop self-hosted solutions that you own completely. Your data never leaves your environment, ensuring full compliance and security.",
    features: [
      "Full IP ownership",
      "Self-hosted in your cloud",
      "Complete documentation",
      "Training for your team"
    ]
  },
  {
    icon: "🤝",
    title: "Collaborative Integration",
    description: "We excel at bridging the gap between IT, analytics teams, and front office stakeholders. Working closely with your SMEs ensures solutions that actually get used.",
    features: [
      "SME collaboration workshops",
      "Cross-functional alignment",
      "Business-IT translation",
      "Change management support"
    ]
  },
  {
    icon: "📊",
    title: "Product & Project Leadership",
    description: "Beyond technical delivery, we provide experienced product and project management to ensure successful outcomes and adoption across your organization.",
    features: [
      "Agile delivery management",
      "Product roadmap development",
      "Sprint planning & execution",
      "Success metrics tracking"
    ]
  }
];

export const philosophyPoints = [
  {
    title: "No Black Boxes",
    description: "Fully transparent, documented solutions you can understand and modify"
  },
  {
    title: "Skills Transfer",
    description: "Your team learns alongside delivery, ensuring sustainable success"
  },
  {
    title: "Architecture Alignment",
    description: "Solutions that fit perfectly within your existing technology landscape"
  }
];