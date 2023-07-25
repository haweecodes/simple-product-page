import { FootprintData } from "./FootprintStackedLayout";
import { ImageItem } from "./ImageGallery";
import { Attribute } from "./Attribute";
import { ReviewObject } from "./Rating";
import { SimilarProductProp } from "./SimilarProductTypes";

export interface Product {
    header_title: string;
    name: string;
    google_review: ReviewObject;
    amount: number;
    selling_price: number;
    discounted_price: number;
    description: string;
    images: ImageItem[];
    attributes: Attribute[];
}

export interface ProductData {
    product: Product;
    foot_print: FootprintData;
    similar_product: SimilarProductProp;
}

export interface ProductPageProps {
    data: ProductData;
}