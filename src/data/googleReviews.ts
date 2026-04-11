export interface GoogleReview {
  name: string;
  rating: number;
  quote: string;
}

// Shared across pages so review text stays consistent site-wide.
export const googleReviews: GoogleReview[] = [
  {
    name: 'Sophie Lee',
    rating: 5,
    quote: 'Alan has been a fantastic tutor for the last few years. His work has enhanced my English grade for the HSC and he has given great advice along the way. I am grateful he was my tutor!',
  },
  {
    name: 'Stephanie Pantazis',
    rating: 5,
    quote: 'Alan is an incredible tutor who has guided me through the English Advanced course and helped me achieve consistently high results. He is incredibly attentive and readily available to help at all times which is extremely valued during these valuable academic years. His knowledge is truly something priceless. Highly recommend — especially if you are ready to achieve great marks! 10/10!',
  },
  {
    name: 'Charli Felici',
    rating: 5,
    quote: 'Alan is a fantastic tutor for all schooling ages, especially with high school. He guided me through my high school English journey, especially during the times when I was struggling. I recommend no one else — highly recommended!',
  },
];
