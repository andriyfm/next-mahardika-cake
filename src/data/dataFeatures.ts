type FeatureType = {
  title: string;
  description: string;
  image: {
    alt: string;
    src: string;
  };
};

const dataFeatures: FeatureType[] = [
  {
    title: "best selling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in aliquet metus. Cras faucibus mauris ac hendrerit fringilla. Duis non leo nisi. Donec sodales mattis enim.",
    image: {
      src: "/images/Rectangle 2.png",
      alt: "Rectangle 2",
    },
  },
  {
    title: "paling populer",
    description:
      "Laborum enim sint ad ut velit aliqua mollit velit. Cillum nulla et in proident ad est proident. Cillum sit minim ad ea esse ad ipsum non enim enim. Sunt qui dolore tempor laborum eu laborum veniam est fugiat dolor reprehenderit ea et.",
    image: {
      src: "/images/Rectangle 3.png",
      alt: "Reactangle 3",
    },
  },
  {
    title: "kue anak",
    description:
      "Est officia in dolore quis tempor velit deserunt do. Eiusmod labore occaecat aute excepteur non. Ut amet ut nulla esse incididunt. Aliqua veniam ex magna nulla fugiat sit id consectetur cupidatat officia ad ipsum. Sunt pariatur minim veniam pariatur exercitation cupidatat. Aliqua commodo irure veniam sunt aute duis amet laboris anim sint. Occaecat quis elit sint minim dolore labore aliquip fugiat fugiat.",
    image: {
      src: "/images/Rectangle 4.png",
      alt: "Reactangle 4",
    },
  },
];

export default dataFeatures;
