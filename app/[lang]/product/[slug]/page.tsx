import React from "react";
import { Metadata } from "next";
import ImageGallery from "@/app/component/ImageGallery";
import Rating from "@/app/component/Rating";
import ProductPrice from "@/app/component/ProductPrice";
import ProductLeft from "@/app/component/ProductLeft";
import FootprintStackedLayout from "@/app/component/Footprint";
import SimilarProduct from "@/app/component/SimilarProduct";
import Attribute from "@/app/component/Attribute";
import { getProductData } from "@/app/requests/product.page";
import { getDictionary } from "@/app/getDictionary";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const ProductPage = async ({
  params,
}: {
  params: {
    lang: string;
  };
}) => {
  const lang = await getDictionary(params.lang);
  const productData = await getProductData();

  metadata.title = productData?.product?.name;
  metadata.description = productData?.product?.description || "";

  const isAddToCartDisabled =
    (productData?.product && productData.product?.amount < 1) ?? true;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <ImageGallery
            images={productData?.product?.images}
            propKey="url_link"
          />
        </div>
        <div className="md:col-span-4 px-4 py-4">
          <div className="font-bold text-xl mb-2">
            {productData?.product.name}
          </div>

          <Rating rating={productData?.product?.google_review} />
          <ProductLeft count={productData?.product?.amount} params={lang} />
          <ProductPrice
            price={productData?.product?.selling_price}
            discountedPrice={productData?.product?.discounted_price}
          />

          <button
            disabled={isAddToCartDisabled}
            className={`my-5 w-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-700 text-white font-bold rounded px-4 py-2 ${isAddToCartDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {lang.button.addToCart}
          </button>

          <p className="text-gray-700 text-base">
            {productData?.product.description}
          </p>

          <FootprintStackedLayout footprintData={productData?.foot_print} />
          <Attribute
            attributes={productData?.product.attributes}
            params={lang}
          />
        </div>
      </div>
      <hr />

      <div className="grid grid-rows-1 gap-4 mt-5">
        <SimilarProduct data={productData?.similar_product} params={lang} />
      </div>
      <hr />

    </div>
  );
};

export default ProductPage;
