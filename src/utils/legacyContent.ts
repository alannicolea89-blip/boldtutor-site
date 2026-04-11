const pricingColumnPattern = /\[pricing_column([^\]]+)\]([\s\S]*?)\[\/pricing_column\]/gi;
const fancyBoxPattern = /\[fancy_box([^\]]+)\]([\s\S]*?)\[\/fancy_box\]/gi;
const galleryPattern = /\[Best_Wordpress_Gallery[^\]]*\]/gi;
const quizPattern = /\[qsm\s+quiz=\d+\]/gi;
const genericShortcodePattern = /\[(?:\/)?[a-zA-Z_][^\]]*\]/g;

function getAttr(attributes: string, name: string) {
  const match = attributes.match(new RegExp(`${name}=&#8221;([^&]+?)&#8221;|${name}="([^"]+?)"`, 'i'));
  return match?.[1] ?? match?.[2] ?? '';
}

export function cleanupLegacyHtml(html: string) {
  return html
    .replace(pricingColumnPattern, (_, attributes, innerHtml) => {
      const title = getAttr(attributes, 'title');
      const price = getAttr(attributes, 'price');
      const symbol = getAttr(attributes, 'currency_symbol');
      const interval = getAttr(attributes, 'interval');
      return `
        <section class="legacy-card">
          <h3>${title}</h3>
          <p class="legacy-price">${symbol}${price}${interval ? ` <span>${interval}</span>` : ''}</p>
          ${innerHtml}
        </section>
      `;
    })
    .replace(fancyBoxPattern, (_, attributes, innerHtml) => {
      const href = getAttr(attributes, 'link_url');
      const linkText = getAttr(attributes, 'link_text') || 'Find out more';
      return `
        <section class="legacy-card">
          ${innerHtml}
          ${href ? `<p><a href="${href}">${linkText}</a></p>` : ''}
        </section>
      `;
    })
    .replace(galleryPattern, '<p><strong>Snapshots of success gallery:</strong> Please contact Boldtutor for more examples and recent results.</p>')
    .replace(quizPattern, '<p><strong>Interactive quiz:</strong> Quiz embed not available in this Astro migration.</p>')
    .replace(/<h2>\s*<h1>([\s\S]*?)<\/h1>\s*<\/h2>/gi, '<h1>$1</h1>')
    .replace(/<h2>\s*<h3>([\s\S]*?)<\/h3>\s*<\/h2>/gi, '<h2>$1</h2>')
    .replace(/<i[^>]*><\/i>/gi, '')
    .replace(/<div class="clear"><\/div>/gi, '')
    .replace(/<div\s+class="divider"><\/div>/gi, '')
    .replace(/<p>\s*<\/p>/gi, '')
    .replace(/\s(?:class|style|data-[\w-]+|width|height|loading|decoding|srcset|sizes|id|dir|lang|aria-label|aria-hidden)="[^"]*"/gi, '')
    .replace(/\s{2,}/g, ' ')
    .replace(genericShortcodePattern, '');
}

export function plainLegacyText(html: string) {
  return cleanupLegacyHtml(html)
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&#8230;/g, '...')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
