import Image from "next/image";
import { FootprintStackedLayoutProps } from "@/app/types/FootprintStackedLayout";

const FootprintStackedLayout: React.FC<FootprintStackedLayoutProps> = ({
  footprintData,
}) => {
  if (!footprintData || Object.keys(footprintData).length === 0) {
    return (
      <div className="my-5">
        <h2 className="text-xl font-semibold mb-2">{footprintData?.title}</h2>

        <div className="flex items-center mb-2">
          <h2 className="text-md font-semibold mb-2">No Details Available</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="my-5">
      <h2 className="text-xl font-semibold mb-2">{footprintData?.title}</h2>

      <div className="flex items-center mb-2">
        <Image
          width={20}
          height={20}
          src={footprintData?.life_span?.icon}
          alt="Life Span"
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="text-sm text-black font-medium">
            {footprintData?.life_span?.title}
          </p>
          <p className="text-sm text-gray-500">
            {footprintData?.life_span?.description}
          </p>
        </div>
      </div>

      <div className="flex items-center">
        <Image
          width={20}
          height={20}
          src={footprintData?.return_policy?.icon}
          alt="Return Policy"
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <p className="text-sm text-black font-medium">
            {footprintData?.return_policy?.title}
          </p>
          <p className="text-sm text-gray-500">
            {footprintData?.return_policy?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FootprintStackedLayout;
