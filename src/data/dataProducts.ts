export type ProductType = {
  name: string;
  price: string;
  discounted?: string;
  image: {
    src: string;
    alt: string;
  };
};

const dataProducts: ProductType[] = [
  {
    name: "crumble chocolate cake",
    price: "299.000",
    discounted: "399.000",
    image: {
      src: "/images/cake-img-1.png",
      alt: "cake-img-1",
    },
  },
  {
    name: "mix cake",
    price: "199.000",
    image: {
      src: "/images/cake-img-2.png",
      alt: "cake-img-2",
    },
  },
  {
    name: "chocolate vanilla cake",
    price: "499.000",
    image: {
      src: "/images/cake-img-3.png",
      alt: "cake-img-3",
    },
  },
  {
    name: "chocolate strawberry cake",
    price: "205.000",
    image: {
      src: "/images/cake-img-4.png",
      alt: "cake-img-4",
    },
  },
  {
    name: "fruit pancake",
    price: "299.000",
    image: {
      src: "/images/cake-img-5.png",
      alt: "cake-img-5",
    },
  },
  {
    name: "fruit cake",
    price: "299.000",
    image: {
      src: "/images/cake-img-6.png",
      alt: "cake-img-6",
    },
  },
  {
    name: "pancake strawberry",
    price: "499.000",
    image: {
      src: "/images/cake-img-7.png",
      alt: "cake-img-7",
    },
  },
  {
    name: "fruit pancake",
    price: "299.000",
    image: {
      src: "/images/cake-img-8.png",
      alt: "cake-img-8",
    },
  },
  {
    name: "macaroon",
    price: "248.000",
    image: {
      src: "/images/cake-img-9.png",
      alt: "cake-img-8",
    },
  },
  {
    name: "mix cake",
    price: "199.000",
    image: {
      src: "/images/cake-img-10.png",
      alt: "cake-img-10",
    },
  },
];

export default dataProducts;
