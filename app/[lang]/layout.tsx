import "@/app/globals.css";
import { Inter } from "next/font/google";
import LayoutWithTopNavbar from "@/app/component/Layout/layout-with-top-navbar";
import Breadcrumb from "../component/Breadcrumb";
import Footer from "../component/Footer/index";
import { getDictionary } from "../getDictionary";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  const lang = await getDictionary(params.lang);

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <LayoutWithTopNavbar params={lang}>
          <Breadcrumb params={lang}>{children}</Breadcrumb>
          <Footer params={lang}></Footer>
        </LayoutWithTopNavbar>
      </body>
    </html>
  );
}
