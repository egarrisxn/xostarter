import Link from "next/link";
import { GitHubIcon, XIcon, LinkedInIcon } from "./icons";

const socialLinks = [
  { href: "https://github.com", Icon: GitHubIcon, label: "GitHub" },
  { href: "https://x.com", Icon: XIcon, label: "X" },
  { href: "https://linkedin.com", Icon: LinkedInIcon, label: "LinkedIn" },
];

const SocialLink = ({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: React.ElementType;
  label: string;
}) => (
  <Link
    href={href}
    className='text-muted-foreground transition-colors hover:text-foreground'
    aria-label={label}
  >
    <Icon className='size-5' />
    <span className='sr-only'>{label}</span>
  </Link>
);

const footerSections = [
  {
    title: "Resources",
    links: [
      { label: "API Reference", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Examples", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "#" },
      { label: "Slack", href: "#" },
      { label: "BlueSky", href: "#" },
      { label: "Contributing", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "License", href: "#" },
    ],
  },
];

const FooterSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h3 className='mb-3 text-lg font-semibold'>{title}</h3>
    <ul className='space-y-2'>
      {links.map(({ label, href }) => (
        <li key={label}>
          <Link
            href={href}
            className='text-sm text-muted-foreground transition-colors hover:text-foreground'
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className='border-t'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='mb-3 text-lg font-semibold'>XOStarter</h3>
            <p className='max-w-56 text-sm text-muted-foreground'>
              A modern, feature-rich starter template for Next.js 15 with React
              19, Tailwind CSS v4, and more.
            </p>
            <div className='mt-4 flex gap-4'>
              {socialLinks.map(({ href, Icon, label }) => (
                <SocialLink key={label} href={href} Icon={Icon} label={label} />
              ))}
            </div>
          </div>
          {footerSections.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className='border-t py-6 text-center text-sm text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} XO Starter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
