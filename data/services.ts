export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'calculator' | 'line-chart' | 'briefcase';
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    slug: 'tax-planning',
    title: 'Tax Planning',
    shortDescription:
      'Comprehensive tax planning services that help family businesses minimize liability and maximize savings.',
    fullDescription:
      'Our tax planning services go beyond simple compliance. We work proactively with you throughout the year to identify opportunities for tax savings, ensure you take advantage of all available deductions, and structure your finances for optimal tax efficiency.',
    iconName: 'calculator',
    features: [
      'Year-round tax strategy development',
      'Business entity structure optimization',
      'Retirement planning integration',
      'Estate and succession planning',
      'Multi-state tax compliance',
      'IRS audit representation',
    ],
    benefits: [
      'Minimize your tax liability legally and ethically',
      'Avoid costly penalties and surprises',
      'Plan ahead for major business decisions',
      'Protect your wealth for future generations',
      'Peace of mind knowing experts are on your side',
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description:
          'We review your current financial situation, business structure, and tax history to identify opportunities.',
      },
      {
        step: 2,
        title: 'Strategy Development',
        description:
          'Our team develops a customized tax strategy aligned with your business goals and personal objectives.',
      },
      {
        step: 3,
        title: 'Implementation',
        description:
          'We help you implement the recommended strategies and ensure all documentation is in order.',
      },
      {
        step: 4,
        title: 'Ongoing Monitoring',
        description:
          'We continuously monitor tax law changes and your business situation to optimize your strategy.',
      },
    ],
  },
  {
    slug: 'virtual-cfo',
    title: 'Virtual CFO',
    shortDescription:
      'Expert financial guidance and strategic insights to help you make smart business decisions.',
    fullDescription:
      'Get the strategic financial leadership your business needs without the cost of a full-time CFO. Our Virtual CFO services provide you with expert guidance on financial planning, cash flow management, and strategic decision-making.',
    iconName: 'line-chart',
    features: [
      'Financial strategy and planning',
      'Cash flow forecasting and management',
      'Budget development and monitoring',
      'Financial reporting and analysis',
      'Key performance indicator tracking',
      'Growth planning and funding strategy',
    ],
    benefits: [
      'Make data-driven business decisions',
      'Improve cash flow and profitability',
      'Access CFO-level expertise affordably',
      'Scale your business with confidence',
      'Identify and address financial risks early',
    ],
    process: [
      {
        step: 1,
        title: 'Financial Assessment',
        description:
          'We conduct a comprehensive review of your financial systems, processes, and current performance.',
      },
      {
        step: 2,
        title: 'Goal Setting',
        description:
          'Together, we define clear financial goals and key metrics for your business.',
      },
      {
        step: 3,
        title: 'Strategy Implementation',
        description:
          'We implement financial systems, reporting, and processes to support your goals.',
      },
      {
        step: 4,
        title: 'Regular Reviews',
        description:
          'Monthly or quarterly meetings to review performance, adjust strategies, and plan ahead.',
      },
    ],
  },
  {
    slug: 'business-advisory',
    title: 'Business Advisory',
    shortDescription:
      'Growth-focused consulting services for small to large businesses ready to scale.',
    fullDescription:
      'Our business advisory services help you navigate the challenges of growing a successful business. From operational improvements to strategic planning, we provide the insights and guidance you need to achieve your goals.',
    iconName: 'briefcase',
    features: [
      'Strategic business planning',
      'Operational efficiency analysis',
      'Business valuation services',
      'Merger and acquisition support',
      'Succession planning',
      'Performance benchmarking',
    ],
    benefits: [
      'Gain clarity on your business direction',
      'Improve operational efficiency',
      'Prepare for successful transitions',
      'Maximize business value',
      'Navigate complex business decisions confidently',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery',
        description:
          'We learn about your business, challenges, goals, and vision for the future.',
      },
      {
        step: 2,
        title: 'Analysis',
        description:
          'Our team analyzes your operations, financials, and market position to identify opportunities.',
      },
      {
        step: 3,
        title: 'Recommendations',
        description:
          'We present actionable recommendations with clear implementation roadmaps.',
      },
      {
        step: 4,
        title: 'Support',
        description:
          'We provide ongoing support and guidance as you implement changes and grow.',
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
