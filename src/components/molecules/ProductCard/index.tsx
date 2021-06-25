import { ProductType } from "data/dataProducts";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

interface Props {
  item: ProductType;
}

const buttonVariant: Variants = {
  show: { bottom: 0, transition: { duration: 0.2 } },
  hide: { bottom: "-50%", transition: { duration: 0.1 } },
};

const ProductCard: React.FC<Props> = ({ item }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      animate={isActive ? { scale: 1.08 } : { scale: 1 }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          width="236"
          height="236"
          layout="intrinsic"
        />
        <motion.button
          variants={buttonVariant}
          initial="show"
          animate={isActive ? "show" : "hide"}
          className="absolute left-0 w-full py-1 text-center transition-all bg-black cursor-pointer"
        >
          <span className="text-sm font-semibold text-white uppercase">
            hubungi kami
          </span>
        </motion.button>
      </div>
      <div className="mt-4 text-center">
        <Link href={`/${item.slug}`}>
          <motion.a
            animate={isActive ? { color: "#BB8432" } : { color: "#333333" }}
            className="text-black cursor-pointer"
          >
            <h4 className="uppercase truncate">{item.name}</h4>
          </motion.a>
        </Link>
        {item.discounted && (
          <div className="text-xs text-black line-through">
            IDR {item.discounted}
          </div>
        )}
        <div className="font-bold text-black">IDR {item.price}</div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
