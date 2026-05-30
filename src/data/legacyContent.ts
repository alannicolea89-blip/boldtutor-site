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
  // Already have proper Astro pages or redirects
  'about-boldtutor-private-tutor-high-school-and-university-sydney',
  'contact-boldtutor',
  'faqs',
  'subjects',
  'make-an-offer',
  'subjects/society-and-culture',
  'english-services',
  'prices/hsc-english',
  'prices/english-yr7-11',
  'prices/learn-english',
  'subjects/modern-history',
  'university-tuition-sydney',
  // Legacy pages being 301-redirected
  'hsc-english-private-tutor-sydney',
  'high-school-english',
  'english-tutor-new-students-40-for-1-hour-private-tutoring-at-your-desired-location',
  'every-fifth-session-free',
  'learn-english-language',
  'modern-history-quiz',
  'money-back-guarantee-university-tuition-assignment-help',
  't-s-eliot-poetry-hsc-quiz',
  'the-crucible-hsc-quiz',
  'university-tutor-private',
  'society-and-culture-quiz',
]).has(path));

export const resourceEntries = entries.filter(({ category }) => category === 'offer' || category === 'quiz');

export function getLegacyEntry(pathname: string) {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '');
  return entries.find((entry) => entry.path === cleanPath);
}
