"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProductLeft from "@/app/component/ProductLeft";
import { ProductCardProps } from "@/app/types/SimilarProductTypes";

const ProductCard: React.FC<ProductCardProps> = ({ product, params }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="border rounded-lg overflow-hidden shadow-md p-4"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      data-testid="product-card"
    >
      <Image
        width={150}
        height={150}
        src={isHovered ? product.hover_image : product.cart_image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="product-link"
      >
        <h3 className="text-lg font-semibold mb-2 h-14 overflow-hidden line-clamp-2 hover:underline">
          {product.title}
        </h3>
      </a>

      <p className="text-black font-bold">NOK {product.selling_price}</p>
      <ProductLeft count={product?.amount} params={params} />
    </div>
  );
};

export default ProductCard;
