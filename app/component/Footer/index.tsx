import { getDictionary } from "@/app/getDictionary";
import { FooterProps } from "@/app/types/Footer";
import Footer from "./Footer";

const FooterWrapper: React.FC<{params: {
  lang: string
}}> = async ({ params }) => {
  const lang = await getDictionary(params.lang);

  return (
      <Footer params={lang}></Footer>
  );
};

export default FooterWrapper;
