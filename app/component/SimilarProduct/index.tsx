"use client";
import ProductCard from "../ProductCard";
import { SimilarProductsProps } from "@/app/types/SimilarProductTypes";


const SimilarProducts: React.FC<SimilarProductsProps> = ({ data, params}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{data.header}</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">
        {data.products.map((product, index) => (
          <ProductCard key={index} product={product} params={params}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
