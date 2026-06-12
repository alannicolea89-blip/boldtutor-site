export interface GoogleReview {
  name: string;
  rating: number;
  quote: string;
}

// Shared across pages so review text stays consistent site-wide.
export const googleReviews: GoogleReview[] = [
  {
    name: 'Sophie',
    rating: 5,
    quote: 'Alan has been a fantastic tutor for the last few years. His work has enhanced my English grade for the HSC and he has given great advice along the way. I am grateful he was my tutor!',
  },
  {
    name: 'Stephanie',
    rating: 5,
    quote: 'Alan is an incredible tutor who has guided me through the English Advanced course and helped me achieve consistently high results. He is incredibly attentive and readily available to help at all times which is extremely valued during these valuable academic years. His knowledge is truly something priceless. Highly recommend — especially if you are ready to achieve great marks! 10/10!',
  },
  {
    name: 'Charli',
    rating: 5,
    quote: 'Alan is a fantastic tutor for all schooling ages, especially with high school. He guided me through my high school English journey, especially during the times when I was struggling. I recommend no one else — highly recommended!',
  },
  {
    name: 'Fred',
    rating: 5,
    quote: 'Alan is a great English tutor who is patient, clear, and supportive. He helped improve my confidence and understanding a lot. Highly recommended.',
  },
  {
    name: 'Joshua',
    rating: 5,
    quote: "Alan's been an incredible tutor when it comes to leading me in English for my HSC, if you're struggling in English or looking for a tutor then I highly recommend you go to Alan.",
  },
];

/**
 * Site-wide Google rating totals, used in the JSON-LD structured data
 * (aggregateRating) so search engines have an accurate rating and count.
 * The review count is no longer shown in visible page copy — labels read
 * "5.0 ★ average" — so this is schema-only. Update whenever the Google
 * Business Profile changes.
 */
export const reviewAggregate = {
  ratingValue: '5.0',
  reviewCount: '58',
} as const;
