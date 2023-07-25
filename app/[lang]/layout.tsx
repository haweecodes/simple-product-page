import "@/app/globals.css";
import { Inter } from "next/font/google";
import LayoutWithTopNavbar from "@/app/component/Layout/layout-with-top-navbar";
import Breadcrumb from "../component/Breadcrumb/breadcrumb";
import Footer from "../component/Footer";
import BreadcrumbWrapper from "../component/Breadcrumb";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <LayoutWithTopNavbar>
          <BreadcrumbWrapper params={params}>{children}</BreadcrumbWrapper>
          <Footer params={params}></Footer>
        </LayoutWithTopNavbar>
      </body>
    </html>
  );
}
