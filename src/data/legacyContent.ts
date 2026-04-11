import { legacyEntries } from './legacyContent.generated';

export type LegacyEntry = {
  kind: 'page' | 'post';
  path: string;
  sourceUrl: string;
  title: string;
  description: string;
  content: string;
  date: string | null;
  category: 'core' | 'subject' | 'offer' | 'quiz' | 'legal';
};

export const entries = legacyEntries as LegacyEntry[];

export const exactRouteEntries = entries.filter(({ path }) => !new Set([
  'about-boldtutor-private-tutor-high-school-and-university-sydney',
  'contact-boldtutor',
  'faqs',
  'subjects',
  'make-an-offer',
  'subjects/society-and-culture',
]).has(path));

export const resourceEntries = entries.filter(({ category }) => category === 'offer' || category === 'quiz');

export function getLegacyEntry(pathname: string) {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  return entries.find((entry) => entry.path === cleanPath);
}
