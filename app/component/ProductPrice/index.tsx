import { ProductPriceProps } from "@/app/types/ProductPrice";

const ProductPrice: React.FC<ProductPriceProps> = ({ price, discountedPrice }) => {
  const isDiscounted = discountedPrice !== 0 && discountedPrice && discountedPrice < price;

  return (
    <div className="flex items-center mb-5">
      {isDiscounted && (
        <p className="text-sm text-gray-500 line-through mr-2">NOK {price.toFixed(2)}</p>
      )}
      <p className={`text-xl font-bold ${isDiscounted ? 'text-green-600' : 'text-gray-900'}`}>
        NOK {isDiscounted ? discountedPrice!.toFixed(2) : price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductPrice;
