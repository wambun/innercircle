export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Company',
    links: [
      { href: '/about', title: 'About Us' },
      { href: '/careers', title: 'Careers' },
      { href: '/contact', title: 'Contact' },
    ],
  },
  {
    columnName: 'Services',
    links: [
      { href: '/services/tax-planning', title: 'Tax Planning' },
      { href: '/services/virtual-cfo', title: 'Virtual CFO' },
      { href: '/services/business-advisory', title: 'Business Advisory' },
    ],
  },
  {
    columnName: 'Resources',
    links: [
      { href: '/blog', title: 'Blog' },
      { href: '/contact', title: 'Get Started' },
    ],
  },
  {
    columnName: 'Legal',
    links: [
      { href: '/privacy', title: 'Privacy Policy' },
      { href: '/terms', title: 'Terms of Service' },
    ],
  },
];
