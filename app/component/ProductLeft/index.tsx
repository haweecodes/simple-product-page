import { ProductLeftCountProps } from "@/app/types/ProductLeft";

const ProductLeftCount: React.FC<ProductLeftCountProps> = ({ count, params }) => {
  const textColor = count <= 1 ? 'text-red-800' : 'text-green-800';
  
  return (
    <div className={`bg-${count <= 1 ? 'red' : 'green'}-200 rounded-lg p-2 my-2`}>
      <p className={`text-sm ${textColor}`}>{count} {params?.productPage?.stockLeft}</p>
    </div>
  );
};

export default ProductLeftCount;
