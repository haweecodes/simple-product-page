"use client";
import ProductCard from "../ProductCard";
import { SimilarProductsProps } from "@/app/types/SimilarProductTypes";

const SimilarProducts: React.FC<SimilarProductsProps> = ({ data, params }) => {
  return (
    <>
      <h2 className="text-2xl font-bold md:my-4 m-4">{data.header}</h2>
      <div className="overflow-x-scroll whitespace-nowrap">
        <div className="flex gap-5 md:m-0 m-4">
          {data.products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              params={params}
            ></ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default SimilarProducts;
