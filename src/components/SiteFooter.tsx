import { Instagram, Facebook, Youtube } from 'lucide-react';
import logo from '@/assets/footer-logo.png';

const MM_BASE = 'https://madmonkeyhostels.com';

const footerColumns = [
  {
    title: 'Rules & Legal',
    links: [
      { name: 'Tour & Groups', href: `${MM_BASE}/groups` },
      { name: 'No Sex Tourists', href: `${MM_BASE}/no-sex-tourists` },
      { name: 'Cancellation Policy', href: `${MM_BASE}/cancellation-policy` },
      { name: 'Privacy Policy', href: `${MM_BASE}/privacy-policy` },
      { name: 'Terms & Conditions', href: `${MM_BASE}/terms-and-conditions` },
    ],
  },
  {
    title: 'Partner With Us',
    links: [
      { name: 'Investor', href: `${MM_BASE}/partners/investors` },
      { name: 'Property Partners', href: `${MM_BASE}/partners/property-partners` },
      { name: 'Content Creators', href: `${MM_BASE}/creative-hub` },
      { name: 'Travel Agencies', href: `${MM_BASE}/partners/travel-agents` },
      { name: 'Tour Operators & Suppliers', href: `${MM_BASE}/partners/suppliers` },
    ],
  },
  {
    title: 'Career',
    links: [
      { name: "We're Hiring", href: `${MM_BASE}/career/` },
    ],
  },
  {
    title: 'Press',
    links: [
      { name: 'Mad Monkey News', href: `${MM_BASE}/mad-monkey-in-the-news` },
      { name: 'Press Releases', href: `${MM_BASE}/press-releases` },
      { name: 'Corporate Social Responsibility', href: `${MM_BASE}/corporate-social-responsibility` },
    ],
  },
  {
    title: 'Guides',
    links: [
      { name: 'Backpacker Guides', href: `${MM_BASE}/backpackers-guide` },
      { name: "Mad Monkey's Travel Blog", href: `${MM_BASE}/our-blog` },
      { name: 'Free Content Creator Stays', href: `${MM_BASE}/creative-hub` },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/madmonkeyhostels/', label: 'Instagram' },
  { icon: Facebook, href: 'https://www.facebook.com/MadMonkeyHostels', label: 'Facebook' },
  { icon: Youtube, href: 'https://www.youtube.com/channel/UCkUGlFdhp5Ndk68j_QRS1kw', label: 'YouTube' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Top section: Logo + Socials + Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 border-b border-primary-foreground/10 pb-10">
          {/* Logo & socials */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Mad Monkey Surf Camp" className="w-20 h-20 object-contain brightness-0 invert" />
            </div>
            <div className="flex gap-4 mt-2">
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/60 hover:text-coral transition-colors transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              ))}
              {/* TikTok icon (no lucide icon available) */}
              <a
                href="https://www.tiktok.com/@madmonkeyhostels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-coral transition-colors transform hover:scale-110 font-bold text-sm leading-none flex items-center justify-center w-[22px] h-[22px]"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-sm">
            <h4 className="font-bold text-lg mb-3">Stay Updated with Us</h4>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-coral transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-lg px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-coral transition-colors"
              />
              <button className="bg-muted-foreground text-primary-foreground font-bold text-sm uppercase tracking-wider py-3 rounded-lg hover:bg-coral transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pt-10 pb-10">
          {footerColumns.map(col => (
            <div key={col.title}>
              <h5 className="font-bold text-base mb-4">{col.title}</h5>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-foreground/60 hover:text-coral transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/40 text-sm uppercase tracking-wider">
            All rights reserved © Mad Monkey. 2026
          </p>
        </div>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="h-14 lg:hidden" />
    </footer>
  );
}
