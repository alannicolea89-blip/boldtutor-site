/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CLIENT DATA
 * ─────────────────────────────────────────────────────────────────────────────
 * Business-specific copy: name, phone, email, address, socials.
 * Imported by Header, Footer, Contact page, and Head/SEO components.
 *
 * No component should hardcode a business name or phone number —
 * everything comes from this file or brand.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const client = {
  name: 'Boldtutor',
  email: 'contact@boldtutor.com.au',
  phoneForTel: '+61416419270',
  phoneFormatted: '0416 419 270',
  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: '',
  address: {
    lineOne: 'Sydney',
    lineTwo: '',
    city: 'Sydney',
    state: 'NSW',
    zip: '2000',
    country: 'AU',
    mapLink: 'https://www.google.com/search?q=boldtutor',
  },
  socials: {
    facebook: '',
    instagram: 'https://www.instagram.com/boldtutor/',
    google: 'https://www.google.com/search?q=boldtutor',
  },
  domain: 'https://boldtutor.com.au',
} as const;

export type Client = typeof client;
