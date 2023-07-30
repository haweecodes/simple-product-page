import { AttributeProps } from "@/app/types/Attribute";

const Attribute: React.FC<AttributeProps> = ({ attributes, params }) => {
  if (!attributes.length) return "";
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">
        {params?.productPage?.moreInfo}
      </h2>
      <ul className="list-disc pl-6">
        {attributes.map((attr, index) => (
          <li key={index} className="text-sm text-black font-medium">
            {attr.attribute}: <span className="font-light">{attr.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attribute;
