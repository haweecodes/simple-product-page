import { Dictionary } from "./Dictionary";

export interface SimilarProduct {
  title: string;
  selling_price: number;
  amount: number;
  cart_image: string;
  hover_image: string;
  url: string;
}

export interface ProductCardProps {
  product: SimilarProduct;
  params: Dictionary;
}

export interface SimilarProductProp {
  header: string;
  products: SimilarProduct[];
}

export interface SimilarProductsProps {
  data: SimilarProductProp;
  params: Dictionary
}
