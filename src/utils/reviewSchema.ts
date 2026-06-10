import { googleReviews, reviewAggregate, type GoogleReview } from '../data/googleReviews';

/**
 * Builds the `aggregateRating` + `review` fragment for a schema.org node from
 * the real Google reviews shown on the page. Spread it into a review-snippet
 * eligible type (e.g. Course) so the structured data always matches the visible
 * review cards:
 *
 *   schema={{ '@context': 'https://schema.org', '@type': 'Course', ...reviewRatingSchema() }}
 *
 * Note: only attach this to eligible types like Course or Product. Google treats
 * ratings placed directly on LocalBusiness/Organization about itself as
 * "self-serving" and ignores them for star rich results.
 *
 * The marked-up reviews MUST be visible on the page — every page using this also
 * renders the same `googleReviews` cards, so that requirement is satisfied.
 *
 * @param reviews    the reviews actually rendered on the page — pass the page's
 *                   own array so the embedded `review` nodes match what's shown.
 * @param sampleSize how many individual reviews to embed (a representative
 *                   sample keeps the JSON-LD lean).
 */
export function reviewRatingSchema(reviews: GoogleReview[] = googleReviews, sampleSize = 3) {
  return {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reviewAggregate.ratingValue,
      reviewCount: reviewAggregate.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.slice(0, sampleSize).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.name },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating),
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: r.quote,
    })),
  };
}
