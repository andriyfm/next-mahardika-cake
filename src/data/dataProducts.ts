export type ProductType = {
  id: string;
  name: string;
  slug: string;
  price: string;
  maxPrice: string;
  discounted?: string;
  sku: string;
  category: "kue anak" | "kue dewasa" | "kue ulang tahun";
  flavor: "cokelat" | "strawberry" | "keju";
  description: string;
  image: {
    src: string;
    alt: string;
  };
};

const dataProducts: ProductType[] = [
  {
    id: "1",
    name: "Crumble Chocolate Cake",
    slug: "crumble-chocolate-cake",
    price: "299.000",
    maxPrice: "475.000",
    discounted: "399.000",
    sku: "111",
    category: "kue dewasa",
    flavor: "cokelat",
    description:
      "Cillum labore voluptate aliqua cillum ullamco duis minim veniam. Labore minim incididunt aute ullamco minim deserunt culpa consectetur et commodo esse voluptate minim. Labore fugiat incididunt excepteur incididunt irure ullamco. Nostrud enim non amet deserunt ex anim nulla nulla fugiat ad. Minim occaecat amet ut excepteur.",
    image: {
      src: "/images/cake-img-1.png",
      alt: "cake-img-1",
    },
  },
  {
    id: "2",
    name: "Cheese Cake",
    slug: "cheese-cake",
    price: "199.000",
    maxPrice: "475.000",
    sku: "112",
    category: "kue anak",
    flavor: "keju",
    description:
      "Sunt deserunt ex velit aute fugiat magna adipisicing velit minim. Ipsum aute sint quis est aute nulla pariatur nulla ex velit. Deserunt voluptate Lorem esse cillum ad ad amet cupidatat. Mollit ex ad tempor non esse ullamco aute velit. Laboris ullamco occaecat mollit ea aute incididunt officia.",
    image: {
      src: "/images/cake-img-2.png",
      alt: "cake-img-2",
    },
  },
  {
    id: "3",
    name: "Chocolate Vanilla Cake",
    slug: "chocolate-vanilla-cake",
    price: "399.000",
    maxPrice: "475.000",
    sku: "113",
    category: "kue dewasa",
    flavor: "strawberry",
    description:
      "Anim cupidatat fugiat cupidatat commodo eiusmod eu sunt consectetur deserunt esse est et. Aliqua eu consequat fugiat ad amet adipisicing Lorem irure enim eu aliqua amet. Officia labore dolore aliqua ut. Nostrud labore fugiat enim adipisicing deserunt commodo ullamco dolor dolore fugiat deserunt. Amet aute excepteur esse ut. Non nulla enim veniam eu irure ad officia.",
    image: {
      src: "/images/cake-img-3.png",
      alt: "cake-img-3",
    },
  },
  {
    id: "4",
    name: "Chocolate Strawberry Cake",
    slug: "chocolate-strawberry-cake",
    price: "205.000",
    maxPrice: "475.000",
    sku: "114",
    category: "kue ulang tahun",
    flavor: "cokelat",
    description:
      "Dolor ullamco non officia esse officia mollit. Commodo consectetur eu exercitation amet. Fugiat do commodo et exercitation anim labore excepteur adipisicing anim ex in mollit duis. Est velit reprehenderit Lorem minim cillum mollit nisi cupidatat consectetur. Elit eiusmod quis elit magna cupidatat nisi culpa magna. Reprehenderit consectetur eiusmod Lorem dolore sint voluptate.",
    image: {
      src: "/images/cake-img-4.png",
      alt: "cake-img-4",
    },
  },
  {
    id: "5",
    name: "Pancake",
    slug: "pancake",
    price: "299.000",
    maxPrice: "475.000",
    sku: "115",
    category: "kue anak",
    flavor: "keju",
    description:
      "Excepteur laboris excepteur nulla irure elit tempor eu proident eiusmod sint enim. Exercitation voluptate pariatur minim proident pariatur quis laboris duis consequat sint non reprehenderit tempor dolore. Velit occaecat ullamco aliqua occaecat reprehenderit fugiat fugiat quis eiusmod aliqua in irure esse dolor. Est dolore dolor ex ad non non aliquip aute mollit sit occaecat voluptate officia velit. Exercitation ut ex sunt mollit irure amet.",
    image: {
      src: "/images/cake-img-5.png",
      alt: "cake-img-5",
    },
  },
  {
    id: "6",
    name: "Fruit Cake",
    slug: "fruit-cake",
    price: "299.000",
    maxPrice: "475.000",
    sku: "116",
    category: "kue dewasa",
    flavor: "strawberry",
    description:
      "Voluptate laborum velit commodo consequat tempor excepteur. Incididunt duis pariatur amet esse nisi ex pariatur nostrud nostrud consectetur. Non sunt adipisicing minim tempor officia laborum. Ipsum ea incididunt eiusmod est mollit ut culpa adipisicing minim fugiat ex. Ullamco consequat officia veniam exercitation laborum id cupidatat. Fugiat tempor voluptate est consequat amet nisi laboris irure ullamco aliquip voluptate dolore tempor.",
    image: {
      src: "/images/cake-img-6.png",
      alt: "cake-img-6",
    },
  },
  {
    id: "7",
    name: "Pancake Strawberry",
    slug: "pancake-strawberry",
    price: "399.000",
    maxPrice: "475.000",
    sku: "117",
    category: "kue ulang tahun",
    flavor: "cokelat",
    description:
      "Cillum ut laboris et voluptate exercitation nulla. Ipsum sunt commodo cillum irure eiusmod sint sint incididunt id sunt quis. Duis cillum reprehenderit ad eiusmod ea magna ut esse.",
    image: {
      src: "/images/cake-img-7.png",
      alt: "cake-img-7",
    },
  },
  {
    id: "8",
    name: "Fruit Pancake",
    slug: "fruit-pancake",
    price: "299.000",
    maxPrice: "475.000",
    sku: "118",
    category: "kue anak",
    flavor: "keju",
    description:
      "Amet irure ea fugiat adipisicing aute velit eu aliquip. Esse laborum adipisicing aliqua et dolore nisi Lorem est sint reprehenderit. Minim qui id proident Lorem cupidatat aliqua deserunt deserunt sint reprehenderit consectetur. Occaecat excepteur ullamco voluptate in in consectetur ex commodo labore aliquip commodo. Velit magna ullamco non veniam exercitation incididunt ut laboris in. Ex mollit sit voluptate consequat. Reprehenderit sit nulla magna excepteur labore aute cillum reprehenderit minim fugiat ipsum.",
    image: {
      src: "/images/cake-img-8.png",
      alt: "cake-img-8",
    },
  },
  {
    id: "9",
    name: "Black Macaroon",
    slug: "black-macaroon",
    price: "248.000",
    maxPrice: "475.000",
    sku: "119",
    category: "kue dewasa",
    flavor: "strawberry",
    description:
      "Do et sunt quis culpa occaecat eu proident est sit proident proident consequat do. Ea sint Lorem mollit reprehenderit sunt labore Lorem eiusmod ullamco aliqua aute. Quis incididunt labore Lorem voluptate laborum. Ipsum consectetur sit sint dolore et sunt. Et enim excepteur ipsum officia adipisicing ipsum. Aliquip eu ea veniam aliqua deserunt adipisicing.",
    image: {
      src: "/images/cake-img-9.png",
      alt: "cake-img-8",
    },
  },
  {
    id: "10",
    name: "Mix Cake",
    slug: "mix-cake",
    price: "199.000",
    maxPrice: "475.000",
    sku: "120",
    category: "kue ulang tahun",
    flavor: "keju",
    description:
      "Sit mollit eu laborum labore ea aliqua nulla velit proident. Et laboris deserunt aliquip sint occaecat adipisicing. Adipisicing sunt voluptate elit laborum Lorem et do laborum reprehenderit qui consequat. Nulla dolore eiusmod in elit sint nostrud ullamco adipisicing fugiat consectetur velit. Consequat consectetur tempor commodo anim et ad in.",
    image: {
      src: "/images/cake-img-10.png",
      alt: "cake-img-10",
    },
  },
];

export default dataProducts;
