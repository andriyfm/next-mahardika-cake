export type ProductType = {
  id: string;
  name: string;
  slug: string;
  price: string;
  discounted?: string;
  image: {
    src: string;
    alt: string;
  };
};

const dataProducts: ProductType[] = [
  {
    id: "1",
    name: "crumble chocolate cake",
    slug: "crumble-chocolate-cake",
    price: "299.000",
    discounted: "399.000",
    image: {
      src: "/images/cake-img-1.png",
      alt: "cake-img-1",
    },
  },
  {
    id: "2",
    name: "mix cake",
    slug: "mix-cake",
    price: "199.000",
    image: {
      src: "/images/cake-img-2.png",
      alt: "cake-img-2",
    },
  },
  {
    id: "3",
    name: "chocolate vanilla cake",
    slug: "chocolate-vanilla-cake",
    price: "499.000",
    image: {
      src: "/images/cake-img-3.png",
      alt: "cake-img-3",
    },
  },
  {
    id: "4",
    name: "chocolate strawberry cake",
    slug: "chocolate-strawberry-cake",
    price: "205.000",
    image: {
      src: "/images/cake-img-4.png",
      alt: "cake-img-4",
    },
  },
  {
    id: "5",
    name: "fruit pancake",
    slug: "fruit-pancake",
    price: "299.000",
    image: {
      src: "/images/cake-img-5.png",
      alt: "cake-img-5",
    },
  },
  {
    id: "6",
    name: "fruit cake",
    slug: "fruit-cake",
    price: "299.000",
    image: {
      src: "/images/cake-img-6.png",
      alt: "cake-img-6",
    },
  },
  {
    id: "7",
    name: "pancake strawberry",
    slug: "pancake-strawberry",
    price: "499.000",
    image: {
      src: "/images/cake-img-7.png",
      alt: "cake-img-7",
    },
  },
  {
    id: "8",
    name: "fruit pancake",
    slug: "fruit-pancake",
    price: "299.000",
    image: {
      src: "/images/cake-img-8.png",
      alt: "cake-img-8",
    },
  },
  {
    id: "9",
    name: "macaroon",
    slug: "",
    price: "248.000",
    image: {
      src: "/images/cake-img-9.png",
      alt: "cake-img-8",
    },
  },
  {
    id: "10",
    name: "mix cake",
    slug: "mix-cake",
    price: "199.000",
    image: {
      src: "/images/cake-img-10.png",
      alt: "cake-img-10",
    },
  },
];

export default dataProducts;
