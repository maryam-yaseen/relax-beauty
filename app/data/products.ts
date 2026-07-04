export type Product = {
  slug: string;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "vitamin-c-serum",
    name: "Vitamin C Serum",
    price: "PKR 550",
    image: "/image/serum.jpg",
    category: "Skincare",
    description:
      "A lightweight daily serum that visibly brightens, evens skin tone, and helps reduce the look of aging with a stable dose of Vitamin C.",
  },
  {
    slug: "hair-treatment",
    name: "Hair Treatment",
    price: "PKR 1250",
    image: "/image/bonawell.jpg",
    category: "Haircare",
    description:
      "An intensive treatment that repairs damaged strands, restores shine, and strengthens hair from root to tip.",
  },
  {
    slug: "berries-mask",
    name: "Berries Mask",
    price: "PKR 1050",
    image: "/image/berriesmask.jpg",
    category: "Skincare",
    description:
      "An antioxidant-rich mask that refreshes tired skin and leaves a natural, dewy glow after just one use.",
  },
  {
    slug: "tomato-mask",
    name: "Tomato Mask",
    price: "PKR 550",
    image: "/image/tomatomask.jpg",
    category: "Skincare",
    description:
      "A purifying mask that helps control excess oil and minimize the appearance of pores.",
  },
  {
    slug: "papaya-serum",
    name: "Papaya Serum",
    price: "PKR 699",
    image: "/image/papayaserum.jpg",
    category: "Skincare",
    description:
      "A gentle exfoliating serum that helps fade dark spots and reveal brighter, more even-toned skin.",
  },
  {
    slug: "roll-on",
    name: "Roll On",
    price: "PKR 600",
    image: "/image/farollon.jpg",
    category: "Fragrance",
    description:
      "A long-lasting, alcohol-free roll-on fragrance that keeps you feeling fresh all day.",
  },
  {
    slug: "apricot-scrub",
    name: "Apricot Scrub",
    price: "PKR 1050",
    image: "/image/apricotscrub.jpg",
    category: "Skincare",
    description:
      "A gentle exfoliating scrub with natural apricot granules that buffs away dullness for smoother skin.",
  },
];